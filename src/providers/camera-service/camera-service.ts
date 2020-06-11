// camera.service.ts
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { of, Subscriber, Subscription, Observable } from 'rxjs';

export interface Photo {
    photo: string;
}

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  constructor(private camera: Camera) { }

  async takePicture(): Promise<Photo> {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    const imageData = await this.camera.getPicture(options);

    return {
        photo: imageData
    };


  }
}