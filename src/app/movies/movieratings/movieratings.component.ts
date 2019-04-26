import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movieratings',
  templateUrl: './movieratings.component.html',
  styleUrls: ['./movieratings.component.less']
})
export class MovieratingsComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.parent.snapshot.paramMap.get('id');
    console.log(id);
  }

}
