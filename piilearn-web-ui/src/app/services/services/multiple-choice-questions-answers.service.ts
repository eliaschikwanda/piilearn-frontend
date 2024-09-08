/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getAnswerIdToQuestion } from '../fn/multiple-choice-questions-answers/get-answer-id-to-question';
import { GetAnswerIdToQuestion$Params } from '../fn/multiple-choice-questions-answers/get-answer-id-to-question';
import { McqAnswerResponseWithId } from '../models/mcq-answer-response-with-id';

@Injectable({ providedIn: 'root' })
export class MultipleChoiceQuestionsAnswersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAnswerIdToQuestion()` */
  static readonly GetAnswerIdToQuestionPath = '/mcq-answer/get-answer-id/{mcq-question-id}';

  /**
   * Get an answer id to the question whose id is passed.
   *
   * Get an answer id to the question whose id is passed
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAnswerIdToQuestion()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAnswerIdToQuestion$Response(params: GetAnswerIdToQuestion$Params, context?: HttpContext): Observable<StrictHttpResponse<McqAnswerResponseWithId>> {
    return getAnswerIdToQuestion(this.http, this.rootUrl, params, context);
  }

  /**
   * Get an answer id to the question whose id is passed.
   *
   * Get an answer id to the question whose id is passed
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAnswerIdToQuestion$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAnswerIdToQuestion(params: GetAnswerIdToQuestion$Params, context?: HttpContext): Observable<McqAnswerResponseWithId> {
    return this.getAnswerIdToQuestion$Response(params, context).pipe(
      map((r: StrictHttpResponse<McqAnswerResponseWithId>): McqAnswerResponseWithId => r.body)
    );
  }

}
