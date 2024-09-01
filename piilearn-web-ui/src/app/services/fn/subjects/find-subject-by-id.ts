/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SubjectResponse } from '../../models/subject-response';

export interface FindSubjectById$Params {
  'subject-id': number;
}

export function findSubjectById(http: HttpClient, rootUrl: string, params: FindSubjectById$Params, context?: HttpContext): Observable<StrictHttpResponse<SubjectResponse>> {
  const rb = new RequestBuilder(rootUrl, findSubjectById.PATH, 'get');
  if (params) {
    rb.path('subject-id', params['subject-id'], {});
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

findSubjectById.PATH = '/subjects/id/{subject-id}';
