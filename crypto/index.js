import * as CryptoJS from 'crypto-js';

export default class Crypto {
  encrypt(value, key) {
    let encrypted = CryptoJS.AES.encrypt(value, key).toString();

    return encrypted;
  }

  decrypt(value, key) {
    let decrypted = CryptoJS.AES.decrypt(value, key);
    decrypted = decrypted.toString(CryptoJS.enc.Utf8);

    return decrypted;
  }
}
