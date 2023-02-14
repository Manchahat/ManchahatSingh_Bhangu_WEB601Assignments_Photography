import { Component, Input, OnInit } from '@angular/core';
// import { ContentList } from '../helper-files/content-list';

import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
	
	@Input() content :Content[];
	
	ngOnInit () {
	 
	}
  constructor(){
  this.content = [{
	id: 1,
	 title: 'picture 1',
	 description: 'Astonishing;',
	 creator: 'Creator 1',
	 imgURL: 'a',
	 type: 'Type 1',
 },
 
 {
   id: 2,
	 title: 'picture 2',
	 description: "Mesmerizing",
	 creator: 'Creator 2',
	 imgURL: 'b',
	 type: 'Type 2',
 },
 
  {
   id: 3,
	 title: 'picture 3',
	 description: "Perfect",
	 creator: 'Creator 3 ',
	 imgURL: 'c',
	 type: 'Type 3',
},
{
	id: 4,
	 title: 'picture 4',
	 description: 'good',
	 creator: 'Creator 4',
	 imgURL: 'd',
	 type: 'Type 4',
 },
 
 {
   id: 5,
	 title: 'picture 5',
	 description: "Better",
	 creator: 'creator 5',
	 imgURL: 'e',
	 type: 'Type 5',
 },
 
  {
   id: 6,
	 title: 'picture 6',
	 description: "Nice",
	 creator: 'creator 6 ',
	 imgURL: 'f',
	 type: 'Type 6',
}
]


 
}

}

