import { gql } from "apollo-server-express";

const typeInscripciones = gql`
  type Inscripcion {
    _id: ID!
    estado: Enum_EstadoInscripcion!
    fechaIngreso: Date
    fechaEgreso: Date
    proyecto: Proyecto!
    estudiante: usuario!
  }

    type Query{
        Inscripciones: [Inscripcion]
}
    type Mutation {
        crearInscripcion(
            estado: Enum_EstadoInscripcion!
            fechaIngreso: Date
            proyecto: String!
            estudiante: String!
        ):Inscripcion

        aprobarInscripcion(
          id: String!
        ): Inscripcion
}
`;
export { typeInscripciones };
