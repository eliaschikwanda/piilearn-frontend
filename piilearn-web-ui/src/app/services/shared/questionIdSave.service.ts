import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionIdSaveService {
  private savedQuestionId: number | undefined;

  setSavedQuestionId(id: number) {
    this.savedQuestionId = id;
  }

  getSavedQuestionId(): number | undefined {
    return this.savedQuestionId;
  }
}
