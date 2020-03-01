import { observable, decorate, action } from "mobx";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const url = `https://github.com/login/oauth/authorize?${CLIENT_ID}&scope=repo,+user+`;
const width = 600;
const height = 600;

if (process.browser) {
}

class AuthStore {
  authenticated = false;

  AuthUser = () => {
    if (process.browser) {
      let left = window.innerWidth / 2 - width / 2;
      let top = window.innerHeight / 2 - height / 2;

      window.open(
        url,
        "",
        `toolbar=no, location=no, directories=no, status=no, menubar=no,
        scrollbars=no, resizable=no, copyhistory=no, width=${width},
        height=${height}, top=${top}, left=${left}`
      );
    }

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
