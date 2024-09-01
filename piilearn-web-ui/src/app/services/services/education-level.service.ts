/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createExamBoard1 } from '../fn/education-level/create-exam-board-1';
import { CreateExamBoard1$Params } from '../fn/education-level/create-exam-board-1';

@Injectable({ providedIn: 'root' })
export class EducationLevelService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createExamBoard1()` */
  static readonly CreateExamBoard1Path = '/education-levels';

  /**
   * Create a new education level.
   *
   * Creates a new education level instance and returns the id of the created education level. If the id of the education level is provided, the existing education level is edited.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createExamBoard1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createExamBoard1$Response(params: CreateExamBoard1$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return createExamBoard1(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new education level.
   *
   * Creates a new education level instance and returns the id of the created education level. If the id of the education level is provided, the existing education level is edited.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createExamBoard1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createExamBoard1(params: CreateExamBoard1$Params, context?: HttpContext): Observable<number> {
    return this.createExamBoard1$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

}
