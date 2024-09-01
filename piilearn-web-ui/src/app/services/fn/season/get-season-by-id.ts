/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SeasonResponse } from '../../models/season-response';

export interface GetSeasonById$Params {
  'season-id': number;
}

export function getSeasonById(http: HttpClient, rootUrl: string, params: GetSeasonById$Params, context?: HttpContext): Observable<StrictHttpResponse<SeasonResponse>> {
  const rb = new RequestBuilder(rootUrl, getSeasonById.PATH, 'get');
  if (params) {
    rb.path('season-id', params['season-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SeasonResponse>;
    })
  );
}

getSeasonById.PATH = '/seasons/{season-id}';
