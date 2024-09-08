/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { McqAnswerResponseWithId } from '../../models/mcq-answer-response-with-id';

export interface GetAnswerIdToQuestion$Params {
  'mcq-question-id': number;
}

export function getAnswerIdToQuestion(http: HttpClient, rootUrl: string, params: GetAnswerIdToQuestion$Params, context?: HttpContext): Observable<StrictHttpResponse<McqAnswerResponseWithId>> {
  const rb = new RequestBuilder(rootUrl, getAnswerIdToQuestion.PATH, 'get');
  if (params) {
    rb.path('mcq-question-id', params['mcq-question-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<McqAnswerResponseWithId>;
    })
  );
}

getAnswerIdToQuestion.PATH = '/mcq-answer/get-answer-id/{mcq-question-id}';
