import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 public userInfo: any = new BehaviorSubject(null);
  data = this.userInfo.asObservable();
  UpdateuserInfo(data: any) {
    this.userInfo.next(data);
  }
  constructor() { }
  isAuthenticated() {
    const authData = JSON.parse(localStorage.getItem('authData') || '{}')
    // console.log(authData.token)
    if (authData) {
      if (authData.token) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  gettoken() {
    const authData = JSON.parse(localStorage.getItem('authData') || '{}')
    // console.log(authData.token)
    if (authData) {
      if (authData.token) {
        return authData.token
        return null
      }
    } else {
      return null
    }
  }


  getprofilecontrol() {
    const authData = JSON.parse(localStorage.getItem('authData') || '{}')
    // console.log(authData.token)
    if (authData) {
      if (authData.userId) {
        return authData.userId
        return null
      }
    } else {
      return null
    }
  }
}
