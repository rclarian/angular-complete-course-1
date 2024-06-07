import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
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
