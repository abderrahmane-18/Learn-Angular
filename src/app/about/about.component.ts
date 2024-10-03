import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
info={
  nom:"abderrahmane ",
  email:"abderrahmane.boukhezar@gmail.com",
  tel:"0664065859"
}
comments=[]
comment={id:null ,date:null , message: ''}
newComment=false
addComment ()
{
  console.log("this.comments[id]");
  if(this.comment.message!=='')
  {
this.comment.date=new Date();
this.comment.id=this.comments.length+1;

this.comments.push({
  date:this.comment.date,
  message:this .comment.message,
  id:this.comment.id
  });
this.comment.message=''
  }
}
deleteComment(id:any)
{
  console.log("this.comments[id]");
this.comments.splice(id-1,1);

}
  constructor() { }

  ngOnInit() {
  }

}
