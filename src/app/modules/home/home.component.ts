import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { 
    const paramsSubscription = this.route.queryParams.subscribe(params => {
      const uid = params['uid'];
    });
    setTimeout(() => { if (paramsSubscription) { paramsSubscription.unsubscribe(); } }, 300);
  }

  ngOnInit(): void {
  }

}
