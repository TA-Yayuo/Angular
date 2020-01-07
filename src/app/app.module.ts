import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { TutorialState } from "./states/tutorial.state";
import { CountNumberState } from "./states/count.state";

import { NgxsModule } from "@ngxs/store";
import { ReadTutComponent } from "./read-tut/read-tut.component";
import { CreateTutComponent } from "./create-tut/create-tut.component";
@NgModule({
  declarations: [AppComponent, ReadTutComponent, CreateTutComponent],
  imports: [
    BrowserModule,

    NgxsModule.forRoot([TutorialState, CountNumberState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
