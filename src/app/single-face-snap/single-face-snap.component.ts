import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  // declare params
  toggleSnapped!: boolean;
  faceSnap!: FaceSnap;

  constructor(
    private faceSnapService: FaceSnapService, 
    private route: ActivatedRoute) {}

  // init params
  ngOnInit(): void {
      this.toggleSnapped = false;
      const faceSnapId = +this.route.snapshot.params['id'];
      this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  // actions
  onSnap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, this.toggleSnapped);
    this.toggleSnapped = !this.toggleSnapped;
  }
}
