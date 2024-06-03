import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';


@Component({
  selector: 'demo-test',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './demo-test.component.html',
  styleUrl: './demo-test.component.css'
})
export class DemoTestComponent {

}
