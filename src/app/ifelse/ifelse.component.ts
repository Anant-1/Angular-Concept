import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.css']
})
export class IfelseComponent {
  title = 'If else Example'
  show = 'yes'

  display() {
    if(this.show == 'yes') {
      this.show = 'no'
      
    }else{
      this.show = 'yes'
    }
  }
}
