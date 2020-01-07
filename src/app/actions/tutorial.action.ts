import { Tutorial } from "./../models/tutorial.model";

export class AddTutorial {
  static readonly type = "ADD_TUTORIAL";
  constructor(public payload: Tutorial) {}
}
export class RemoveTutorial {
    static readonly type = "REMOVE_TUTORIAL";
    constructor(public payload: string) {}
  }
  