import ApolloClient from "apollo-boost";
import fetch from "isomorphic-fetch";

const token = process.env.GIT_TOKEN;
console.log(token, "to");

const Client = new ApolloClient({
  uri: URL,
  headers: {
    Authorization: `bearer ${token}`
  },

  fetch,
  onError: error => console.log(error)
});

export default Client;
