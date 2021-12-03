const resolvers = {
  Query: {
    usuario: async (parent, args) => {
      const usuarios = [
        {
          nombre: "Daniel",
        },
        {
          nombre: "John",
        },
        {
          nombre: "Ruben",
        },
      ];

      return usuarios;
    },
  },
};

export { resolvers };
