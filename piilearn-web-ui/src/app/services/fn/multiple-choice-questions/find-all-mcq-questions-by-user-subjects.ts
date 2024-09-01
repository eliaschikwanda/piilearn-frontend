/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseMcqQuestionResponse } from '../../models/page-response-mcq-question-response';

export interface FindAllMcqQuestionsByUserSubjects$Params {
  page?: number;
  size?: number;
}

export function findAllMcqQuestionsByUserSubjects(http: HttpClient, rootUrl: string, params?: FindAllMcqQuestionsByUserSubjects$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseMcqQuestionResponse>> {
  const rb = new RequestBuilder(rootUrl, findAllMcqQuestionsByUserSubjects.PATH, 'get');
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

findAllMcqQuestionsByUserSubjects.PATH = '/mcq-questions/user-signed-subjects';
