import { Injectable } from '@angular/core';
import { Sugg } from './sugg';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  constructor() { }

  happySuggestions: Sugg[] = [
    {
      mood: "happy",
      activity: "Sitting up and sitting down",
      why: "keeps you happy"
    },
    {
      mood: "happy",
      activity: "Peaceful walk outside",
      why: "keeps you happy"
    },
    {
      mood: "happy",
      activity: "Jogging outside",
      why: "Improves heart health"
    }
  ];

  sadSuggestions: Sugg[] = [
    {
      mood: "sad",
      activity: "Sitting up and sitting down",
      why: "keeps you happy"
    },
    {
      mood: "sad",
      activity: "Peaceful walk outside",
      why: "keeps you happy"
    },
    {
      mood: "sad",
      activity: "Jogging outside",
      why: "Improves heart health"
    }
  ];
  

}
