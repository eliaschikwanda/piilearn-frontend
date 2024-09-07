/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addMcqAnswer } from '../fn/multiple-choice-questions/add-mcq-answer';
import { AddMcqAnswer$Params } from '../fn/multiple-choice-questions/add-mcq-answer';
import { createMcqQuestion } from '../fn/multiple-choice-questions/create-mcq-question';
import { CreateMcqQuestion$Params } from '../fn/multiple-choice-questions/create-mcq-question';
import { findAllMcqQuestions } from '../fn/multiple-choice-questions/find-all-mcq-questions';
import { FindAllMcqQuestions$Params } from '../fn/multiple-choice-questions/find-all-mcq-questions';
import { findAllMcqQuestionsByUserSubjects } from '../fn/multiple-choice-questions/find-all-mcq-questions-by-user-subjects';
import { FindAllMcqQuestionsByUserSubjects$Params } from '../fn/multiple-choice-questions/find-all-mcq-questions-by-user-subjects';
import { getMcqAnswerByQuestionId } from '../fn/multiple-choice-questions/get-mcq-answer-by-question-id';
import { GetMcqAnswerByQuestionId$Params } from '../fn/multiple-choice-questions/get-mcq-answer-by-question-id';
import { getMcqQuestionById } from '../fn/multiple-choice-questions/get-mcq-question-by-id';
import { GetMcqQuestionById$Params } from '../fn/multiple-choice-questions/get-mcq-question-by-id';
import { getMcqQuestionByMcqQuestionCode } from '../fn/multiple-choice-questions/get-mcq-question-by-mcq-question-code';
import { GetMcqQuestionByMcqQuestionCode$Params } from '../fn/multiple-choice-questions/get-mcq-question-by-mcq-question-code';
import { McqAnswerResponse } from '../models/mcq-answer-response';
import { McqQuestionResponse } from '../models/mcq-question-response';
import { PageResponseMcqQuestionResponse } from '../models/page-response-mcq-question-response';

@Injectable({ providedIn: 'root' })
export class MultipleChoiceQuestionsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAllMcqQuestions()` */
  static readonly FindAllMcqQuestionsPath = '/mcq-questions';

  /**
   * Get all questions available.
   *
   * This endpoint extract all the question and they're sorted by description of the question.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllMcqQuestions()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllMcqQuestions$Response(params?: FindAllMcqQuestions$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseMcqQuestionResponse>> {
    return findAllMcqQuestions(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all questions available.
   *
   * This endpoint extract all the question and they're sorted by description of the question.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllMcqQuestions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllMcqQuestions(params?: FindAllMcqQuestions$Params, context?: HttpContext): Observable<PageResponseMcqQuestionResponse> {
    return this.findAllMcqQuestions$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseMcqQuestionResponse>): PageResponseMcqQuestionResponse => r.body)
    );
  }

  /** Path part for operation `createMcqQuestion()` */
  static readonly CreateMcqQuestionPath = '/mcq-questions';

  /**
   * Create a new mcq question.
   *
   * Creates a new mcq question instance and returns the id of the created mcq question. If the id of the mcq question is provided, the existing mcq question is edited.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createMcqQuestion()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createMcqQuestion$Response(params: CreateMcqQuestion$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return createMcqQuestion(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new mcq question.
   *
   * Creates a new mcq question instance and returns the id of the created mcq question. If the id of the mcq question is provided, the existing mcq question is edited.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createMcqQuestion$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createMcqQuestion(params: CreateMcqQuestion$Params, context?: HttpContext): Observable<number> {
    return this.createMcqQuestion$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `addMcqAnswer()` */
  static readonly AddMcqAnswerPath = '/mcq-questions/add-mcq-answer';

  /**
   * Add a multiple choice question answer.
   *
   * Adds an option as an answer after the option has beencreated and after it has been tied to the question otherwise it throws an error.returns the id of the question
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addMcqAnswer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addMcqAnswer$Response(params: AddMcqAnswer$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return addMcqAnswer(this.http, this.rootUrl, params, context);
  }

  /**
   * Add a multiple choice question answer.
   *
   * Adds an option as an answer after the option has beencreated and after it has been tied to the question otherwise it throws an error.returns the id of the question
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addMcqAnswer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addMcqAnswer(params: AddMcqAnswer$Params, context?: HttpContext): Observable<number> {
    return this.addMcqAnswer$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findAllMcqQuestionsByUserSubjects()` */
  static readonly FindAllMcqQuestionsByUserSubjectsPath = '/mcq-questions/user-signed-subjects';

  /**
   * Get all respective questions from subjects that the user has signed up for.
   *
   * If the user has at least one subject on their profile, output the respective questions
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllMcqQuestionsByUserSubjects()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllMcqQuestionsByUserSubjects$Response(params?: FindAllMcqQuestionsByUserSubjects$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseMcqQuestionResponse>> {
    return findAllMcqQuestionsByUserSubjects(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all respective questions from subjects that the user has signed up for.
   *
   * If the user has at least one subject on their profile, output the respective questions
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllMcqQuestionsByUserSubjects$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllMcqQuestionsByUserSubjects(params?: FindAllMcqQuestionsByUserSubjects$Params, context?: HttpContext): Observable<PageResponseMcqQuestionResponse> {
    return this.findAllMcqQuestionsByUserSubjects$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseMcqQuestionResponse>): PageResponseMcqQuestionResponse => r.body)
    );
  }

  /** Path part for operation `getMcqAnswerByQuestionId()` */
  static readonly GetMcqAnswerByQuestionIdPath = '/mcq-questions/mcq-answer/{mcq-question-id}';

  /**
   * Get the answer to the question whose id is passed.
   *
   * Get the answer to the question whose id is passed.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMcqAnswerByQuestionId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMcqAnswerByQuestionId$Response(params: GetMcqAnswerByQuestionId$Params, context?: HttpContext): Observable<StrictHttpResponse<McqAnswerResponse>> {
    return getMcqAnswerByQuestionId(this.http, this.rootUrl, params, context);
  }

  /**
   * Get the answer to the question whose id is passed.
   *
   * Get the answer to the question whose id is passed.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMcqAnswerByQuestionId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMcqAnswerByQuestionId(params: GetMcqAnswerByQuestionId$Params, context?: HttpContext): Observable<McqAnswerResponse> {
    return this.getMcqAnswerByQuestionId$Response(params, context).pipe(
      map((r: StrictHttpResponse<McqAnswerResponse>): McqAnswerResponse => r.body)
    );
  }

  /** Path part for operation `getMcqQuestionByMcqQuestionCode()` */
  static readonly GetMcqQuestionByMcqQuestionCodePath = '/mcq-questions/find-by-mcq-code/{mcq-question-code}';

  /**
   * Gets a mcq question by mcqQuestionCode.
   *
   * Gets a mcq question by mcqQuestionCode
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMcqQuestionByMcqQuestionCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMcqQuestionByMcqQuestionCode$Response(params: GetMcqQuestionByMcqQuestionCode$Params, context?: HttpContext): Observable<StrictHttpResponse<McqQuestionResponse>> {
    return getMcqQuestionByMcqQuestionCode(this.http, this.rootUrl, params, context);
  }

  /**
   * Gets a mcq question by mcqQuestionCode.
   *
   * Gets a mcq question by mcqQuestionCode
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMcqQuestionByMcqQuestionCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMcqQuestionByMcqQuestionCode(params: GetMcqQuestionByMcqQuestionCode$Params, context?: HttpContext): Observable<McqQuestionResponse> {
    return this.getMcqQuestionByMcqQuestionCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<McqQuestionResponse>): McqQuestionResponse => r.body)
    );
  }

  /** Path part for operation `getMcqQuestionById()` */
  static readonly GetMcqQuestionByIdPath = '/mcq-questions/find-by-id/{question-id}';

  /**
   * Gets a mcq question by id.
   *
   * Gets a mcq question by id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMcqQuestionById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMcqQuestionById$Response(params: GetMcqQuestionById$Params, context?: HttpContext): Observable<StrictHttpResponse<McqQuestionResponse>> {
    return getMcqQuestionById(this.http, this.rootUrl, params, context);
  }

  /**
   * Gets a mcq question by id.
   *
   * Gets a mcq question by id.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMcqQuestionById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMcqQuestionById(params: GetMcqQuestionById$Params, context?: HttpContext): Observable<McqQuestionResponse> {
    return this.getMcqQuestionById$Response(params, context).pipe(
      map((r: StrictHttpResponse<McqQuestionResponse>): McqQuestionResponse => r.body)
    );
  }

}
