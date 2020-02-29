import ApolloClient from "apollo-boost";
import fetch from "isomorphic-fetch";

const token = process.env.GIT_TOKEN;
console.log(token, "to");
// const token  = 'bbfc095f04bb9370e3792f40a2a7cb275d5daf22'
const URL = "https://api.github.com/graphql";

const Client = new ApolloClient({
  uri: URL,
  headers: {
    Authorization: `bearer ${token}`
  },

  fetch
  // onError: error => console.log(error)
});

export default Client;
