import React from "react";
import { useQuery, gql } from "@apollo/client";

const REPOSITORY_QUERY2 = gql`
query Avances {
    Avances {
      _id
      descripcion
      fecha
      creadoPor {
        _id
        apellido
        email
      }
      proyecto {
        _id
        nombre
      }
  
    }
  }
`;

function Repository2() {
    
    const {data, error, loading} = useQuery(REPOSITORY_QUERY2);

    if(error) return <div>error... lo siento</div>;
    if(loading || !data) return <div>cargando.... paciencia</div>;

    // return <pre>{JSON.stringify(data, null, 2)}</pre>;
    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>          
      </div>
  );
}

export {Repository2}