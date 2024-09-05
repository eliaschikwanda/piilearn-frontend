import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {VariantService} from "../../../../services/services/variant.service";
import {VariantResponse} from "../../../../services/models/variant-response";

@Component({
  selector: 'app-select-question-variant-dropdown',
  standalone: true,
  imports: [
    DropdownModule,
    FormsModule
  ],
  templateUrl: './select-question-variant-dropdown.component.html',
  styleUrl: './select-question-variant-dropdown.component.scss'
})
export class SelectQuestionVariantDropdownComponent implements OnInit{
  variants!: VariantResponse[];
  selectedVariant: VariantResponse | undefined;
  @Output() variantSelected = new EventEmitter<VariantResponse | undefined>();

  // Constructor to inject services
  constructor(
    private variantService: VariantService,
  ) {
  }

  // Whenever there is a change in the field update the value
  // and emit the new value
  onVariantChange(newVariant: VariantResponse | undefined) {
    this.selectedVariant = newVariant;
    this.variantSelected.emit(this.selectedVariant);
  }

  // Fetch all the variants
  ngOnInit(): void {
    this.variantService.getAllVariants({
      // no params
    }).subscribe({
      next: (variants) => {
        this.variants = variants;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
