import { SkyComponent } from './../sky/sky.component';
import {ViewChild, Component,  OnInit} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @ViewChild(SkyComponent)
  sky: SkyComponent;

  type: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.type = params['type'];
      console.log('Matrix: ' + params['name']);
    });

    this.route.queryParams.subscribe( params => {
      console.log('QueryString: ' + params['name']);
    });
  }

  ngAfterViewInit() {
    console.log(this.sky.name);
  }

  checkSkyInputDirty() {
    console.log(this.sky.input.dirty);
  }

  goCards(type) {
    // this.router.navigateByUrl('/cards/' + type);

    // this.router.navigate(['/cards', type]);
    this.router.navigate(['..', type], { relativeTo: this.route });
  }

  // 13 練習兩種不同的可選參數用法 (Optional Parameters)
  goQueryString() {
    this.router.navigate(['/cards', 100], {
      queryParams: {
        name: 'QueryString1'
      }
    });
  }

  goMatrix() {
    this.router.navigate(['/cards', 100, {
        name: 'Matrix',
      }]);
  }

}
