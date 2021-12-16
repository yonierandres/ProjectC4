import { resolversUser } from "../models/users/userResolvers";
import { resolversProject } from "../models/projects/projectResolvers";
import { resolversAvances } from "../models/avances/avancesResolvers";

export const resolvers = [resolversUser, resolversProject, resolversAvances];
