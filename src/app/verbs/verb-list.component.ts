import { Component } from "@angular/core";
import { IVerb } from './verb';

@Component({
  selector: "verb-director",
  templateUrl: "verb-list.component.html"
})
export class VerbListComponent {
    pageTitle: string = "Verb Conjugation: Angular learning project";

    verbList: IVerb[] = [
      {
        "id": 101,
        "verbInfinitive": "etre",
        "english": "to be",
        "irregular": true,
        "pastParticiple": "ete",
        "starRating": 5,
      },
      {
        "id": 102,
        "verbInfinitive": "avoir",
        "english": "to have",
        "irregular": true,
        "pastParticiple": "eu",
        "starRating": 5,
    },
    {
      "id": 103,
      "verbInfinitive": "manger",
      "english": "to eat",
      "irregular": false,
      "pastParticiple": "mange",
      "starRating": 4,
  }
    ]
}
