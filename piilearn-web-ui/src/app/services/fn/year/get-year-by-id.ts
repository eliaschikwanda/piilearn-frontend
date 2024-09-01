/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { YearResponse } from '../../models/year-response';

export interface GetYearById$Params {
  'year-id': number;
}

export function getYearById(http: HttpClient, rootUrl: string, params: GetYearById$Params, context?: HttpContext): Observable<StrictHttpResponse<YearResponse>> {
  const rb = new RequestBuilder(rootUrl, getYearById.PATH, 'get');
  if (params) {
    rb.path('year-id', params['year-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<YearResponse>;
    })
  );
}

getYearById.PATH = '/years/{year-id}';
