import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProfileInfoI } from 'src/app/interfaces/profile-info.interface';
import { FirestoreService } from 'src/app/services/firestore.service';
import * as fromActions from 'src/app/redux/profile-info/profile.actions';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  reduxObj$!: Observable<any>
  loading: boolean = false;
  profileInfoModel! : ProfileInfoI;
  
  
  constructor( private fireService: FirestoreService, private store: Store<any>,) { }

  formGroup = new FormGroup ( {
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    direction: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    rfc: new FormControl('', [Validators.required]),
    curp: new FormControl('', [Validators.required]),
    ocupation: new FormControl('', [Validators.required])
  });  

  
  ngOnInit(): void {
    // this.fireService.getDataFromFirebase().subscribe( (resp)=>{
    //   console.log(resp); 
    // });

  }

  submitForm(){
    console.log( this.formGroup.value);
    this.loading = true;

    let userInfo: any = this.formGroup.value;
    
    this.fireService.postUserProfile(userInfo).then((promise)=>{
      
      let setID = {ID: promise.id}
      localStorage.setItem('userID', setID.ID);

      let userID = localStorage.getItem('userID');      
      this.fireService.getUserProfileInfo(userID).subscribe( (subs: any)=>{
        this.store.dispatch( fromActions.setProfileInfoAction({payload: subs}) );

        this.formGroup.setValue({
          name: '',
          lastname: '',
          date: '',
          age: '',
          gender: '',
          country: '',
          direction: '',
          mobile: '',
          phone: '',
          rfc: '',
          curp: '',
          ocupation: ''
        });

        this.loading = false;

      });

    }).catch( (error)=>{
      console.error(error)
    });
  }


}
