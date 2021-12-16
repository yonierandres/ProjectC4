import { userModel } from "./user";

const resolversUser = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = await userModel.find();
      return usuarios;
    },
    Usuario: async (parent, args) => {
      const usuario = await userModel.findOne({_id: args._id})
      return usuario;
    },
  },

  Mutation: {
    crearUsuario: async (parent, args) => {
      const usuarioCreado = await userModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        email: args.email,
        rol: args.rol,
      });
      if (Object.keys(args).includes("estado")) {
        usuarioCreado.estado = args.esta;
      }
      return usuarioCreado;
    },

    editarUsuario: async (parent, args) => {
      const usuarioEditado = await userModel.findByIdAndUpdate(args._id, {
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        email: args.email,
        rol: args.rol,
        estado: args.estado,
      });
    },

    eliminarUsuario: async (parent, args) => {
      if (Object.keys(args).includes("_id")) {
        const usuarioEliminado = await userModel.findOneAndDelete({
          _id: args._id,
        });
        return usuarioEliminado;
      } else if (Object.keys(args).includes("email")) {
        const usuarioEliminado = await userModel.findOneAndDelete({
          email: args.email,
        });
        return usuarioEliminado;
      } else if (Object.keys(args).includes("nombre")) {
        const usuarioEliminado = await userModel.findOneAndDelete({
          nombre: args.nombre,
        });
        return usuarioEliminado;
      }
    },
  },
};

export { resolversUser };
