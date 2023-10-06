import { Component } from '@angular/core';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrl: './palindrome.component.css',
})
export class PalindromeComponent {
  inputWord: string = '';

  // trim and lowercase the input word to pre-process it
  isPalindrome(word: string): boolean {
    let trimmedWord = word.trim().toLowerCase();
    let reverseWord = trimmedWord.split('').reverse().join('');
    return trimmedWord === reverseWord;
  }
}
