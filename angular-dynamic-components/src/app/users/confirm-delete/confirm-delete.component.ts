import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../Models/User';

@Component({
  selector: 'confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrl: './confirm-delete.component.css'
})
export class ConfirmDeleteComponent {
  constructor() { }

  @Input() usertoDelete: User;

  @Output()
  OnConfirmation: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  ngOnInit() {
  }

  onConfirmationBtnClicked(value: boolean){
    this.OnConfirmation.emit(value);
  }
}
