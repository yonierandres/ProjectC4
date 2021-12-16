import conectarDB from "./db/db";
import { userModel } from "./models/user";
import { Enum_rol } from "./models/enums"
import { projectModel } from "./models/project";
import { objetiveModel } from "./models/objetive";
import { SchemaTypes } from "mongoose";

const main = async () => {
  await conectarDB();

  // const proyecto1 = await proyectoModel.findOne({ _id: '61a61400495097cb194905ab'});
  // console.log("este es el proyecto que buscas", proyecto1);

  // const proyecto1 = await projectModel.find({ proyecto: '61a61400495097cb194905ab'}).populate('lider');
  // console.log("este es el proyecto que buscas", proyecto1);

  // const proyecto1 = await projectModel.findOne( lider = '61a613ff495097cb194905a8');
  // console.log("este es el proyecto que buscas", proyecto1);

  // const objetivos1 = await objetiveModel.find({ proyecto: '61a61400495097cb194905ab'});
  // console.log("este es el proyecto que buscas", objetivos1);

//-----------------------------------------------------------------------------------------------------------
// crear una coleccion de proyecto con la conexion entre la coleccion proyectos y usuario a traves de lider
  // proyectoModel.create({
  //   nombre: "proyecto1",
  //   presupuesto: 300,
  //   fechaInicio: Date.now(),
  //   fechaFin: new Date('2025/10/22'),
  //   lider: "61996f7b897e6803b4d79556",
  // });
//-----------------------------------------------------------------------------------------------------------
// hacer una consulta trayendo la informacion del proyecto y con la ayuda de populate la de lider desde user
// const proyecto = await proyectoModel.find({nombre: 'proyecto1'}).populate('lider');
// console.log("el proyecto es ", proyecto)



  // Otra manera de crear un usuario, en esta ocasion, la respuesta de la base de datos de
  // se almacena en la variable usuario
  // const usuario = await UserModel.create({
  //   apellidos: 'Nañez',
  //   email: 'yonier@nañez.com',
  //   identification: '1112780274',
  //   nombre: 'Yonier',
  //   rol: Enum_rol.estudiante,
  // });
  //-----------------------------------------------------------------------------------------------------------
  //crear un objeto en la coleccion
  // await UserModel.create({
  //   email: "user@example.com",
  //   identification: "12345678",
  //   nombre: "NombrePrueba",
  //   apellidos: "apellidosPrueba",
  // })
  //   .then((u) => {
  //     console.log("user created", u);
  //   })
  //   .catch((err) => {
  //     console.error("error creating user", err);
  //   });
  //-----------------------------------------------------------------------------------------------------------
  // await UserModel.create({
  //   email: "user@example.com",
  //   identification: "12345678",
  //   nombre: "NombrePrueba",
  //   apellidos: "apellidosPrueba",
  //   rol: Enum_rol.estudiante,
  // })
  //   .then((u) => {
  //     console.log("user created", u);
  //   })
  //   .catch((err) => {
  //     console.error("error creating user", err);
  //   });
//-----------------------------------------------------------------------------------------------------------
  //funcion para filtrar y cambiar un dato de un documento en alguna coleccion
  // await UserModel.findOneAndUpdate({
  //   email: "user@example.com",          //Busca un documento que contenga el email indicado
  // }, {
  //   nombre: "NombrePrueba",
  //    apellidos: "apellidosx"            // busca la propiedad nombre y la actualiza al valor indicado
  // });
//-----------------------------------------------------------------------------------------------------------
// Consulta unitaria

// await UserModel.findOne({
//   identification: "12335664"
// }).then((u) => {
//   console.log("usuario encontrado", u);
// }).catch((err) => {
//   console.error("error", err)
// });

// traer toodos los datos de la base de datos
  // await UserModel.find()
  //   .then((u) => {
  //     console.log("user found", u);
  //   })
  //   .catch((err) => {
  //     console.error("error finding user", err);
  //   });
};

main();
