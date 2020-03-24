import { observable, decorate, action } from "mobx";

class ModalStore {
  filterModal = false;

  openFilterModal = () => {
    this.filterModal = true;
  };

  closeFilterModal = () => {
    this.filterModal = false;
  };
}

const DecoratedModalStore: any = decorate(ModalStore, {
  //observables
  filterModal: observable,

  //actions
  openFilterModal: action,
  closeFilterModal: action
});

const store: any = new DecoratedModalStore();

export default store;
