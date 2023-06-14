import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faceSnaps!: FaceSnap[];

  ngOnInit (): void {
    this.faceSnaps = [
      {
        title: 'Némo',
        description: 'Petit poisson',
        createdDate: new Date(),
        snaps: 100,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHIWK_hJ4XvaHFwL0kclhp6y0yxj08c3l33w&usqp=CAU'
      },
      {
          title: 'Archibald',
        description: 'Petit poto',
        createdDate: new Date(),
        snaps: 200,
        imageUrl: 'data:image/png;base64,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',
        location: 'Google image'
      },
      {
        title: 'Moi',
        description: 'Belle homme',
        createdDate: new Date(),
        snaps: 155,
        imageUrl: 'https://laboitedemangas.files.wordpress.com/2021/10/esteban-les-mysterieuses-cites-dor-1982.jpg'
      },
      {
        title: 'Némo',
        description: 'Petit poisson',
        createdDate: new Date(),
        snaps: 300,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHIWK_hJ4XvaHFwL0kclhp6y0yxj08c3l33w&usqp=CAU'
      },
      {
          title: 'Archibald',
        description: 'Petit poto',
        createdDate: new Date(),
        snaps: 400,
        imageUrl: 'data:image/png;base64,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',
        location: 'Google image'
      },
      {
        title: 'Moi',
        description: 'Belle homme',
        createdDate: new Date(),
        snaps: 500,
        imageUrl: 'https://laboitedemangas.files.wordpress.com/2021/10/esteban-les-mysterieuses-cites-dor-1982.jpg'
      }
    ]
  }
}