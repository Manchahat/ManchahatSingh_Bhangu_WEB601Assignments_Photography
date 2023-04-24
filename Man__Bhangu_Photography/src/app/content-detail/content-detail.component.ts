import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from '../services/messages.service';
import { MyFavouriteSportsService } from '../services/Photography.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  id= 0;
  content: any;

  constructor(
    private route: ActivatedRoute,
    private PhotographyService: PhotographyService,
    private messageService: MessagesService
  ) {}
  ngOnInit(): void {
    debugger
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.PhotographyService.getContentById(this.id).subscribe((content) => {
      this.content = content;
      console.log(this.content);
      this.messageService.addMessageService(`Content ID: ${this.content.id} - ${this.content.title}`);
    });
  }
}