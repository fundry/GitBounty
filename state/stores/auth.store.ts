import { observable, decorate, action } from 'mobx';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: '5109216f8601ecfeaa29bcb35cc22e6f1ecbd24b',
  userAgent: '',
  previews: [],
  timeZone: '',
  log: {
    error: console.error(),
  },
});

const connect = async () => {
  const { data: pullRequest } = await octokit.pulls.get({
    owner: 'octokit',
    repo: 'rest.js',
    pull_number: 123,
  });
};

connect();

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
  UnAuthUser: action,
});

const store: any = new DecoratedAuthStore();

export default store;
