import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {InformerDetailPageModule} from './members/informer-detail/informer-detail.module';
import {PartenaireDetailPageModule} from './members/partenaire-detail/partenaire-detail.module';
import {CommuniqueDetailPageModule} from './members/communique-detail/communique-detail.module';
import {Camera} from '@ionic-native/camera/ngx';
import {HttpClientModule} from '@angular/common/http';
import {ApiRepositoryService} from './repository/api-repository.service';
import {IonicStorageModule} from '@ionic/storage';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { SensibiliserDetailPageModule } from './members/sensibiliser-detail/sensibiliser-detail.module';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NetworkInterface} from '@ionic-native/network-interface/ngx';
import {Device} from '@ionic-native/device/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
      InformerDetailPageModule,
      PartenaireDetailPageModule,
      CommuniqueDetailPageModule,
      SensibiliserDetailPageModule,
      HttpClientModule,
      IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    ApiRepositoryService,
    DocumentViewer,
      Geolocation,
      NetworkInterface,
      Device
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
