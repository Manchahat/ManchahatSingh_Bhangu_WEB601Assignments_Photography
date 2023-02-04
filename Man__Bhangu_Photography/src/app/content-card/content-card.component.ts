import { Component } from '@angular/core';
//import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  myContentList : ContentList = new ContentList();

 /* contentItem1 : Content = {
    id: 0,
    title: 'Manchahat',
    description: 'This is a description',
    creator: 'Creator'
  }
  contentItem2 : Content = {
    id: 0,
    title: 'Nothing',
    description: 'This is a description2',
    creator: 'Creator1'
  }
  contentItem3 : Content = {
    id: 0,
    title: 'Nothing',
    description: 'This is a description4',
    creator: 'Creator2'
  }

  constructor(){
    this.myContentList.addFunction(this.contentItem1);
    this.myContentList.addFunction(this.contentItem2);
    this.myContentList.addFunction(this.contentItem3);
  }

  displayMyIndex(index : number) {
    let myItems = this.myContentList.getItems();

    if (myItems.length > 0 && index > 0 && index < myItems.length){
      return this.myContentList.printIndex(index);
    } else {
      
    }
  }*/
  ngOnInit(){
    
  }
  
  callConsole(contentCard:any){
    console.log(contentCard.id,contentCard.title);
  }
  }
