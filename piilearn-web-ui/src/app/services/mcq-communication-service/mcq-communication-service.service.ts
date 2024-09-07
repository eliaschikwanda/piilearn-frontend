import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class McqCommunicationServiceService {
  private resetOptionSource = new Subject<void>();
  resetOptions$ = this.resetOptionSource.asObservable();

  triggerResetOption() {
    this.resetOptionSource.next();
  }
}
