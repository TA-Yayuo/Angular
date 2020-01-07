import { AddTutorial, RemoveTutorial } from "./../actions/tutorial.action";
import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Tutorial } from "./../models/tutorial.model";

export class TutorialStateModel {
  tutorials: Tutorial[];
}
@State<TutorialStateModel>({
  name: "tutorials",
  defaults: {
    tutorials: []
  }
})
export class TutorialState {
  // @Selector()
  // static getTutorials(state: TutorialStateModel) {
  //   return state.tutorials;
  // }
  // @Action(AddTutorial)
  // add(
  //   { getState, patchState }: StateContext<TutorialStateModel>,
  //   { payload }: AddTutorial
  // ) {
  //   const state = getState();
  //   patchState({
  //     tutorials: [...state.tutorials, payload]
  //   });
  // }
  @Action(AddTutorial)
  add(tut: StateContext<TutorialStateModel>, action: AddTutorial) {
    const state = tut.getState();
    tut.patchState({
      tutorials: [...state.tutorials, action.payload]
    });
  }
  @Action(RemoveTutorial)
  remove(
    { getState, patchState }: StateContext<TutorialStateModel>,
    { payload }: RemoveTutorial
  ) {
    patchState({
      tutorials: getState().tutorials.filter(a => a.name != payload)
    });
  }
}
