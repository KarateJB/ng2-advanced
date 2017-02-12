import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-radial',
  templateUrl: './radial.component.html',
  styleUrls: ['./radial.component.css']
})
export class RadialComponent implements OnInit {

  private parentParent$: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute

  ) {

  }


  ngOnInit() {
    // alert(this.route.parent.snapshot.params['user']);

    //The following observable will keep live when routing to other sub routes.
    //So the observable must be unsubscribed on OnDestroy.
    this.parentParent$ = this.route.parent.params.subscribe(params => {
      console.log(params['user']);
    })
  }

  ngOnDestroy() {
    this.parentParent$.unsubscribe();
  }

}
