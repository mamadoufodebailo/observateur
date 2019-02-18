import { Injectable } from '@angular/core';
import {Device} from '@ionic-native/device/ngx';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NetworkInterface} from '@ionic-native/network-interface/ngx';

@Injectable({
  providedIn: 'root'
})
export class GestionRepositoryService {

  constructor(private device: Device,private geolocation: Geolocation,
              private interfaceNetwork: NetworkInterface) {

  }

  getPosition(){
    let coords = [];

    this.geolocation.getCurrentPosition().then(data => {
        coords.push('Lattitude : '+data.coords.latitude);
        coords.push('Longitude : '+data.coords.longitude);
    });

    return coords;
  }

  getInfoDevice(){
    let infos = [];

    infos.push('Model : '+this.device.model);
    infos.push('Type : '+this.device.platform);
    infos.push('UUID : '+this.device.uuid);
    infos.push('Version : '+this.device.version);
    infos.push('Marque : '+this.device.manufacturer);
    infos.push('Série : '+this.device.serial);

    return infos;
  }

  getIpAddress(){
    let ipAddress = [];

    this.interfaceNetwork.getWiFiIPAddress().then(address => {
      ipAddress.push(address.ip);
    });

    return ipAddress;
  }

}
