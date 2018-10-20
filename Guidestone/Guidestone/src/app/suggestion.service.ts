import { Injectable } from '@angular/core';
import { Sugg } from './sugg';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  constructor() { }

  // phys: 1 mind: 2 soc: 3

  happySuggestions: Sugg[] = [
    {
      mood: "happy",
      activity: "Journaling",
      why: "records hapy thoughts",
      type: 2
    },
    {
      mood: "happy",
      activity: "Peaceful walk outside",
      why: "Keeps you happy",
      type: 1
    },
    {
      mood: "happy",
      activity: "Phone call to best friend",
      why: "Shares happines",
      type: 3
    }
  ];

  sadSuggestions: Sugg[] = [
    {
      mood: "sad",
      activity: "Looking at photo album of family",
      why: "Focuses your thoughts on what matters",
      type: 3
    },
    {
      mood: "sad",
      activity: "Peaceful walk outside",
      why: "Cheers you up",
      type: 1
    },
    {
      mood: "sad",
      activity: "Jogging outside",
      why: "Improves heart health",
      type: 1
    }
  ];
  
  angrySuggestions: Sugg[] = [
    {
      mood: "angry",
      activity: "Journal",
      why: "Helps process emotions",
      type: 2
    },
    {
      mood: "angry",
      activity: "Phone a friend",
      why: "Helps relieve tension",
      type: 3
    },
    {
      mood: "angry",
      activity: "Workout",
      why: "Makes you happier",
      type: 1
    }
  ];    
  
  anxiousSuggestions: Sugg[] = [
    {
      mood: "anxious",
      activity: "Count 100 breaths",
      why: "Concentrates energy elsewhere",
      type: 2
    },
    {
      mood: "anxious",
      activity: "Journal",
      why: "Helps process thoughts",
      type: 2
    },
    {
      mood: "anxious",
      activity: "Yoga/Tai Chi",
      why: "Concentrates energy elsewhere",
      type: 1
    }
  ];  
  restlessSuggestions: Sugg[] = [
    {
      mood: "restless",
      activity: "Meditate",
      why: "Helps relax",
      type: 2
    },
    {
      mood: "restless",
      activity: "Walking outside",
      why: "Spends your energy",
      type: 1
    },
    {
      mood: "restless",
      activity: "Jogging outside",
      why: "Improves heart health",
      type: 1
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
