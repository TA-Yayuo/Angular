import { IncreaseNum, DegreaseNum } from "./../actions/count.action";
import { State, Action, StateContext, Selector } from "@ngxs/store";

export interface DemoStateModel {
  value: number;
}

@State<DemoStateModel>({
  name: "demo",
  defaults: {
    value: 0
  }
})
export class CountNumberState {
  @Selector()
  static valuePlus(state: DemoStateModel) {
    return state.value;
  }
  @Action(IncreaseNum)
  increase({ getState, setState, patchState }: StateContext<DemoStateModel>) {
    const state = getState();

    patchState({
      value: state.value + 2
    });
    console.log("Value va state", state.value + 2);
  }
  @Action(IncreaseNum)
  degrese(count: StateContext<DemoStateModel>, action: DegreaseNum) {
    const state = count.getState();
    count.patchState({
      value: state.value - 1
    });
  }
}
