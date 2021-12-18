import React from 'react';
import { Repository } from '../Repository/Repository';
import { ApolloProvider } from "@apollo/client";
import client from '../Usuarios/client';



const Usuarios = () => {
    return (
        <div>
            <h2>Pagina primera</h2>
            <form action= "/" method = "get">                
                <input type="submit" value="Regresar" />
            </form>
            <ApolloProvider client={client}>
                <Repository />
            </ApolloProvider>      
                  
        </div>
    )
}

export default Usuarios;
