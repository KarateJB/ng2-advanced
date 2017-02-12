import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    alert(this.route.parent.snapshot.params['user']);
  }

}
