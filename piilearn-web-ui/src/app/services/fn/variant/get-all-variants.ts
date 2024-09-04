/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { VariantResponse } from '../../models/variant-response';

export interface GetAllVariants$Params {
}

export function getAllVariants(http: HttpClient, rootUrl: string, params?: GetAllVariants$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<VariantResponse>>> {
  const rb = new RequestBuilder(rootUrl, getAllVariants.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<VariantResponse>>;
    })
  );
}

getAllVariants.PATH = '/variants';
