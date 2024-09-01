/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { VariantResponse } from '../../models/variant-response';

export interface GetVariantById$Params {
  'variant-id': number;
}

export function getVariantById(http: HttpClient, rootUrl: string, params: GetVariantById$Params, context?: HttpContext): Observable<StrictHttpResponse<VariantResponse>> {
  const rb = new RequestBuilder(rootUrl, getVariantById.PATH, 'get');
  if (params) {
    rb.path('variant-id', params['variant-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<VariantResponse>;
    })
  );
}

getVariantById.PATH = '/variants/{variant-id}';
