import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  listSlides: any;

  constructor( private fireService: FirestoreService ) { }

  ngOnInit(): void {

    this.fireService.getDataFromFirebase().subscribe( (resp:any)=>{
      this.listSlides = resp['data'];
      console.log(this.listSlides); 
    });


  }

}
