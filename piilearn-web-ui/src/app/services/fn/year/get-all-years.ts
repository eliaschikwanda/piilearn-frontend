/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { YearResponse } from '../../models/year-response';

export interface GetAllYears$Params {
}

export function getAllYears(http: HttpClient, rootUrl: string, params?: GetAllYears$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<YearResponse>>> {
  const rb = new RequestBuilder(rootUrl, getAllYears.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<YearResponse>>;
    })
  );
}

getAllYears.PATH = '/years';
