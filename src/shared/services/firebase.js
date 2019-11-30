import FirebaseKeys from '../config/firebase';
import firebase from 'firebase';

class Fire {
  constructor() {
    firebase.initializeApp(FirebaseKeys);
  }

  addPost = async ({text, localUri}) => {
    const remoteUrl = await this.uploadPhotoAsync(localUri);

    return new Promise((resolve, reject) => {
      this.firestore
        .collection('posts')
        .add({
          text,
          uid: this.uid,
          timestemp: this.timestemp,
          image: remoteUrl,
        })
        .then(ref => {
          resolve(ref);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  uploadPhotoAsync = async uri => {
    const path = `photos/${this.uid}/${Date.now()}.jpg`;
    return new Promise(async (resolve, reject) => {
      const response = await fetch(uri);
      const file = await response.blob();

      let upload = firebase
        .storage()
        .ref(path)
        .put(file);

      upload.on(
        'state_changed',
        snapshot => {},
        error => {
          reject(error);
        },
        async () => {
          const url = await upload.snapshot.ref.getDownloadURL();
          resolve(url);
        },
      );
    });
  };

  get firestore() {
    return firebase.firestore();
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get timestemp() {
    return Date.now();
  }
}

Fire.shared = new Fire();

export default Fire;
