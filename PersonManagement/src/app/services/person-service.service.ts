import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders }  from '@angular/common/http';

import { Person } from '../models/Person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  personsUrl:string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }
  
  getPeopleExternally():Observable<Person[]>{
    return this.http.get<Person[]>(this.personsUrl);
  }

  getPeople(){
    return [
      {
        id:1,
        name : 'abc',
        email :'abc@live.com',
        phone : 1234,
        isReady : true

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

    ]

    
  }
  

}
