import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  // declare params
  toggleSnapped!: boolean;

  // init params
  ngOnInit(): void {
      this.toggleSnapped = false;
  }

  // actions
  onSnap() {
    if(this.toggleSnapped) this.faceSnap.snaps--
    else this.faceSnap.snaps++;
    this.toggleSnapped = !this.toggleSnapped
  }

}
