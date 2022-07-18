import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProfileInfoI } from 'src/app/interfaces/profile-info.interface';
import { FirestoreService } from 'src/app/services/firestore.service';
import * as fromActions from 'src/app/redux/profile-info/profile.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  reduxObj$!: Observable<any>

  constructor( private fireService: FirestoreService, private store: Store<any>,) { }

  ngOnInit(): void {

    // this.reduxObj$ = this.store.select(store => store.profile.info);
    // this.reduxObj$.subscribe( (resp:ProfileInfoI)=>{  
    //   console.log(resp); 
    // });

    this.fireService.getDataFromFirebase().subscribe( (resp)=>{
      console.log(resp); 
    });

    
    if(localStorage.getItem('userID') == null){

      this.fireService.postUserProfile().then( (promise)=>{
      
        let setID = {ID: promise.id}
        localStorage.setItem('userID', setID.ID);
  
      }).catch( (error)=>{
        console.error(error)
      });

    }else{

      let userID = localStorage.getItem('userID');      
      this.fireService.getUserProfileInfo(userID).subscribe( (subs: any)=>{
        
        this.store.dispatch( fromActions.setProfileInfoAction({payload: subs}) );

      });

    }


  }

}
