import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.scss',
})
export class OurTeamComponent implements OnInit {
  teamData = [
    {
      name: 'Omprakash Sahu',
      image:
        'https://cdn-icons-png.freepik.com/512/4825/4825038.png?uid=R200370789&ga=GA1.1.1757101722.1747336116',
    },
    {
      name: 'Anuj Sahu',
      image:
        'https://cdn-icons-png.freepik.com/512/4825/4825044.png?uid=R200370789&ga=GA1.1.1757101722.1747336116',
    },
    {
      name: 'Chetan Sahu',
      image:
        'https://cdn-icons-png.freepik.com/512/4825/4825072.png?uid=R200370789&ga=GA1.1.1757101722.1747336116',
    },
    {
      name: 'Parth Sahu',
      image:
        'https://cdn-icons-png.freepik.com/512/4825/4825087.png?uid=R200370789&ga=GA1.1.1757101722.1747336116',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
