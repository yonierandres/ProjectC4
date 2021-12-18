import { ApolloClient, InMemoryCache } from "@apollo/client"

const client0 = new ApolloClient({
    // uri: "https://server-gql-projectmanagement.herokuapp.com",
    // uri: "https://server-gql-projectmanagement.herokuapp.com/graphql",
    uri: "https://api.github.com/graphql",
    // uri: "https://api.github.com/yonierandres/ProjectC4",
    cache: new InMemoryCache(),
    // header: "content-type: application/json",
    headers: 
            {
                // Authorization: "Bearer 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"
                Authorization: "Bearer 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"
                
            },            
});

export default client0;