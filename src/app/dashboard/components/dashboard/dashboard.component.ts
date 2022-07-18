import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private fireService: FirestoreService) { }

  ngOnInit(): void {

    this.fireService.getDataFromFirebase().subscribe( (resp)=>{
      console.log(resp);
      
    })

    
    if(localStorage.getItem('userID') == null){

      this.fireService.postUserProfile().then( (promise)=>{
      
        let setID = {ID: promise.id}
        localStorage.setItem('userID', setID.ID);
  
      }).catch( (error)=>{
        console.error(error)
      });

    }else{

      let userID = localStorage.getItem('userID');      
      this.fireService.getUserProfileInfo(userID).subscribe( (subs)=>{
        console.log('getUserProfileInfo',subs);
      });

    }


  }

}
