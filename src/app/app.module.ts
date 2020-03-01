import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';


import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HobbiesListComponent } from './hobbies/hobbies-list.component';
import { WineListComponent } from './wine/wine-list.component';
import { FrenchRegionComponent } from './frenchRegions/region-component';
import { StarComponent } from './shared/star.component';
import { FrenchVerbsComponent } from './frenchVerbs/verbs-component';

@NgModule({
  declarations: [AppComponent,
                HobbiesListComponent,
                WineListComponent,
                ConvertToSpacesPipe,
                StarComponent,
                FrenchRegionComponent,
                FrenchVerbsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
