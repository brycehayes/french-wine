import { Component } from '@angular/core';

@Component({
  selector: 'verb-root',
  template: `
      <div><h1>{{pageTitle}}</h1>
        <div>French Verb Component</div>
      </div>`
})
export class FrenchVerbsComponent{
  pageTitle: string = 'French Verbs - Angular learning Project';
}
