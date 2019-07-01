import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
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
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
