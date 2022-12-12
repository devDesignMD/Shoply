import { Component, Input, OnInit } from '@angular/core';
import { LinkInterface } from '../../../ts/interfaces';

@Component({
  selector: 'Breadcrumb',
  templateUrl: './breadcrump.component.html',
  styles: [],
})
export class BreadcrumpComponent implements OnInit {
  @Input() items: LinkInterface[] = [];

  constructor() {}

  ngOnInit(): void {}
}
