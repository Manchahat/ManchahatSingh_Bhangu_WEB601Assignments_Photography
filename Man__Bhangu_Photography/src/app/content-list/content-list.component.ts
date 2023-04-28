import { Component, Input, OnInit } from '@angular/core';
// import { ContentList } from '../helper-files/content-list';

import { Content } from '../helper-files/content-interface';
import { MessagesService } from '../services/messages.service';
import { PhotographyService } from '../services/photography.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
	content:Content[]=[];
	ngOnInit(): void {
	  this.getphotography();
	}
	getphotography()
	{
	  this.contentService.getContent().subscribe(content => {
		this.content = content;
		this.messageService.addMessageService('Content array loaded!');
		console.log(this.content)
	  });
	}
	ContentAdded(newContent: Content) {
	  debugger
	  this.contentService.addcontent(newContent).subscribe(con=>{
		this.getphotography();
		this.messageService.addMessageService('New content has been added');
	  });
	  
	}
	constructor(private contentService: PhotographyService,private messageService: MessagesService)
	{
	  
	}
	searchTitle:string | undefined;
	exist=false;
	message:string | undefined
	mysearch()
	{
	 const contentSearch= this.content.find(search=>search.title.toLowerCase()==this.searchTitle?.toLowerCase());
	 this.exist=!!contentSearch;
	 this.message=this.exist? `Content with tilte "${this.searchTitle}"  exist`: `Content with tilte "${this.searchTitle}"  does not exist`
	}
  
  
   
  
  
  
  
  }
