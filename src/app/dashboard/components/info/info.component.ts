import { Component, OnInit } from '@angular/core';

import { MatCarousel, MatCarouselComponent } from '@thouet/material-carousel';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  slides: any;

  imgCollection: any;

  constructor() { }

  ngOnInit(): void {

    this.slides = [
      // {'image': 'https://picsum.photos/seed/picsum/1200/300'}, 
      // {'image': 'https://picsum.photos/seed/picsum/1200/300'},
      // {'image': 'https://picsum.photos/seed/picsum/1200/300'}, 
      // {'image': 'https://picsum.photos/seed/picsum/1200/300'}, 
      {'image': 'assets/carousel-1.png'},
      {'image': 'assets/carousel-1.png'}

    ];

    this.imgCollection = [
      {
        image: 'https://loremflickr.com/g/600/400/paris',
        thumbImage: 'https://loremflickr.com/g/1200/800/paris',
        alt: 'Image 1',
        title: 'Image 1'
      }, {
        image: 'https://loremflickr.com/600/400/brazil,rio',
        thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
        title: 'Image 2',
        alt: 'Image 2'
      }, {
        image: 'https://loremflickr.com/600/400/paris,girl/all',
        thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
        title: 'Image 3',
        alt: 'Image 3'
      }, {
        image: 'https://loremflickr.com/600/400/brazil,rio',
        thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
        title: 'Image 4',
        alt: 'Image 4'
      }, {
        image: 'https://loremflickr.com/600/400/paris,girl/all',
        thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
        title: 'Image 5',
        alt: 'Image 5'
      }
    ];

  }

}
