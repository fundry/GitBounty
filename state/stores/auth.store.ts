import { observable, decorate, action } from "mobx";

class AuthStore {
  authenticated = true;

  AuthUser = () => {
    this.authenticated = true;
  };

  UnAuthUser = () => {
    this.authenticated = false;
  };
}

const DecoratedAuthStore: any = decorate(AuthStore, {
  //observables
  authenticated: observable,

  //actions
  AuthUser: action,
  UnAuthUser: action
});

const store: any = new DecoratedAuthStore();

export default store;
