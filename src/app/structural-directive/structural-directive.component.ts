import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  title="List Of Details"

  names=['Sriram', 'Suban', 'Rythan', 'Magizhaal', 'Vaan']

  details=[{name : 'ArunMozhi', age : '23', gender : 'Male'},
  {name:'Luffy', age:'23', gender:'Male',},
  {name:'Balaji', age:'19', gender:'Male',},
  {name:'Gobika', age:'22', gender:'Female',}
  ]

  isMale=false

}
