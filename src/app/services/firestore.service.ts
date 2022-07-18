import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

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

  postUserProfile(){

    const USER_INFO = {
      id: new Date().getTime().toString(),
      name: 'Luis',
      lastName: 'Test',
      email: 'luisonvr@icloud.com',
      phone: '7225595400',
      country: 'Mexico'
    }
    return this.firestore.collection('profile-data').add( USER_INFO )
  }

  getUserProfileInfo(idUser: any){
    return this.firestore.collection('profile-data').doc(idUser).valueChanges();
  }
}
