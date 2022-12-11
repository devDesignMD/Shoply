import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../../components/base/base.module';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, BaseModule],
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
