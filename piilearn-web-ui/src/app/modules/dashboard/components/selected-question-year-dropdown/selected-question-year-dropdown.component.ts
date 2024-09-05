import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {YearService} from "../../../../services/services/year.service";
import {YearResponse} from "../../../../services/models/year-response";
import {DropdownModule} from "primeng/dropdown";
import {PrimeTemplate} from "primeng/api";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-selected-question-year-dropdown',
  standalone: true,
  imports: [
    DropdownModule,
    PrimeTemplate,
    FormsModule
  ],
  templateUrl: './selected-question-year-dropdown.component.html',
  styleUrl: './selected-question-year-dropdown.component.scss'
})
export class SelectedQuestionYearDropdownComponent implements OnInit{
  years!: YearResponse[];
  selectedYear: YearResponse | undefined;
  @Output() yearSelected = new EventEmitter<YearResponse | undefined>();


  constructor(
    private yearService: YearService
  ) {
  }

  // Update the year upon change also emit the change
  onChangeYear(newYear: YearResponse | undefined) {
    this.selectedYear = newYear;
    this.yearSelected.emit(this.selectedYear);
  }

  // Fetch the years
  ngOnInit(): void {
    this.yearService.getAllYears({
      // no params
    }).subscribe({
      next: (years) => {
        this.years = years;
      },
      error: (err) => {
        console.log("Can not extract years at the moment.", err)
      }
    });
  }

}
