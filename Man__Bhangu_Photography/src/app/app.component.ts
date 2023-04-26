import { Component } from '@angular/core';
import { MessagesService } from './services/messages.service';
import { PhotographyService } from './services/Photography.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Man__Bhangu_Photography';
  name: string="Manchahat";
  contentCard: any;
  errorMessage: any;
  id: any;

  constructor(private contentService: PhotographyService,
    private messageService: MessagesService) { }



  onRetrieveContentCard(): void {
    // Reset the error message
    this.errorMessage = '';

    // Attempt to parse the ID as a number
    const idNumber = parseInt(this.id);

    // Check if the parsed ID is a number and within the bounds of the content array
    if (isNaN(idNumber) || idNumber < 1) {
      this.errorMessage = 'Invalid ID number entered';
      this.messageService.addMessageService(this.errorMessage);
      return;
    }
    debugger
   
  }

}

  
