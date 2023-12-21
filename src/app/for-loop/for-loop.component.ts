import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent {
  title = 'For Loop Example'
  fruits = ['Apple', 'Banana', 'pepper', 'Grapes', 'Litchi', 'Orange']
  fruitsColor = [
    {name:'Apple', color:'Red', likedBy:['aman', 'rohan']},
    {name:'Banana', color:'Yellow', likedBy:['raman', 'sohan']},
    {name:'Apple', color:'Black', likedBy:['kajal', 'nancy']},
    {name:'Grapes', color:'Green', likedBy:['pria', 'ishaan']},
    {name:'Litchi', color:'Pink', likedBy:['anant', 'rohit']},
    {name:'Orange', color:'Orange', likedBy:['hitesh', 'rajat']}
  ]
}
