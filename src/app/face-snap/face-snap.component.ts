import { Component, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  constructor(
    private faceSnapService: FaceSnapService,
    private router: Router) {}

  onViewFaceSnap(faceSnapId: number): void {
    this.router.navigateByUrl(`facesnaps/${faceSnapId}`);
  }

}
