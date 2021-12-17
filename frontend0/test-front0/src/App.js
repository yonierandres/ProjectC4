import './App.css';
import HolaMundo from './components/HolaMundo';
import { ApolloProvider } from "@apollo/client";
import client from './Usuarios/client';
import {Repository} from './Repository/Repository';
import {Repository2} from './Repository/Repository2';


function App() {
  return (
    <div>
      <HolaMundo />      
    <ApolloProvider client={client}>
      {/* <Repository name= "ProjectC4" owner= "yonierandres" />
      <Repository name= "ProyectoVentas" owner= "inghoro" />
      <Repository name= "apollo-client" owner= "apollographql" /> */}
      <Repository />
      <Repository2 />
    </ApolloProvider>
    </div>
  );
}

export default App;
