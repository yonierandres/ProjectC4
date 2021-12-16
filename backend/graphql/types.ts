import { gql } from "apollo-server-express";

const typeDefs = gql`

  scalar Date

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

  enum Enum_EstadoProyecto {
    ACTIVO
    INACTIVO
  }

  enum Enum_FaseProyecto {
    INICIADO
    DESARROLLO
    TERMINADO
    NULA
  }

  enum Enum_TipoObjetivo {
    GENERAL
    ESPECIFICO
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

  type Objetivo {
    _id: ID
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  input crearObjetivo {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: usuario!
    objetivos: [Objetivo]
  }

  type Query {
    Usuarios: [usuario]
    Usuario(_id: String!): usuario
    Proyectos: [Proyecto]
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

    eliminarUsuario(
      _id: String!, 
      email: String, 
      nombre: String
      ): usuario

      crearProyecto(
        nombre: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        estado: Enum_EstadoProyecto!
        fase: Enum_FaseProyecto!
        lider: String!
        objetivos: [crearObjetivo]
      ): Proyecto
  }
`;

export { typeDefs };
