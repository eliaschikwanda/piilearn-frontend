/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createYear } from '../fn/year/create-year';
import { CreateYear$Params } from '../fn/year/create-year';
import { getAllYears } from '../fn/year/get-all-years';
import { GetAllYears$Params } from '../fn/year/get-all-years';
import { getYearById } from '../fn/year/get-year-by-id';
import { GetYearById$Params } from '../fn/year/get-year-by-id';
import { YearResponse } from '../models/year-response';

@Injectable({ providedIn: 'root' })
export class YearService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllYears()` */
  static readonly GetAllYearsPath = '/years';

  /**
   * Get all years in the database.
   *
   * Get all years in the database
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllYears()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllYears$Response(params?: GetAllYears$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<YearResponse>>> {
    return getAllYears(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all years in the database.
   *
   * Get all years in the database
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllYears$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllYears(params?: GetAllYears$Params, context?: HttpContext): Observable<Array<YearResponse>> {
    return this.getAllYears$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<YearResponse>>): Array<YearResponse> => r.body)
    );
  }

  /** Path part for operation `createYear()` */
  static readonly CreateYearPath = '/years';

  /**
   * Create a new year.
   *
   * Creates a new year instance and returns the id of the created year. If the id of the year is provided it edits the existing year.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createYear()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createYear$Response(params: CreateYear$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return createYear(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new year.
   *
   * Creates a new year instance and returns the id of the created year. If the id of the year is provided it edits the existing year.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createYear$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createYear(params: CreateYear$Params, context?: HttpContext): Observable<number> {
    return this.createYear$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getYearById()` */
  static readonly GetYearByIdPath = '/years/{year-id}';

  /**
   * Get a year by id.
   *
   * Get a year by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getYearById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getYearById$Response(params: GetYearById$Params, context?: HttpContext): Observable<StrictHttpResponse<YearResponse>> {
    return getYearById(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a year by id.
   *
   * Get a year by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getYearById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getYearById(params: GetYearById$Params, context?: HttpContext): Observable<YearResponse> {
    return this.getYearById$Response(params, context).pipe(
      map((r: StrictHttpResponse<YearResponse>): YearResponse => r.body)
    );
  }

}
