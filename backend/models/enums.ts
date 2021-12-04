enum Enum_rol {
  ESTUDIANTE = "ESTUDIANTE",
  LIDER = "LIDER",
  ADMINISTRADOR = "ADMINISTRADOR",
}

enum Enum_EstadoUsuario {
  PENDIENTE = "PENDIENTE",
  AUTORIZADO = "AUTORIZADO",
  NO_AUTORIZADO = "NO_AUTORIZADO",
}

enum Enum_EstadoProyecto {
  activo = "Activo",
  inactivo = "Inactivo",
}

enum Enum_FaseProyecto {
  iniciado = "Iniciado",
  desarrollo = "Desarrollo",
  terminado = "Terminado",
  nula = "",
}

enum Enum_TipoObjetivo {
    general = "General",
    especifico = "Especifico",
}

enum Enum_EstadoInscripcion {
  aceptada = 'Aceptada',
  rechazada = 'Rechazada'
}

export {  Enum_rol, Enum_EstadoUsuario, 
          Enum_EstadoProyecto, 
          Enum_FaseProyecto, 
          Enum_TipoObjetivo,
          Enum_EstadoInscripcion 
        };
