import { projectModel } from "./project";

const resolversProject = {
  Query: {
    Proyectos: async (parent, args) => {
      const proyectos = await projectModel.find().populate("lider").populate('avances').populate('inscripciones');
      return proyectos;
    },
  },

  Mutation: {
    crearProyecto: async (parent, args) => {
      const proyectoCreado = await projectModel.create({
        nombre: args.nombre,
        estado: args.estado,
        fase: args.fase,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        lider: args.lider,
        presupuesto: args.presupuesto,
        objetivos: args.objetivos,
      });
      return proyectoCreado.populate("lider");
    },
  },
};

export { resolversProject };
