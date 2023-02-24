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
	searchTitle:string | undefined;
	exist=false;
	message:string | undefined
	mysearch()
	{
	 const FilterSearch= this.content.find(search=>search.title.toLowerCase()==this.searchTitle?.toLowerCase());
	 this.exist=!!FilterSearch;
	 this.message=this.exist? `Content with tilte "${this.searchTitle}"  exist`: `Content with tilte "${this.searchTitle}"  does not exist`
	}
  constructor(){
  this.content = [{
	id: 1,
	 title: 'Camera Clicking Picture',
	 description: 'landscape',
	 creator: 'anonymous',
	 imgURL: 'https://images.news18.com/ibnlive/uploads/2021/08/sun-photo.jpg',
	 type: 'portrait',
 },
 
 {
   id: 2,
	 title: 'Toronto',
	 description: "Sunset",
	 creator: 'anonymous',
	 imgURL: 'https://i.natgeofe.com/n/20d65599-d2e3-49e7-9641-a10b25aa8df2/toronto-travel_2x3.jpg?w=1534&h=2302',
	 type: 'Building',
 },
 
  {
   id: 3,
	 title: 'Heaven in Woods',
	 description: "forest in summers",
	 creator: ' Anonymous ',
	 imgURL: 'https://previews.123rf.com/images/sergeik/sergeik1312/sergeik131200013/24768969-pine-trees-in-surrey-forest-england-uk.jpg',
	 type: 'Landscape',
},
{
	id: 4,
	 title: 'Quebec',
	 description: 'night view in quebec',
	 creator: 'anonymous',
	 imgURL: 'https://live.staticflickr.com/65535/48026136623_89ed270dae_b.jpg',
	 type: 'Building',
 },
 
 {
   id: 5,
	 title: 'Mine portrait',
	 description: "winters with benz",
	 creator: 'Manchahat Singh Bhangu',
	 imgURL: 'https://p16-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/9cbdc6ffa91e489fa9b470b12cb003ab.jpeg',
	 type: 'Portrait',
 },
 
  {
   id: 6,
	 title: 'Maldives Sea View',
	 description: "Vacation Point",
	 creator: 'Anonymous',
	 imgURL: 'https://media.architecturaldigest.com/photos/6032b3c9a0b9bd2edd5510d1/master/pass/Hero_Soneva%20Jani%20Chapter%20Two%20by%20Aksham%20Abdul%20Ghadir.jpg',
	 type: 'Seaside',
}
]


 
}

}

