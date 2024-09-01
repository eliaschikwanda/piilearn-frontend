/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addSubjectsToUserProfile } from '../fn/user/add-subjects-to-user-profile';
import { AddSubjectsToUserProfile$Params } from '../fn/user/add-subjects-to-user-profile';
import { addUsernameIfAvailable } from '../fn/user/add-username-if-available';
import { AddUsernameIfAvailable$Params } from '../fn/user/add-username-if-available';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addUsernameIfAvailable()` */
  static readonly AddUsernameIfAvailablePath = '/user/update-username';

  /**
   * Add or update the username if available.
   *
   * Add or update the username if available
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addUsernameIfAvailable()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addUsernameIfAvailable$Response(params: AddUsernameIfAvailable$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addUsernameIfAvailable(this.http, this.rootUrl, params, context);
  }

  /**
   * Add or update the username if available.
   *
   * Add or update the username if available
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addUsernameIfAvailable$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addUsernameIfAvailable(params: AddUsernameIfAvailable$Params, context?: HttpContext): Observable<string> {
    return this.addUsernameIfAvailable$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `addSubjectsToUserProfile()` */
  static readonly AddSubjectsToUserProfilePath = '/user/update-subjects';

  /**
   * Add subjects to the user profile.
   *
   * Add subject to the user profiles comes as a list
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addSubjectsToUserProfile()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addSubjectsToUserProfile$Response(params: AddSubjectsToUserProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return addSubjectsToUserProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * Add subjects to the user profile.
   *
   * Add subject to the user profiles comes as a list
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addSubjectsToUserProfile$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addSubjectsToUserProfile(params: AddSubjectsToUserProfile$Params, context?: HttpContext): Observable<number> {
    return this.addSubjectsToUserProfile$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

}
