/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { McqAnswerResponse } from '../../models/mcq-answer-response';

export interface GetMcqAnswerByQuestionId$Params {
  'mcq-question-id': number;
}

export function getMcqAnswerByQuestionId(http: HttpClient, rootUrl: string, params: GetMcqAnswerByQuestionId$Params, context?: HttpContext): Observable<StrictHttpResponse<McqAnswerResponse>> {
  const rb = new RequestBuilder(rootUrl, getMcqAnswerByQuestionId.PATH, 'get');
  if (params) {
    rb.path('mcq-question-id', params['mcq-question-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<McqAnswerResponse>;
    })
  );
}

getMcqAnswerByQuestionId.PATH = '/mcq-questions/mcq-answer/{mcq-question-id}';
