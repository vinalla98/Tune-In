import {AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-googlemapsapi',
  templateUrl: './googlemapsapi.component.html',
  styleUrls: ['./googlemapsapi.component.css']
})
export class GooglemapsapiComponent implements OnInit {

  constructor(private _myService: UsersService, private router:Router, public route: ActivatedRoute) { }
  ngOnInit(): void {
  }

}
