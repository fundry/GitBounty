import { observable, decorate, action } from "mobx";

//some states here a confuing .. would fix later
class TaskStore {
  tasks = [];

  approved = false;

  requestApproval = () => {
    this.approved = false;
  };
}

const DecoratedTaskStore: any = decorate(TaskStore, {
  //observables
  tasks: observable,
  approved: observable,

  //actions
  requestApproval: action
});

const store: any = new DecoratedTaskStore();

export default store;
