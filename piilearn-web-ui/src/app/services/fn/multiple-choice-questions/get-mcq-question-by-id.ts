/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { McqQuestionResponse } from '../../models/mcq-question-response';

export interface GetMcqQuestionById$Params {
  'question-id': number;
}

export function getMcqQuestionById(http: HttpClient, rootUrl: string, params: GetMcqQuestionById$Params, context?: HttpContext): Observable<StrictHttpResponse<McqQuestionResponse>> {
  const rb = new RequestBuilder(rootUrl, getMcqQuestionById.PATH, 'get');
  if (params) {
    rb.path('question-id', params['question-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<McqQuestionResponse>;
    })
  );
}

getMcqQuestionById.PATH = '/mcq-questions/{question-id}';
