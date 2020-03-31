import { observable, decorate, action } from "mobx";
import Axios from "axios";

const ID = process.env.CLIENT_ID;
const SECRET = process.env.CLIENT_SECRET;

const url = `https://github.com/login/oauth/authorize?client_id=${ID}&scope=repo,+user+`;
const width = 600;
const height = 600;

class AuthStore {
  authenticated = true;

  AuthUser = () => {
    if (process.browser) {
      let left = window.innerWidth / 2 - width / 2;
      let top = window.innerHeight / 2 - height / 2;

      try {
        // window.open(
        //   url, "" ,
        //   `toolbar=no, location=no, directories=no, status=no, menubar=no,
        // scrollbars=no, resizable=no, copyhistory=no, width=${width},
        // height=${height}, top=${top}, left=${left}`
        // );

        Axios.get("https://github.com/login/oauth/authorize", {
          params: {
            client_id: ID,
            scope: "repo, user "
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
          }
        });
      } catch (error) {
        console.log(error, "errror");
      }
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
