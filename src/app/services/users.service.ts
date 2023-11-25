import { Injectable } from '@angular/core';

interface IUserInfo {
  name: string;
  isLoggedIn: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  get isUserLoggedIn(): boolean {
    const userData = localStorage.getItem('user');
    if (!userData) {
      return false;
    } else {
      const parsedUser = JSON.parse(userData) as IUserInfo;
      return parsedUser.isLoggedIn;
    }
  }

  constructor() { }
}
