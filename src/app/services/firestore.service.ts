import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { ProfileInfoI } from '../interfaces/profile-info.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( private firestore: AngularFirestore ) { }

  getDataFromFirebase(){
    return this.firestore.collection('data-info').valueChanges().pipe(
      map( (resp) => {
        return resp[0];
      })
    )
  }

  postUserProfile( object: ProfileInfoI){
    return this.firestore.collection('profile-data').add( object )
  }

  getUserProfileInfo(idUser: any){
    return this.firestore.collection('profile-data').doc(idUser).valueChanges();
  }
}
