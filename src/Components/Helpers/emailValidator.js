const reg = /^[\w]{1}[\w-]*@[\w-]+\.[a-z]{2,7}$/i;

export const emailValidator = (email) => reg.test(email);
