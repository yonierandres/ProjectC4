import { gql } from "apollo-server-express";
import { typeProject } from "../models/projects/projectTypes"
import { typeUser } from "../models/users/userTypes"
import { typeEnums } from "../models/enums/enumsTypes"
import { typeAvances } from "../models/avances/avancesTypes"
import { typeInscripciones } from "../models/inscripciones/inscripcionesTypes"


const GlobalTypes = gql`
  scalar Date
`;

export const tipos = [GlobalTypes, typeEnums, typeProject, typeUser, typeEnums, typeAvances, typeInscripciones];
