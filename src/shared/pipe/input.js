export const isEmail = email => {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return re.test(String(email).toLowerCase());
};

export const validPassword = password => {
  return password !== '' && password.length > 4;
};

export const validName = password => {
  return password !== '' && password.length > 8;
};
