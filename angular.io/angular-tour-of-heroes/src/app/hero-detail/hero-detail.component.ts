import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { HeroService } from "../hero.service";

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private route: ActivatedRoute,
              private heroSerivce: HeroService,
              private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroSerivce.getHero(id).subscribe(hero => this.hero = hero)
  }

  save(): void {
    this.heroSerivce.updateHero(this.hero)
      .subscribe(() => this.goBack())
  }

  goBack(): void {
    this.location.back();
  }

}
