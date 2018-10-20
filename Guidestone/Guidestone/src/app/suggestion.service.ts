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
  
  angrySuggestions: Sugg[] = [
    {
      mood: "angry",
      activity: "Journal",
      why: "Helps process emotions"
    },
    {
      mood: "angry",
      activity: "Phone a friend",
      why: "Helps relieve tension"
    },
    {
      mood: "angry",
      activity: "Workout",
      why: "Makes you happier" 
    }
  ];    
  
  anxiousSuggestions: Sugg[] = [
    {
      mood: "anxious",
      activity: "Count 100 breaths",
      why: "Concentrates energy elsewhere"
    },
    {
      mood: "anxious",
      activity: "Journal",
      why: "Helps process thoughts"
    },
    {
      mood: "anxious",
      activity: "Yoga/Tai Chi",
      why: "Concentrates energy elsewhere"
    }
  ];  
  restlessSuggestions: Sugg[] = [
    {
      mood: "restless",
      activity: "Meditate",
      why: "Helps relax"
    },
    {
      mood: "restless",
      activity: "Walking outside",
      why: "Reduces anxiety"
    },
    {
      mood: "restless",
      activity: "Jogging outside",
      why: "Improves heart health"
    }
  ];
 
  suggestions: Sugg[][] = [
    this.sadSuggestions,
    this.angrySuggestions,
    this.anxiousSuggestions,
    this.restlessSuggestions,
    this.happySuggestions
  ];

  getSuggestions(index: number): Sugg[] {
    return this.suggestions[index];
  }

}
