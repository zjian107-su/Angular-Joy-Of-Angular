import { Component } from '@angular/core';

interface Candidate {
  id: number;
  votes: number;
  text: string;
}

const candidates: Candidate[] = [
  { id: 1, votes: 12, text: 'A' },
  { id: 2, votes: 8, text: 'B' },
  { id: 3, votes: 16, text: 'C' },
  { id: 4, votes: 4, text: 'D' },
  { id: 5, votes: 5, text: 'E' },
];

@Component({
  selector: 'app-vote-system',
  templateUrl: './vote-system.component.html',
  styleUrl: './vote-system.component.css',
})
export class VoteSystemComponent {
  candidates: Candidate[] = candidates;
  inputText: string = '';

  ngOnInit() {
    this.sort();
  }

  sort() {
    this.candidates.sort((a, b) => {
      return a.votes === b.votes ? 0 : a.votes > b.votes ? -1 : 1;
    });
  }

  upVote(candidate: Candidate) {
    candidate.votes++;
    this.sort();
  }

  downVote(candidate: Candidate) {
    if (candidate.votes === 0) {
      return;
    }
    candidate.votes--;
    this.sort();
  }

  addCandidate(text: string) {
    if (!text.trim()) {
      return;
    }

    let newCandidate: Candidate = {
      id: this.candidates.length + 1,
      votes: 1,
      text: text,
    };

    this.candidates.push(newCandidate);
    this.inputText = '';
    this.sort();
  }
}
