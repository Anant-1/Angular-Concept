import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-style-binding',
  templateUrl: './dynamic-style-binding.component.html',
  styleUrls: ['./dynamic-style-binding.component.css']
})
export class DynamicStyleBindingComponent {
  title='Dynamic Style Binding';
  color = 'green'
  changeColor() {
    this.color = 'red'
  }
}
