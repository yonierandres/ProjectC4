import React, { useEffect } from "react";
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

    useEffect(() => {
      console.log('data servidor: ', data);      
    }, [data]);

    if(error) return <div>error... lo siento</div>;
    if(loading || !data) return <div>cargando.... paciencia-bis</div>;

    // return <pre>{JSON.stringify(data, null, 2)}</pre>;

    

    return (
        <div>
            <h4>Data server: </h4>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            {/* <pre>{JSON.stringify(data, null, 2)}</pre>     
            <h2>data: { data.Usuarios }</h2>             */}
            <table className="tabla">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Correo</th>
                  <th>Estado</th>
                  <th>Rol</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.Usuarios.map((u)=> {
                    return (
                      <tr key={u._id}>
                        <td>{u.nombre}</td>
                        <td>{u.apellido}</td>
                        <td>{u.email}</td>
                        <td>{u.estado}</td>
                        <td>{u.rol}</td>                        
                      </tr>
                    )
                  })

                }
              </tbody>
            </table>
        </div>        
    );
}

export {Repository3}