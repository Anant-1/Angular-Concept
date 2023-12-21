import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayName = ''
  title = 'my-app';
  getName(name: any) {
    alert('function called')
  }
  getValue(e: any) {
    this.displayName = e.target.value
  }
  defaultValue = 'mohan'
}
