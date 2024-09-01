/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createSeason } from '../fn/season/create-season';
import { CreateSeason$Params } from '../fn/season/create-season';
import { getSeasonById } from '../fn/season/get-season-by-id';
import { GetSeasonById$Params } from '../fn/season/get-season-by-id';
import { SeasonResponse } from '../models/season-response';

@Injectable({ providedIn: 'root' })
export class SeasonService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createSeason()` */
  static readonly CreateSeasonPath = '/seasons';

  /**
   * Create a new season.
   *
   * Creates a new season instance and returns the id of the created season. If the id of the season is provided the existing seasons is edited.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createSeason()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSeason$Response(params: CreateSeason$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return createSeason(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new season.
   *
   * Creates a new season instance and returns the id of the created season. If the id of the season is provided the existing seasons is edited.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createSeason$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSeason(params: CreateSeason$Params, context?: HttpContext): Observable<number> {
    return this.createSeason$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getSeasonById()` */
  static readonly GetSeasonByIdPath = '/seasons/{season-id}';

  /**
   * Get a season by id.
   *
   * Get a season by id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSeasonById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSeasonById$Response(params: GetSeasonById$Params, context?: HttpContext): Observable<StrictHttpResponse<SeasonResponse>> {
    return getSeasonById(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a season by id.
   *
   * Get a season by id.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSeasonById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSeasonById(params: GetSeasonById$Params, context?: HttpContext): Observable<SeasonResponse> {
    return this.getSeasonById$Response(params, context).pipe(
      map((r: StrictHttpResponse<SeasonResponse>): SeasonResponse => r.body)
    );
  }

}
