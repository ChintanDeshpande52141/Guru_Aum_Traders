import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-sell',
  standalone: true,
  imports: [],
  templateUrl: './what-we-sell.component.html',
  styleUrl: './what-we-sell.component.scss',
})
export class WhatWeSellComponent implements OnInit {
  servicesData = [
    {
      service_title: 'Jaggery',
      service_details: 'Pure, natural jaggery made from the finest sugarcane.',
      service_image: '/assets/images/jaggery.png',
    },
    {
      service_title: 'Grains',
      service_details:
        'Wholesome, premium-quality grains sourced directly from trusted farms.',
      service_image: '/assets/images/grains.png',
    },
    {
      service_title: 'Mahua',
      service_details:
        'Authentic Mahua — a traditional natural delicacy, handpicked and crafted for a rich, unique flavor straight from nature.',
      service_image: '/assets/images/mahua.png',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
