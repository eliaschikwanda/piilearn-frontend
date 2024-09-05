import {Component, Input, OnInit, SimpleChange, SimpleChanges, ViewChild} from '@angular/core';
import {MathJaxService} from "../../../../services/mathjax/math-jax.service";

@Component({
  selector: 'app-math-jax-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './math-jax-paragraph.component.html',
  styleUrl: './math-jax-paragraph.component.scss'
})
export class MathJaxParagraphComponent implements OnInit{
  @ViewChild('mathParagraph') paragraphElement: any;
  @Input() mathString!: string;

  constructor(private mathJaxService: MathJaxService) {}

  // Only used when th element is initialized
  ngOnInit() {
    console.log('MathJax loaded, rendering math');
    this.renderMath();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['mathString'] && !changes['mathString'].isFirstChange()) {
      this.renderMath();
    }
  }

  private renderMath() {
    this.mathJaxService.getMathJaxLoadedPromise().then(() => {
      // Insert the input string
      this.paragraphElement.nativeElement.innerHTML = this.mathString;
      // Render the Latex
      this.mathJaxService.render(this.paragraphElement.nativeElement);
    })
  }
}
