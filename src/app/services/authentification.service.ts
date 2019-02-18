import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Storage} from '@ionic/storage';
import {Platform} from '@ionic/angular';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  authentificationState = new BehaviorSubject(false);

  constructor(private storage: Storage,private plt: Platform) {
    this.plt.ready().then(() => {
      this.checkToken();
    })
  }

  login(){
    return this.storage.set(environment.AUTH,'Bearer: 1234').then(res => {
      this.authentificationState.next(true);
    });
  }

  logout(){
    return this.storage.remove(environment.AUTH).then(() => {
      this.authentificationState.next(false);
    });
  }

  isAuthenticated(){
    return this.authentificationState.value;
  }

  checkToken(){
    return this.storage.get(environment.AUTH).then(res => {
      if (res){
        this.authentificationState.next(true);
      }
    });
  }

}
