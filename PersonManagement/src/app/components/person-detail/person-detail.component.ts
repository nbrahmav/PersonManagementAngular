import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
 @Input() person: Person;

  constructor() { }

  ngOnInit(): void {
  }
  

  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.person.isReady
    }
    return classes;
  }

  onToggle(person){
    person.isReady = !person.isReady;
  }

  onDelete(person){
     console.log('on delete clicked');
  }
}
