import { Component, OnInit } from '@angular/core';
import  {User } from './user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
user : User ={
"id":1 ,
"name": "Abdrrahmane ",
"email":"abderrahmane.boukhezar@gmail.com",
"mobile":"+213664065859",

}

  constructor() { }

  ngOnInit() {
  }

}
