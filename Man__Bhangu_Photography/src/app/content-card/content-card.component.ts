import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  myContentList : ContentList = new ContentList();

 
  ngOnInit(){
    
  }
  
  callConsole(contentCard:any){
    console.log(contentCard.id,contentCard.title);
  }
  }
