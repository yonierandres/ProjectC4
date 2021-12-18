import React from 'react';
import { ApolloProvider } from "@apollo/client";
import client from '../Usuarios/client';
import { Repository3 } from '../Repository/Repository3';
import '../styles/tabla.css';




const Usuarios2 = () => {
    return (
        <div>
            <h2>Usuarios</h2>
            <form action= "/" method = "get">                
                <input type="submit" value="Regresar" />
            </form>
            
            <ApolloProvider client={client}>
                <Repository3 />
            </ApolloProvider>      
                  
        </div>
    )
}

export default Usuarios2;
