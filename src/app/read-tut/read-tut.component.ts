import { HomeState, HomeStateModel } from "./../states/count2.state";
import {
  IncreaseNum,
  DegreaseNum,
  DecrementCount,
  IncrementCount
} from "./../actions/count.action";
import { Subscription } from "rxjs";
import { TutorialState } from "./../states/tutorial.state";
import { RemoveTutorial } from "./../actions/tutorial.action";
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Tutorial } from "./../models/tutorial.model";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CountNumberState } from "./../states/count.state";
@Component({
  selector: "app-read-tut",
  template: `
    <div class="right">
      <h3>Tutorial</h3>
      <ul>
        <li
          (click)="removeTutorial(tutorial.name)"
          *ngFor="let tutorial of tutorials$ | async"
        >
          <a>{{ tutorial.name }}</a>
        </li>
      </ul>
      <h1>{{ value$ | async }}</h1>

      <button (click)="plusNumber()">Click</button>
    </div>
  `,
  styles: []
})
export class ReadTutComponent implements OnInit {
  tutorials$: Observable<Tutorial>;
  public value$: Observable<number>;
  // @Select(HomeState) count$: Observable<HomeStateModel>;
  // state: HomeStateModel;
  // storeSub: Subscription;
  constructor(private store: Store, private chr: ChangeDetectorRef) {
    this.tutorials$ = this.store.select(state => state.tutorials.tutorials);
    // this.tutorials$ = this.store
    //   .select(TutorialState.getTutorials)
    //   .pipe(map(x => x));
    this.value$ = this.store.select(CountNumberState.valuePlus);
  }
  removeTutorial = (name: string) => {
    this.store.dispatch(new RemoveTutorial(name));
  };

  plusNumber = () => {
    this.store.dispatch(new IncreaseNum());
  };

  ngOnInit() {
    // this.storeSub = this.count$.subscribe((state: HomeStateModel) => {
    //   this.state = { ...state };
    //   this.chr.detectChanges();
    // });
  }
  // ngOnDestroy() {
  //   // ensure that we unsubscribe
  //   this.storeSub.unsubscribe();
  // }

  // // https://ngxs.gitbook.io/ngxs/concepts/store
  // addOneToCount() {
  //   this.store.dispatch(new IncrementCount());
  // }

  // subtractOneFromCount() {
  //   this.store.dispatch(new DecrementCount());
  // }
}
