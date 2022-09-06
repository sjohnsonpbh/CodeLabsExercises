import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './user';
import { BehaviorSubject, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

const AUTH_API_KEY = 'AIzaSyBkFmz6rErPs5-84XA39vGE90Z3wGqAIlk';
const SIGN_UP_URL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
const SIGN_IN_URL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

//return this.http.post<AuthResponseData>()//

export interface AuthResponseData {
  // For Sign In Only
  registered?: boolean;
}

export interface UserData {
  email: string;
  id: string;
  _token: string;
  _tokenExpirationDate: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenExpTimer: any;
  currUser = new BehaviorSubject<Users>(null);
  currentUsers: any;
  isLoggedIn: boolean;

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post(SIGN_UP_URL + AUTH_API_KEY, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res: AuthResponseData) => {
          const { email, localId, idToken, expiresIn } = res;
          this.handleAuth(email, localId, idToken, +expiresIn);
        })
      );
  }

  signIn(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(SIGN_IN_URL + AUTH_API_KEY, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          const { email, localId, idToken, expiresIn } = res;
          this.handleAuth(email, localId, idToken, +expiresIn);
          this.isLoggedIn = true;
        })
      );
  }
  signOut() {
    this.currUser.next(null);

    localStorage.removeItem('my-gallery.users');

    if (this.tokenExpTimer) clearTimeout(this.tokenExpTimer);
    this.isLoggedIn = false;
  }

  handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    // Create Expiration Date for Token
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);

    // Create a new user based on the info passed in the form and emit that user
    const formUser = new Users(email, userId, token, expDate);
    this.currUser.next(formUser);

    // Save the new user in localStorage
    localStorage.setItem('userData', JSON.stringify(formUser));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage =
          'The password is invalid or the user does not have a password.';
        break;
      case 'USER_DISABLED':
        errorMessage =
          'The user account has been disabled by an administrator.';
        break;
    }
    return throwError(errorMessage);
  }
}
