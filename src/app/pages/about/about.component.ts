import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../../components/base/base.module';
import { LinkInterface } from '../../ts/interfaces';
import { PageRoutes } from '../../ts/enum';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, BaseModule, RouterModule],
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  breadcrumb: LinkInterface[] = [
    {
      to: PageRoutes.Home,
      text: 'Home',
    },
    {
      to: PageRoutes.About,
      text: 'About',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
