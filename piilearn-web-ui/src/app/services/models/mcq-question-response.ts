/* tslint:disable */
/* eslint-disable */
export interface McqQuestionResponse {
  completedByCurrentUser?: boolean;
  examBoard?: string;
  id?: number;
  levelCode?: string;
  mcqOptions?: {
[key: string]: {
[key: string]: string;
};
};
  mcqQuestionCode?: string;
  mcqQuestionDescription?: string;
  mcqQuestionNumOnOriginalPaper?: number;
  seasonCode?: string;
  subject?: string;
  subjectCode?: string;
  variant?: number;
  year?: number;
}
