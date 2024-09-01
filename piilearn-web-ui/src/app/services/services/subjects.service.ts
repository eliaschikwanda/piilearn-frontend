/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createSubject } from '../fn/subjects/create-subject';
import { CreateSubject$Params } from '../fn/subjects/create-subject';
import { findNumberOfUsersOnSubject } from '../fn/subjects/find-number-of-users-on-subject';
import { FindNumberOfUsersOnSubject$Params } from '../fn/subjects/find-number-of-users-on-subject';
import { findSubject } from '../fn/subjects/find-subject';
import { FindSubject$Params } from '../fn/subjects/find-subject';
import { findSubjectById } from '../fn/subjects/find-subject-by-id';
import { FindSubjectById$Params } from '../fn/subjects/find-subject-by-id';
import { findSubjectBySyllabusCode } from '../fn/subjects/find-subject-by-syllabus-code';
import { FindSubjectBySyllabusCode$Params } from '../fn/subjects/find-subject-by-syllabus-code';
import { SubjectResponse } from '../models/subject-response';

@Injectable({ providedIn: 'root' })
export class SubjectsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createSubject()` */
  static readonly CreateSubjectPath = '/subjects';

  /**
   * Create a new subject.
   *
   * Creates a new subject instance and returns the id of the created subject. If the id of the subject is provided, the existing subject is updated.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createSubject()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSubject$Response(params: CreateSubject$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return createSubject(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new subject.
   *
   * Creates a new subject instance and returns the id of the created subject. If the id of the subject is provided, the existing subject is updated.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createSubject$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSubject(params: CreateSubject$Params, context?: HttpContext): Observable<number> {
    return this.createSubject$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findSubjectBySyllabusCode()` */
  static readonly FindSubjectBySyllabusCodePath = '/subjects/syllabus-code/{syllabus-subject-code}';

  /**
   * Find a subject by sllabus code.
   *
   * Find a subject by unique sllabus code.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findSubjectBySyllabusCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  findSubjectBySyllabusCode$Response(params: FindSubjectBySyllabusCode$Params, context?: HttpContext): Observable<StrictHttpResponse<SubjectResponse>> {
    return findSubjectBySyllabusCode(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a subject by sllabus code.
   *
   * Find a subject by unique sllabus code.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findSubjectBySyllabusCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findSubjectBySyllabusCode(params: FindSubjectBySyllabusCode$Params, context?: HttpContext): Observable<SubjectResponse> {
    return this.findSubjectBySyllabusCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<SubjectResponse>): SubjectResponse => r.body)
    );
  }

  /** Path part for operation `findSubject()` */
  static readonly FindSubjectPath = '/subjects/search';

  /**
   * Find a subject by id or syllabus code.
   *
   * Find a subject by either id or unique syllabus code.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findSubject()` instead.
   *
   * This method doesn't expect any request body.
   */
  findSubject$Response(params: FindSubject$Params, context?: HttpContext): Observable<StrictHttpResponse<SubjectResponse>> {
    return findSubject(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a subject by id or syllabus code.
   *
   * Find a subject by either id or unique syllabus code.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findSubject$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findSubject(params: FindSubject$Params, context?: HttpContext): Observable<SubjectResponse> {
    return this.findSubject$Response(params, context).pipe(
      map((r: StrictHttpResponse<SubjectResponse>): SubjectResponse => r.body)
    );
  }

  /** Path part for operation `findNumberOfUsersOnSubject()` */
  static readonly FindNumberOfUsersOnSubjectPath = '/subjects/num-of-user-on-subject/{subject-id}';

  /**
   * Get a number of user who signed up for the subject.
   *
   * Get a number of users who signed up for the subject.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findNumberOfUsersOnSubject()` instead.
   *
   * This method doesn't expect any request body.
   */
  findNumberOfUsersOnSubject$Response(params: FindNumberOfUsersOnSubject$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return findNumberOfUsersOnSubject(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a number of user who signed up for the subject.
   *
   * Get a number of users who signed up for the subject.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findNumberOfUsersOnSubject$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findNumberOfUsersOnSubject(params: FindNumberOfUsersOnSubject$Params, context?: HttpContext): Observable<number> {
    return this.findNumberOfUsersOnSubject$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findSubjectById()` */
  static readonly FindSubjectByIdPath = '/subjects/id/{subject-id}';

  /**
   * Find a subject by id.
   *
   * Find a subject by id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findSubjectById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findSubjectById$Response(params: FindSubjectById$Params, context?: HttpContext): Observable<StrictHttpResponse<SubjectResponse>> {
    return findSubjectById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a subject by id.
   *
   * Find a subject by id.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findSubjectById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findSubjectById(params: FindSubjectById$Params, context?: HttpContext): Observable<SubjectResponse> {
    return this.findSubjectById$Response(params, context).pipe(
      map((r: StrictHttpResponse<SubjectResponse>): SubjectResponse => r.body)
    );
  }

}
