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
	failureMsg: any;
	
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
	createBoard() {
		// function body
	  }

  constructor(){
    this.content = [{
		id: 1,
		 title: 'Camera Clicking Picture',
		 description: 'landscape',
		 imgURL: 'https://images.news18.com/ibnlive/uploads/2021/08/sun-photo.jpg',
		 creator: 'anonymous',
		 type: 'Photography 1',
	 },
	 
	 {
	   id: 2,
		 title: 'Toronto',
		 description: "Sunset",
		 imgURL: 'https://i.natgeofe.com/n/20d65599-d2e3-49e7-9641-a10b25aa8df2/toronto-travel_2x3.jpg?w=1534&h=2302',
	
		 creator: 'anonymous',
		 type: 'Photography 1',
	 },
	 
	  {
	   id: 3,
		 title: 'Heaven in Woods',
		 description: "forest in summers",
		 imgURL: 'https://previews.123rf.com/images/sergeik/sergeik1312/sergeik131200013/24768969-pine-trees-in-surrey-forest-england-uk.jpg',
	
		 creator: ' Anonymous ',
		 type: 'Photography 2',
	},
	{
		id: 4,
		 title: 'Quebec',
		 description: 'night view in quebec',
		 imgURL: 'https://live.staticflickr.com/65535/48026136623_89ed270dae_b.jpg',
	
		 creator: 'anonymous',
		 type: 'Photography 2',
	 },
	 
	 {
	   id: 5,
		 title: 'Mine portrait',
		 description: "winters with benz",
		 imgURL: 'https://p16-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/9cbdc6ffa91e489fa9b470b12cb003ab.jpeg',
	
		 creator: 'Manchahat Singh Bhangu',
		 type: '',
	 },
	 
	  {
	   id: 6,
		 title: 'Maldives Sea View',
		 description: "Vacation Point",
		 imgURL: 'https://media.architecturaldigest.com/photos/6032b3c9a0b9bd2edd5510d1/master/pass/Hero_Soneva%20Jani%20Chapter%20Two%20by%20Aksham%20Abdul%20Ghadir.jpg',
	
		 creator: 'Anonymous',
		 type: '',
	},
	
	{
		id: 7,
		  title: 'a',
		  description: "b",
		  imgURL: 'https://media.architecturaldigest.com/photos/6032b3c9a0b9bd2edd5510d1/master/pass/Hero_Soneva%20Jani%20Chapter%20Two%20by%20Aksham%20Abdul%20Ghadir.jpg',
		  creator: 'c ',
		  type: '',
	 }
	]
	
	
	 
	
	
	
	
	
}

addBoardToList(newBoardFromChild: Content) {
    console.log(this.failureMsg);
    let promise = new Promise((success, failure) => {
      if ((
        newBoardFromChild.id ||
        newBoardFromChild.title ||
        newBoardFromChild.description ||
        newBoardFromChild.creator != "")) {
          this.failureMsg = "";
          success(
            `New list:
              Title: ${newBoardFromChild.title},
              ID: ${newBoardFromChild.id},
              Description: ${newBoardFromChild.description},
              Creator: ${newBoardFromChild.creator},
              Image URL: ${newBoardFromChild.imgURL},
              Type: ${newBoardFromChild.type},
              Tags: ${newBoardFromChild.tags}`);
        } else {
          failure("An error has occurred while adding new board.");
          this.failureMsg = "An error has occurred while adding new board.";
        }
    });

    promise
      .then((successMsg) => console.log(successMsg))
	  .then((successMsg) => console.log("Addition is successful"))
      .catch((errorMsg) => this.failureMsg = errorMsg);

    if(this.failureMsg != "") {
      return;

    } else {
      console.log('Previous board list: ', this.content);
      this.content.push(newBoardFromChild);
      this.content = [...this.content];
      console.log("Board to be added to list: ", newBoardFromChild);
      console.log("New board list: ", this.content);
    }
  }
}


