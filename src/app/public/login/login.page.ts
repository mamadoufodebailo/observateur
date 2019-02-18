import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthentificationService} from '../../services/authentification.service';
import {MemberModel} from '../../members/models/member.model';
import {ApiRepositoryService} from '../../repository/api-repository.service';
import {LienModel} from '../../members/models/Lien.model';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  fgroup: FormGroup;
  member: MemberModel = new MemberModel();
  donnees : any;
  message: string;
  lien: LienModel = new LienModel();

  constructor(private fb: FormBuilder,private auth: AuthentificationService,
              private api: ApiRepositoryService,private storage: Storage) {
    this.fgroup = this.fb.group({
        'email' : [null,Validators.compose([Validators.required,Validators.email])],
        'password' : [null,Validators.required]
    });
  }

  async ngOnInit() {
    this.onLoad();
  }

  onLoad(){
      this.api.getLien().subscribe(data => {
          this.donnees = data;

          this.lien.id = this.donnees.data.id;
          this.lien.adresse = this.donnees.data.adresse;
          this.lien.email = this.donnees.data.email;
          this.lien.libelle = this.donnees.data.libelle;
          this.lien.logo = this.donnees.data.logo;
          this.lien.telephone = this.donnees.data.telephone;

          this.storage.set('liens',this.lien);
      },error => {
          this.storage.get('liens').then(data => {
              this.donnees = data;

              this.lien.id = this.donnees.id;
              this.lien.adresse = this.donnees.adresse;
              this.lien.email = this.donnees.email;
              this.lien.libelle = this.donnees.libelle;
              this.lien.logo = this.donnees.logo;
              this.lien.telephone = this.donnees.telephone;
          });
      });
  }

  seConnecter(info){
    this.member.email = info.email;
    this.member.password = info.password;

    this.api.connecter(this.member).subscribe(data => {
        this.donnees = data;

        if (this.donnees.message){
            this.auth.login();
        }
        else {
            this.message = "L'utilisteur est introuvable !";
        }
    },error => {
        this.message = "Veuilez réessayer plus tard !";
    });
  }

}
