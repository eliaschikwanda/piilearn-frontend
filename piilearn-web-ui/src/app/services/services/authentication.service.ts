/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authenticateUser } from '../fn/authentication/authenticate-user';
import { AuthenticateUser$Params } from '../fn/authentication/authenticate-user';
import { AuthenticationResponse } from '../models/authentication-response';
import { confirmEmail } from '../fn/authentication/confirm-email';
import { ConfirmEmail$Params } from '../fn/authentication/confirm-email';
import { registerUser } from '../fn/authentication/register-user';
import { RegisterUser$Params } from '../fn/authentication/register-user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `registerUser()` */
  static readonly RegisterUserPath = '/auth/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerUser$Response(params: RegisterUser$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return registerUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registerUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerUser(params: RegisterUser$Params, context?: HttpContext): Observable<{
}> {
    return this.registerUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `authenticateUser()` */
  static readonly AuthenticateUserPath = '/auth/authenticate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authenticateUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticateUser$Response(params: AuthenticateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthenticationResponse>> {
    return authenticateUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authenticateUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticateUser(params: AuthenticateUser$Params, context?: HttpContext): Observable<AuthenticationResponse> {
    return this.authenticateUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthenticationResponse>): AuthenticationResponse => r.body)
    );
  }

  /** Path part for operation `confirmEmail()` */
  static readonly ConfirmEmailPath = '/auth/activate-account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `confirmEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirmEmail$Response(params: ConfirmEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return confirmEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `confirmEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirmEmail(params: ConfirmEmail$Params, context?: HttpContext): Observable<void> {
    return this.confirmEmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
