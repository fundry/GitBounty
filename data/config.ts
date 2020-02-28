import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

const token = process.env.GIT_TOKEN
const URL = 'https://api.github.com/graphql'

const Client = new ApolloClient({
    uri: URL,
    headers: {
        "Authorization" : `bearer ${token}`
    } , 
  fetch, 
  onError: (error) => console.log(error) , 
})

export default Client 