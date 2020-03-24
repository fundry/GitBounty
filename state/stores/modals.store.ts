import { observable, decorate, action } from "mobx";

class ModalStore {
  filterModal = false;

  openFilterModal = () => {
    this.filterModal = true;
  };

  closeFilterModal = () => {
    this.filterModal = false;
  };

  showGuideline = false;
  openGuidelineModal = () => {
    this.showGuideline = true;
    console.log("pressed");

    console.log(this.showGuideline);
  };

  closeGuidelineModal = () => {
    this.showGuideline = false;

    console.log("close pressed");
  };
}

const DecoratedModalStore: any = decorate(ModalStore, {
  //observables
  filterModal: observable,
  showGuideline: observable,

  //actions
  openFilterModal: action,
  closeFilterModal: action,

  openGuidelineModal: action,
  closeGuidelineModal: action
});

const store: any = new DecoratedModalStore();

export default store;
