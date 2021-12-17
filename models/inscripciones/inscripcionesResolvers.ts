import { Enum_EstadoInscripcion } from "../enums/enums";
import { inscriptionModel } from "./inscripciones";

const resolversInscripciones = {
  Query: {
    Inscripciones: async (parent, args) => {
      const inscripciones = await inscriptionModel
        .find()
        .populate("estudiante")
        .populate("proyecto");
      return inscripciones;
    },
  },

  Mutation: {
    crearInscripcion: async (parent, args) => {
      const inscripcionCreada = await inscriptionModel.create({
        fechaIngreso: args.fechaIngreso,
        estado: args.estado,
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return inscripcionCreada;
    },
    aprobarInscripcion: async (parent, args) => {
      const inscripcionAprobada = await inscriptionModel.findByIdAndUpdate(
        args.id,
        {
          estado: Enum_EstadoInscripcion.ACEPTADA,
          fechaIngreso: new Date(Date.now()),
        }
      );
      return inscripcionAprobada;
    },
  },
};
export { resolversInscripciones };
