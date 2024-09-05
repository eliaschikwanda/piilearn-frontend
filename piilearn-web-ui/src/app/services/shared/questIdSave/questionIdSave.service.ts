import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionIdSaveService {
  private questionIdSubject = new BehaviorSubject<number>(0);
  questionId$ = this.questionIdSubject.asObservable();

  setSavedQuestionId(id: number) {
    this.questionIdSubject.next(id);
  }

  getSavedQuestionId(): number  {
    return this.questionIdSubject.value;
  }
}
