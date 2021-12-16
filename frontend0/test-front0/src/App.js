import './App.css';
import HolaMundo from './components/HolaMundo';
import { ApolloProvider } from "@apollo/client";
import client from './Usuarios/client';
import {Repository} from './Repository/Repository';


function App() {
  return (
    <div>
      <HolaMundo />      
    <ApolloProvider client={client}>
      <Repository name= "ProjectC4" owner= "yonierandres" />
      <Repository name= "ProyectoVentas" owner= "inghoro" />
      <Repository name= "apollo-client" owner= "apollographql" />
    </ApolloProvider>
    </div>
  );
}

export default App;
