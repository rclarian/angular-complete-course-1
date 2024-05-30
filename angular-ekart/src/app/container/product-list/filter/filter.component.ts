import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input() //Parent to child
  all: number = 0;

  @Input() //Parent to child
  inStock: number = 0;

  @Input() //Parent to child
  outOfStock: number = 0;

  @Output() //Child to parent
  selectedFilterRadioButtonChangedChild: EventEmitter<string> = new EventEmitter<string>();

  selectedFilterRadioButtonChild: string = 'all';

  onSelectedFilterRadioButtonChanged(){
    this.selectedFilterRadioButtonChangedChild.emit(this.selectedFilterRadioButtonChild);
  }
}
