/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Repo_test } from '../Repository/Repo_test';
import { ApolloProvider } from "@apollo/client";
import client0 from '../Usuarios/client0';



const Test = () => {
    return (
        <div>
            <h2>Pagina Testing</h2>
            <form action= "/" method = "get">                
                <input type="submit" value="Regresar" />
            </form>
            <ApolloProvider client={client0}>
            <Repo_test name= "ProjectC4" owner= "yonierandres" />
            <Repo_test name= "ProyectoVentas" owner= "inghoro" />
            <Repo_test name= "apollo-client" owner= "apollographql" />
            </ApolloProvider>      
                  
        </div>
    );
}

export default Test;
