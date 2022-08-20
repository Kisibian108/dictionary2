import { Component, OnInit } from '@angular/core';
import {Dictionary} from "../model/dictionary";
import {DictionaryService} from "../service/dictionary.service";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  dictionary: Dictionary = {
    word: '',
    mean: ''
  };
  dictionaries: Dictionary[] = [];
  constructor(private dictionaryService: DictionaryService) {
    this.dictionaries = this.dictionaryService.findAll();
  }

  ngOnInit(): void {
  }

  translate(value: string) {
    this.dictionary = {};
    value = value.toLowerCase();
    // @ts-ignore
    if (this.dictionaries.filter((data) => data.word.toLowerCase() === value)[0] !== undefined) {
      // @ts-ignore
      this.dictionary = this.dictionaries.filter((data) => data.word.toLowerCase() === value)[0];
    } else {
      this.dictionary.mean = 'Not found';
    }
  }

}
