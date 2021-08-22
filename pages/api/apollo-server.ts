import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Article {
    id: ID
    title: String
  }

  type Query {
    getArticle(id: ID): [Article]
    getArticles: [Article]
  }
`

const DB = {
  articles: [
    { id: 1, title: "title1" },
    { id: 2, title: "title2" },
  ]
}

const resolvers = {
  Query: {
    getArticles: () => DB.articles,
    getArticle: (_, args) => {
      return DB.articles.filter( (article) => article.id === Number(args.id) )
    }
  }
}

export const config = {
  api: {
    bodyParser: false
  }
}

const server = new ApolloServer({ typeDefs, resolvers})

export default server.createHandler({ path: "/api/apollo-server"})
