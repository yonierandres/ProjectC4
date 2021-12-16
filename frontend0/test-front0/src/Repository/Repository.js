import React from "react";
import { useQuery, gql } from "@apollo/client";

// query repositoryQuery($owner: String!, $name: String!) 
// name: $name, owner: $owner  , {variables: { owner, name }}
const REPOSITORY_QUERY = gql`
query MyQuery($owner: String!, $name: String!) {
    repository(name: $name, owner: $owner) {
      id
      name
      description
    }
  }
`;

function Repository({ owner, name }) {
    const {data, error, loading} = useQuery(REPOSITORY_QUERY, {variables:{owner, name}});

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

export {Repository}