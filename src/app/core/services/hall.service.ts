import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Hall } from '../../shared';

@Injectable()

export class HallService{ 
  halls: FirebaseListObservable<any[]>;
  reservationList: FirebaseListObservable<any[]>;
  constructor ( private db: AngularFireDatabase 
    ){              
    this.halls = db.list("/hall",{
      query:{
        limitToLast:10,
        orderByKey: true
      }
    });
  }
  addHall( hall: Hall ){
    this.halls.push({
      name: hall.name,
      address: hall.address,
      contacts: hall.contacts,
      capacity: hall.capecity,
      photo_album: hall.photo_album,
      video: hall.video,
      owner: hall.owner,
      reservation_instruction: hall.reservation_instruction,
      additional_info: hall.additional_info
    });
  }
}