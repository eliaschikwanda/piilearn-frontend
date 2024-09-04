/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createVariant } from '../fn/variant/create-variant';
import { CreateVariant$Params } from '../fn/variant/create-variant';
import { getAllVariants } from '../fn/variant/get-all-variants';
import { GetAllVariants$Params } from '../fn/variant/get-all-variants';
import { getVariantById } from '../fn/variant/get-variant-by-id';
import { GetVariantById$Params } from '../fn/variant/get-variant-by-id';
import { VariantResponse } from '../models/variant-response';

@Injectable({ providedIn: 'root' })
export class VariantService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllVariants()` */
  static readonly GetAllVariantsPath = '/variants';

  /**
   * Get all variants in the database.
   *
   * Get all variants in the database
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllVariants()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllVariants$Response(params?: GetAllVariants$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<VariantResponse>>> {
    return getAllVariants(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all variants in the database.
   *
   * Get all variants in the database
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllVariants$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllVariants(params?: GetAllVariants$Params, context?: HttpContext): Observable<Array<VariantResponse>> {
    return this.getAllVariants$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<VariantResponse>>): Array<VariantResponse> => r.body)
    );
  }

  /** Path part for operation `createVariant()` */
  static readonly CreateVariantPath = '/variants';

  /**
   * Create a new variant.
   *
   * Creates a new variant instance and returns the id of the created variant. If the id of the variant is provided it edits the existing variant.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createVariant()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createVariant$Response(params: CreateVariant$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return createVariant(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new variant.
   *
   * Creates a new variant instance and returns the id of the created variant. If the id of the variant is provided it edits the existing variant.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createVariant$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createVariant(params: CreateVariant$Params, context?: HttpContext): Observable<number> {
    return this.createVariant$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getVariantById()` */
  static readonly GetVariantByIdPath = '/variants/{variant-id}';

  /**
   * Get a variant by id.
   *
   * Get a variant by id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getVariantById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVariantById$Response(params: GetVariantById$Params, context?: HttpContext): Observable<StrictHttpResponse<VariantResponse>> {
    return getVariantById(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a variant by id.
   *
   * Get a variant by id.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getVariantById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVariantById(params: GetVariantById$Params, context?: HttpContext): Observable<VariantResponse> {
    return this.getVariantById$Response(params, context).pipe(
      map((r: StrictHttpResponse<VariantResponse>): VariantResponse => r.body)
    );
  }

}
