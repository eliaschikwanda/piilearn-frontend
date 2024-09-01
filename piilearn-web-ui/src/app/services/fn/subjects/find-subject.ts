/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SubjectResponse } from '../../models/subject-response';

export interface FindSubject$Params {
  query: string;
}

export function findSubject(http: HttpClient, rootUrl: string, params: FindSubject$Params, context?: HttpContext): Observable<StrictHttpResponse<SubjectResponse>> {
  const rb = new RequestBuilder(rootUrl, findSubject.PATH, 'get');
  if (params) {
    rb.query('query', params.query, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SubjectResponse>;
    })
  );
}

findSubject.PATH = '/subjects/search';
