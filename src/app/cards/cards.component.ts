import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  private type: string;
  private name: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    //this.type = this.route.snapshot.params['type']; //Not observable
    this.route.params.subscribe(params => {
      this.type = params['type'];
      if(params['name']){
        console.log(params['name']);
        this.name = params['name'];
      }
    });

    this.route.queryParams.subscribe(params => {
      if(params['name']){
        console.log(params['name']);
        this.name = params['name'];
      }
    });
  }

  private changeType(type: string) {
    this.router.navigate(["cards", type]);

  }
}
