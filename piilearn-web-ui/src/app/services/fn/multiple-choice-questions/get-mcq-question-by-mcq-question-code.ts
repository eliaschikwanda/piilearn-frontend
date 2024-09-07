/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { McqQuestionResponse } from '../../models/mcq-question-response';

export interface GetMcqQuestionByMcqQuestionCode$Params {
  'mcq-question-code': string;
}

export function getMcqQuestionByMcqQuestionCode(http: HttpClient, rootUrl: string, params: GetMcqQuestionByMcqQuestionCode$Params, context?: HttpContext): Observable<StrictHttpResponse<McqQuestionResponse>> {
  const rb = new RequestBuilder(rootUrl, getMcqQuestionByMcqQuestionCode.PATH, 'get');
  if (params) {
    rb.path('mcq-question-code', params['mcq-question-code'], {});
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

getMcqQuestionByMcqQuestionCode.PATH = '/mcq-questions/find-by-mcq-code/{mcq-question-code}';
