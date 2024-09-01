/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SubjectResponse } from '../../models/subject-response';

export interface FindSubjectBySyllabusCode$Params {
  'syllabus-subject-code': string;
}

export function findSubjectBySyllabusCode(http: HttpClient, rootUrl: string, params: FindSubjectBySyllabusCode$Params, context?: HttpContext): Observable<StrictHttpResponse<SubjectResponse>> {
  const rb = new RequestBuilder(rootUrl, findSubjectBySyllabusCode.PATH, 'get');
  if (params) {
    rb.path('syllabus-subject-code', params['syllabus-subject-code'], {});
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

findSubjectBySyllabusCode.PATH = '/subjects/syllabus-code/{syllabus-subject-code}';
