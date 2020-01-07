import { Action, State, StateContext } from "@ngxs/store";

import { IncrementCount, DecrementCount } from "./../actions/count.action";

//step 1
export interface HomeStateModel {
  count: number;
}

//step 2
@State<HomeStateModel>({
  name: "count",
  defaults: {
    count: 0
  }
})

//step 3
export class HomeState {
  @Action(IncrementCount)
  incrementCount({ getState, setState }: StateContext<HomeStateModel>) {
    const state = getState();
    setState({
      ...state,
      count: state.count + 1
    });
  }

  @Action(DecrementCount)
  decrementCount({ getState, setState }: StateContext<HomeStateModel>) {
    const state = getState();

    setState({
      ...state,
      count: state.count - 1
    });
  }
}
