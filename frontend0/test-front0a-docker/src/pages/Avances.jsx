import React from 'react';
import { ApolloProvider } from "@apollo/client";
import client from '../Usuarios/client';
import { Repository2 } from '../Repository/Repository2';

const Avances = () => {
    return (
        <div>
            <h2>Pagina Dos</h2>
            <form action= "/" method = "get">                
                <input type="submit" value="Regresar" />
            </form>
            <ApolloProvider client={client}>
                <Repository2 />
            </ApolloProvider>                  
        </div>
    )
}

export default Avances;
