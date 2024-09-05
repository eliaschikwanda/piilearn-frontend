import {Component, OnInit} from '@angular/core';
import {DividerModule} from "primeng/divider";
import {PanelModule} from "primeng/panel";
import {McqQuestionRequest} from "../../../../services/models/mcq-question-request";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {SubjectResponse} from "../../../../services/models/subject-response";
import {VariantResponse} from "../../../../services/models/variant-response";
import {SeasonResponse} from "../../../../services/models/season-response";
import {YearResponse} from "../../../../services/models/year-response";
import {YearService} from "../../../../services/services/year.service";
import {SeasonService} from "../../../../services/services/season.service";
import {SubjectsService} from "../../../../services/services/subjects.service";
import {VariantService} from "../../../../services/services/variant.service";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {NgForOf, NgIf} from "@angular/common";
import {MultipleChoiceQuestionsService} from "../../../../services/services/multiple-choice-questions.service";
import {ERROR_MESSAGES} from "../../../../../error-message";
import {
  SelectQuestionVariantDropdownComponent
} from "../select-question-variant-dropdown/select-question-variant-dropdown.component";
import {
  SelectQuestionSeasonDropdownComponent
} from "../select-question-season-dropdown/select-question-season-dropdown.component";

@Component({
  selector: 'app-add-mcq-question-panel',
  standalone: true,
  imports: [
    DividerModule,
    PanelModule,
    FloatLabelModule,
    InputTextareaModule,
    FormsModule,
    InputNumberModule,
    DropdownModule,
    ButtonModule,
    NgForOf,
    NgIf,
    SelectQuestionVariantDropdownComponent,
    SelectQuestionSeasonDropdownComponent
  ],
  templateUrl: './add-mcq-question-panel.component.html',
  styleUrl: './add-mcq-question-panel.component.scss'
})
export class AddMcqQuestionPanelComponent implements OnInit{
  errorMsg: string[] = [];
  mcqQuestionRequest: McqQuestionRequest = {
    id: 0,
    mcqQuestionDescription: '',
    mcqQuestionNumOnOriginalPaper: 0,
    seasonId: 0,
    subjectId: 0,
    variantId: 0,
    yearId: 0
  }

  // Arrays with data to select from

  examSubjects!: SubjectResponse[];
  years!: YearResponse[];

  // Variables with selected data
  selectedSeason: SeasonResponse | undefined;
  selectedSubject: SubjectResponse | undefined;
  selectedVariant: VariantResponse | undefined;
  selectedYear: YearResponse | undefined;

  // SavedEntities
  private savedQuestionId: number | undefined;

  constructor(

    private subjectService: SubjectsService,

    private yearService: YearService,
    private mcqQuestionService: MultipleChoiceQuestionsService
  ) {
  }

  ngOnInit(): void {


    // Fetch the subjects
    this.subjectService.getAllSubjects({
      // no params
    }).subscribe({
      next: (subjects) => {
        this.examSubjects = subjects;
      },
      error: (err) => {
        this.errorMsg.push("Can not extract subjects at the moment.")
      }
    })

    // Fetch the years
    this.yearService.getAllYears({
      // no params
    }).subscribe({
      next: (years) => {
        this.years = years;
      },
      error: (err) => {
        this.errorMsg.push("Can not extract years at the moment.")
      }
    });


  }

  saveQuestion() {
    this.errorMsg = [];
    if (this.inputIsValid()) {
      this.mcqQuestionService.createMcqQuestion({
        body: this.mcqQuestionRequest
      }).subscribe({
        next: (res) => {
          this.savedQuestionId = res;
        },
        error: (err) => {
          if (err.error.validationErrors) {
            err.error.validationErrors.forEach((msg: string ) => {
              this.errorMsg.push(ERROR_MESSAGES[msg] || msg);
            });
          } else {
            this.errorMsg.push(err.error.error);
          }
          console.log(err)
        }
      })
    }
  }

  private inputIsValid() {
    let isValid: boolean = true
    if (this.selectedYear == undefined) {
      this.errorMsg.push("Year is required.");
      isValid = false;
    }
    if (this.selectedVariant == undefined) {
      this.errorMsg.push("Variant is required.");
      isValid = false;
    }
    if (this.selectedSubject == undefined) {
      this.errorMsg.push("Subject is required.")
      isValid = false;
    }
    if (this.selectedSeason == undefined) {
      this.errorMsg.push("Season is required.")
      isValid = false;
    }
    if (this.mcqQuestionRequest.mcqQuestionNumOnOriginalPaper < 1
    || this.mcqQuestionRequest.mcqQuestionNumOnOriginalPaper > 40) {
      this.errorMsg.push("The number on original question should be between 1 and 40 inclusive.")
      isValid = false;
    }
    return isValid;
  }
  // Get the selected variant from the other component
  handleVariantSelected(variant: VariantResponse | undefined) {
    this.selectedVariant = variant;
  }
  // Get the selected season from  the other component
  handleSeasonSelected(season: SeasonResponse | undefined) {
    this.selectedSeason = season;
  }
}
