import { AddTutorial } from "./../actions/tutorial.action";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { Tutorial } from "./../models/tutorial.model";
@Component({
  selector: "app-create-tut",
  template: `
    <div class="left">
      <input type="text" placeholder="name" #name />
      <input type="text" placeholder="url" #url />
      <button (click)="addTutorial(name.value, url.value)">
        Add new a tutorial
      </button>
    </div>
  `,
  styles: []
})
export class CreateTutComponent implements OnInit {
  // tutorials$: Observable<Tutorial>;
  constructor(private store: Store) {
    // this.tutorials$ = this.store.select(state => state.tutorials.tutorials);
  }
  addTutorial = (name, url) => {
    this.store.dispatch(new AddTutorial({ name: name, url: url }));
  };
  ngOnInit() {}
}
