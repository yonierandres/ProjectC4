import { gql } from "apollo-server-express";

const typeDefs = gql`
  enum Enum_EstadoUsuario {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }

  enum Enum_rol {
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
  }

  type usuario {
    _id: ID
    nombre: String! #el signo de admiracion indica que es requerido
    apellido: String!
    identificacion: String!
    email: String!
    estado: Enum_EstadoUsuario #
    rol: Enum_rol!
  }
  type Query {
    Usuarios: [usuario]
  }

  type Mutation {
    crearUsuario(
      nombre: String! #el signo de admiracion indica que es requerido
      apellido: String!
      identificacion: String!
      email: String!
      estado: Enum_EstadoUsuario
      rol: Enum_rol!
    ): usuario

    editarUsuario(
      _id: String! 
      nombre: String! 
      apellido: String
      identificacion: String
      email: String
      estado: Enum_EstadoUsuario
      rol: Enum_rol
    ): usuario

    eliminarUsuario(_id: String!, email: String, nombre: String): usuario
  }
`;

export { typeDefs };
