import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mon-blog';
  mesPost:Array<Post>=[
    new Post('Mon premier post','Bienvenu au premier Post descriptif : je suis débutant en developpement Front-End' ,0,new Date()),
    new Post('Mon deuxième post','Bienvenu au deuxième Post : je suis Arbitre International au jeu des échecs',0,new Date()),
    new Post('Mon troisième post','Bienvenu au troisième Post : je suis professeur informatique depuis 2006',0,new Date()),
    new Post('Mon quatrième post','Bienvenu au quatrième Post : je suis père d\'une jolie fillette nommée FARAH',0,new Date())
  ];
}
class Post
{
  constructor(title,content,loveIts,created_at)
  {
    this.content=content;
    this.title=title;
    this.loveIts=loveIts;
    this.created_at=created_at;
  }
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;
}
