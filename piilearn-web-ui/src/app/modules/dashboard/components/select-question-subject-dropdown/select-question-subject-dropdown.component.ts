import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DropdownModule} from "primeng/dropdown";
import {PrimeTemplate} from "primeng/api";
import {FormsModule} from "@angular/forms";
import {SubjectResponse} from "../../../../services/models/subject-response";
import {SubjectsService} from "../../../../services/services/subjects.service";

@Component({
  selector: 'app-select-question-subject-dropdown',
  standalone: true,
  imports: [
    DropdownModule,
    PrimeTemplate,
    FormsModule
  ],
  templateUrl: './select-question-subject-dropdown.component.html',
  styleUrl: './select-question-subject-dropdown.component.scss'
})
export class SelectQuestionSubjectDropdownComponent implements OnInit{
  examSubjects!: SubjectResponse[];
  selectedSubject: SubjectResponse | undefined;
  @Output() subjectSelected = new EventEmitter<SubjectResponse | undefined>();

  constructor(
    private subjectService: SubjectsService,
  ) {
  }

  onSubjectChange(newSubject: SubjectResponse | undefined) {
    this.selectedSubject = newSubject;
    this.subjectSelected.emit(this.selectedSubject);
  }

  // Fetch the subjects
  ngOnInit(): void {
    this.subjectService.getAllSubjects({
      // no params
    }).subscribe({
      next: (subjects) => {
        this.examSubjects = subjects;
      },
      error: (err) => {
        console.log("Can not extract subjects at the moment.", err)
      }
    })
  }
}
