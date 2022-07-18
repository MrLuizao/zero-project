import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { WrapperComponent } from './dashboard/components/wrapper/wrapper.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { InfoComponent } from './dashboard/components/info/info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appReducers } from './redux/app.reducer';


const firebaseConfig = {
  apiKey: "AIzaSyBNy7_9yaHgvz-_8QaYfBNvwLCfRlzhgIc",
  authDomain: "zero-project-4609c.firebaseapp.com",
  projectId: "zero-project-4609c",
  storageBucket: "zero-project-4609c.appspot.com",
  messagingSenderId: "155878794460",
  appId: "1:155878794460:web:6b4f90bcf1e508dff34019",
  measurementId: "G-VVWS4PB4MC"
}


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    DashboardComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, 

    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
