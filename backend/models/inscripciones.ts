import { Schema, model } from "mongoose";
import { Enum_EstadoInscripcion } from "./enums";
import { projectModel } from "./project";
import { userModel } from "./user";

interface Inscription{
    fechaIngreso: Date,
    fechaEgreso: Date,
    proyecto: Schema.Types.ObjectId,
    estudiante: Schema.Types.ObjectId,
    estado: Enum_EstadoInscripcion,

}

const inscriptionSchema = new Schema<Inscription>({
    fechaIngreso: {
        required: true,
        type: Date,
    },
    fechaEgreso: {
        required: true,
        type: Date,
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: projectModel,
        required: true,
    },
    estudiante: [{
        type: Schema.Types.ObjectId,
        ref: userModel,
        required: true,
    }],
    estado: {
        type: String,
        enum: Enum_EstadoInscripcion,
        required: true,
    }
})

const inscriptionModel = model('inscripcion', inscriptionSchema);

export { inscriptionModel };