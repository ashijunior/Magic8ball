import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  question: string = '';
  answer: string = '';
  showAnswer: boolean = false;
  showlaugh: string = '';

  answers: string[] = [
    'Absolutely!',
    'No way!',
    'It’s uncertain.',
    'Ask again later.',
    'Definitely!',
    'I wouldn’t count on it.',
    'Yes, but be cautious.',
    'My sources say no.',
    'All signs point to yes.',
    'Outlook not so good.',
    'Yes, in due time.',
    'Very doubtful.',
    'Absolutely not!',
    'Chances are good.',
    'The future is unclear.',
    'You may rely on it.',
    'Don’t bet on it.',
    'Most likely.',
    'I have my doubts.',
    'Without a doubt!'
  ];

  constructor() { }

  ngOnInit(): void {
    this.showAnswer = false; // Ensure the answer box is hidden on initialization
  }

  getAnswer() {
    if (!this.question.trim()) {
      this.answer = 'Don\'t play tricks on me! \u{1F60A}';
      this.showAnswer = true; // Show the answer box with the prompt
      return;
    }
    const randomIndex = Math.floor(Math.random() * this.answers.length);
    this.answer = this.answers[randomIndex];
    this.showAnswer = true; // Show the answer box with the generated answer
  }
}
