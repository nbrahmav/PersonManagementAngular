import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person-service.service';
import { Person } from '../../models/Person';

@Component({
  selector: 'app-person-mgmt',
  templateUrl: './person-mgmt.component.html',
  styleUrls: ['./person-mgmt.component.css']
})
export class PersonMgmtComponent implements OnInit {
  people:Person[];

  constructor(private personService:PersonService) { }

  ngOnInit(): void {
     this.personService.getPeopleExternally().subscribe(persons =>
       this.people = persons);

    //this.people = this.personService.getPeople();
    /*[
      {
        id:1,
        name : 'abc',
        email :'abc@live.com',
        phone : 1234,
        isReady : false

      },
      {
        id:2,
        name : 'def',
        email :'def@live.com',
        phone : 567,
        isReady : true

      },
      {
        id:3,
        name : 'ghi',
        email :'ghi@live.com',
        phone : 9876,
        isReady : false

      }
    ]*/
  }

}
