import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentDb } from '../helper-files/contentDb';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class MyFavouritePhotographyService {

  constructor(private messageService: MessagesService) { }
  
  getPhotography(): Observable<any> {
    this.messageService.addMessageService('Content array loaded!');
    return of(contentDb);
  }
  getPhotographyById(id: number): Observable<any> {
    this.messageService.addMessageService(`Content Item at id: ${id}`);
    return of(contentDb.find(content => content.id === id)); // find id 1
  }
}