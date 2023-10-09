import { Component } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrl: './palindrome.component.css',
})
export class PalindromeComponent {
  inputWord: string = '';
  inputSubject: Subject<string> = new Subject<string>();
  isWordPalindrome: boolean = false;
  isLoading: boolean = false;

  ngOnInit() {
    this.inputSubject.pipe(debounceTime(1000)).subscribe({
      next: (word: string) => {
        this.isWordPalindrome = this.isPalindrome(word);
        this.isLoading = false;
      },
      error: (message) => console.log(message),
    });
  }

  onChange(model: string) {
    this.inputSubject.next(model);
    this.isLoading = true;
  }

  // trim and lowercase the input word to pre-process it
  isPalindrome(word: string): boolean {
    let trimmedWord = word.trim().toLowerCase();
    let reverseWord = trimmedWord.split('').reverse().join('');
    return trimmedWord === reverseWord;
  }
}
