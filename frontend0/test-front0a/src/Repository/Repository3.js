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
const REPOSITORY_QUERY3 = gql`
query Usuarios {
    Usuarios {
      _id
      apellido
      email
      nombre
      estado
      rol
    }
  }
`;

function Repository3() {
    // const {data, error, loading} = useQuery(REPOSITORY_QUERY, {variables:{owner, name}});   { owner, name }
    const {data, error, loading} = useQuery(REPOSITORY_QUERY3);

    if(error) return <div>error... lo siento</div>;
    if(loading || !data) return <div>cargando.... paciencia-bis</div>;

    // return <pre>{JSON.stringify(data, null, 2)}</pre>;
    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>                        
        </div>        
    );
}

export {Repository3}