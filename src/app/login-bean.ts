
import { Login } from './login';

export class LoginBean implements Login {
  userid: String;
  password: String;
  constructor(userid: String, password: String) {
    userid.trim() ? (this.userid = userid) : (this.userid = '');
    password.trim() ? (this.password = password) : (this.password = '');
  }

  //Validate if userd or password is null
  validateLogin(): boolean {
    return this.userid ? (this.password ? true : false) : false;
  }

  //validate if password is of length 8 at minimum
  validatePassLen(): boolean {
    return this.password.length >= 8 ? true : false;
  }

  //validate if user id and password are equal
  validateUserPassEqulity(): boolean {
    return this.userid.toLocaleLowerCase() == this.password.toLocaleLowerCase()
      ? true
      : true;
  }

  //validate if user id contains other than basic latin charaters
  validateUserId(): boolean {
    return this.userid.match(/[^A-Za-z0-9@_.]/g) ? false : true;
  }
}