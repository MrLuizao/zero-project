import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProfileInfoI } from 'src/app/interfaces/profile-info.interface';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  isExpanded: boolean = false;
  reduxObj$!: Observable<any>
  userData!: ProfileInfoI;

  constructor( private store: Store<any> ) { }

  ngOnInit(): void {

    this.reduxObj$ = this.store.select(store => store.profile.info);
    this.reduxObj$.subscribe( (resp:ProfileInfoI)=>{  
      this.userData = resp;
      console.log('userData',this.userData); 
    });

  }

}
