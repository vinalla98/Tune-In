import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list-reviews',
  templateUrl: './list-reviews.component.html',
  styleUrls: ['./list-reviews.component.css']
})
export class ListReviewsComponent implements OnInit {

  feedbackForm = new FormGroup(
    {
    firstName: new FormControl(''),
    rate: new FormControl(''),
    review: new FormControl(''),
  });
  public rev: any;
  public users: any;
  constructor(private _myService: UsersService , private router:Router) { }
  ngOnInit() {
      this.getReviews();
      this.getUsers();
  }
  getReviews() {
      this._myService.getReviews().subscribe(
          data => { this.rev = data},
          err => console.error(err),
          () => console.log('finished loading')
      );
  }
  onDelete(reviewId: string) {
    this._myService.deleteReview(reviewId);
  }

    getUsers() {
      this._myService.getUsers().subscribe(
          data => { this.users = data},
          err => console.error(err),
          () => console.log('finished loading')
      );
  }


}
