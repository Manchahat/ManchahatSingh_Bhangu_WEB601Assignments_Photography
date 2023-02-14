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
	 imgURL: 'https://images.news18.com/ibnlive/uploads/2021/08/sun-photo.jpg',
	 type: 'Type 1',
 },
 
 {
   id: 2,
	 title: 'picture 2',
	 description: "Mesmerizing",
	 creator: 'Creator 2',
	 imgURL: 'https://i.natgeofe.com/n/20d65599-d2e3-49e7-9641-a10b25aa8df2/toronto-travel_2x3.jpg?w=1534&h=2302',
	 type: 'Type 2',
 },
 
  {
   id: 3,
	 title: 'picture 3',
	 description: "Perfect",
	 creator: 'Creator 3 ',
	 imgURL: 'https://previews.123rf.com/images/sergeik/sergeik1312/sergeik131200013/24768969-pine-trees-in-surrey-forest-england-uk.jpg',
	 type: 'Type 3',
},
{
	id: 4,
	 title: 'picture 4',
	 description: 'good',
	 creator: 'Creator 4',
	 imgURL: 'https://live.staticflickr.com/65535/48026136623_89ed270dae_b.jpg',
	 type: 'Type 4',
 },
 
 {
   id: 5,
	 title: 'picture 5',
	 description: "Better",
	 creator: 'creator 5',
	 imgURL: 'https://p16-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/9cbdc6ffa91e489fa9b470b12cb003ab.jpeg',
	 type: 'Type 5',
 },
 
  {
   id: 6,
	 title: 'picture 6',
	 description: "Nice",
	 creator: 'creator 6 ',
	 imgURL: 'https://media.architecturaldigest.com/photos/6032b3c9a0b9bd2edd5510d1/master/pass/Hero_Soneva%20Jani%20Chapter%20Two%20by%20Aksham%20Abdul%20Ghadir.jpg',
	 type: 'Type 6',
}
]


 
}

}

