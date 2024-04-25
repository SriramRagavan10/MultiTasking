import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
  title="Interpolation"; 
  getTitle() {
    return this.title;
  }
  getMax(a:number, b:number) {
    return Math.max(a,b)
  }

}
