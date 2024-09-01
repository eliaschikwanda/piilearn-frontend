/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseMcqQuestionResponse } from '../../models/page-response-mcq-question-response';

export interface FindAllMcqQuestions$Params {
  page?: number;
  size?: number;
}

export function findAllMcqQuestions(http: HttpClient, rootUrl: string, params?: FindAllMcqQuestions$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseMcqQuestionResponse>> {
  const rb = new RequestBuilder(rootUrl, findAllMcqQuestions.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseMcqQuestionResponse>;
    })
  );
}

findAllMcqQuestions.PATH = '/mcq-questions';
