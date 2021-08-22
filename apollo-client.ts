import { ApolloClient, InMemoryCache} from '@apollo/client'

const cache = new InMemoryCache()
const uri = "http://localhost:4001"

const client = new ApolloClient({
  cache: cache,
  uri: uri,
})

export default client
