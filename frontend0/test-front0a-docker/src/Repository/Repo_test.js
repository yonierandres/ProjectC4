import React from "react";
import { useQuery, gql } from "@apollo/client";

// query repositoryQuery($owner: String!, $name: String!) 
// name: $name, owner: $owner  , {variables: { owner, name }}
// query MyQuery($owner: String!, $name: String!) {

//     repository(name: $name, owner: $owner) {
//       id
//       name
//       description
//     }
//   }
// const REPOSITORY_QUERY_test = gql`
// {
//     repository(owner: "leighhalliday", name: "use-supercluster"){
//         id
//         name
//         description
//         languages(first: 5) {
//             nodes {
//                 id
//                 name                
//             }
//         }
//     }
// }
// `;

const REPOSITORY_QUERY_test = gql`
query repositoryQuery($owner: String!, $name: String!) {
      repository(name: $name, owner: $owner) {
        id
        name
        description
      }
    }
`;

function Repo_test({ owner, name }) {
    const {data, error, loading} = useQuery(REPOSITORY_QUERY_test, {variables:{ owner, name }});   //{ owner, name }
    // const {data, error, loading} = useQuery(REPOSITORY_QUERY);

    if(error) return <div>error... lo siento</div>;
    if(loading || !data) return <div>cargando.... paciencia</div>;

    // return <pre>{JSON.stringify(data, null, 2)}</pre>;
    return (
        <div>
            <h2>{data.repository.name}</h2>
            <p>{data.repository.description}</p>
        </div>
    );
}

export {Repo_test};