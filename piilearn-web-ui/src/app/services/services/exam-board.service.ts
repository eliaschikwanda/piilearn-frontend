/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createExamBoard } from '../fn/exam-board/create-exam-board';
import { CreateExamBoard$Params } from '../fn/exam-board/create-exam-board';

@Injectable({ providedIn: 'root' })
export class ExamBoardService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createExamBoard()` */
  static readonly CreateExamBoardPath = '/exam-boards';

  /**
   * Create a new exam board.
   *
   * Creates a new exam board instance and returns the id of the created exam board. If the id of the exam board is provided, the existing exam board is edited.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createExamBoard()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createExamBoard$Response(params: CreateExamBoard$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return createExamBoard(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new exam board.
   *
   * Creates a new exam board instance and returns the id of the created exam board. If the id of the exam board is provided, the existing exam board is edited.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createExamBoard$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createExamBoard(params: CreateExamBoard$Params, context?: HttpContext): Observable<number> {
    return this.createExamBoard$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

}
