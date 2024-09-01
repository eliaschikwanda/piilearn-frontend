/* tslint:disable */
/* eslint-disable */
import { McqQuestionResponse } from '../models/mcq-question-response';
export interface PageResponseMcqQuestionResponse {
  content?: Array<McqQuestionResponse>;
  firstPage?: boolean;
  lastPage?: boolean;
  number?: number;
  size?: number;
  totalElements?: number;
  totalPages?: number;
}
