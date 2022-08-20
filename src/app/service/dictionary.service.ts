import { Injectable } from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  dictionaries: Dictionary[] = [];
  constructor() {
    this.dictionaries.push({word: 'Hello', mean: 'Xin chao'});
    this.dictionaries.push({word: 'Dog', mean: 'Cho'});
    this.dictionaries.push({word: 'Cat', mean: 'Meo'});
    this.dictionaries.push({word: 'Rat', mean: 'Chuot'});
  }

  findAll() {
    return this.dictionaries;
  }

  findByWord(word: string | null) {
    return this.dictionaries.filter(data => data.word === word);
  }
}
