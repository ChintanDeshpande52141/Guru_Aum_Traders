import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements OnInit {
  customOptions = {
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    autoHeight: true,
    navText: ['◄', '►'],
    slideBy: 2,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 2 },
    },
  };

  testimonialsData = [
    {
      name: 'Rajesh Kumar',
      review:
        'The jaggery I bought is pure and tastes amazing. Perfect for my traditional recipes. Highly recommended!',
      place: 'Delhi',
      image: 'https://randomuser.me/api/portraits/men/31.jpg',
    },
    {
      name: 'Anjali Sharma',
      review:
        'Fresh grains and quick delivery! The quality of the mahua is just excellent. I will definitely order again.',
      place: 'Jaipur',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Vikram Singh',
      review:
        'I love the natural sweetness of your jaggery. It’s the best I have found so far. Keep up the great work!',
      place: 'Lucknow',
      image: 'https://randomuser.me/api/portraits/men/52.jpg',
    },
    {
      name: 'Meera Patel',
      review:
        'The mahua is authentic and flavorful. My family enjoys it during the festive season. Thank you for such quality products.',
      place: 'Ahmedabad',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      name: 'Suresh Reddy',
      review:
        'The grains are clean and wholesome. It’s rare to find such trustworthy sellers nowadays. Great service too!',
      place: 'Hyderabad',
      image: 'https://randomuser.me/api/portraits/men/23.jpg',
    },
    {
      name: 'Priya Das',
      review:
        'I’ve been buying jaggery and grains from here for months. Always consistent quality and good prices.',
      place: 'Kolkata',
      image: 'https://randomuser.me/api/portraits/women/36.jpg',
    },
  ];

  constructor() {}
  ngOnInit() {}
}
