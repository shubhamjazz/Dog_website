import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {
    
  }
  bannerItems = [
    {
      title: 'Banner 1',
      description: 'Description for banner 1',
      image: './assets/dog1.png'
    },
    {
      title: 'Banner 2',
      description: 'Description for banner 2',
      image: './assets/dog2.png'
    },
    {
      title: 'Banner 3',
      description: 'Description for banner 3',
      image: './assets/home2.jpg'
    }
    // Add more banner items as needed
  ];
}
