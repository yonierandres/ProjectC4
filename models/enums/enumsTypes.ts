import { gql } from "apollo-server-express";

const typeEnums = gql`

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

  enum Enum_EstadoInscripcion {
    ACEPTADA
    RECHAZADA
    PENDIENTE
  }
`;

export { typeEnums };
