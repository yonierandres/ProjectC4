import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    // uri: "https://api.github.com/yonierandres/ProjectC4",
    cache: new InMemoryCache(),
    headers: 
            {
                Authorization: "bearer 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"
            },            
})

export default client;