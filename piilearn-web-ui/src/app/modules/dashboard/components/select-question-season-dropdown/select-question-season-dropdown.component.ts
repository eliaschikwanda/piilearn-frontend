import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DropdownModule} from "primeng/dropdown";
import {PrimeTemplate} from "primeng/api";
import {FormsModule} from "@angular/forms";
import {SeasonService} from "../../../../services/services/season.service";
import {SeasonResponse} from "../../../../services/models/season-response";
import {VariantResponse} from "../../../../services/models/variant-response";

@Component({
  selector: 'app-select-question-season-dropdown',
  standalone: true,
  imports: [
    DropdownModule,
    PrimeTemplate,
    FormsModule
  ],
  templateUrl: './select-question-season-dropdown.component.html',
  styleUrl: './select-question-season-dropdown.component.scss'
})

export class SelectQuestionSeasonDropdownComponent implements OnInit{
  seasons!: SeasonResponse[];
  selectedSeason: SeasonResponse | undefined;
  @Output() seasonSelected = new EventEmitter<SeasonResponse | undefined>();

  constructor(
    private seasonService: SeasonService
  ) {
  }

  // Save the season on change and emit the change
  onSeasonChange(newSeason: SeasonResponse | undefined) {
    this.selectedSeason = newSeason;
    this.seasonSelected.emit(this.selectedSeason);
  }

  // Fetch the seasons
  ngOnInit(): void {
    this.seasonService.getAllSeasons({
      // no params
    }).subscribe({
      next: (seasons) => {
        this.seasons = seasons;
      },
      error: (err) => {
        console.log("Can not extract seasons at the moment.", err);
      }
    });
  }

}
