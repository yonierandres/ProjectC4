import { Schema, model } from "mongoose";
import { projectModel } from "../projects/project";
import { userModel } from "../users/user";

interface Avance{
    fecha: Date,
    proyecto: Schema.Types.ObjectId,
    descripcion: string,
    observaciones: [string]
    creadoPor: Schema.Types.ObjectId,

}

const advancementSchema = new Schema<Avance>({
    fecha: {
        required: true,
        type: Date,
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: projectModel,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    observaciones: [{
        type: String,
    }],
    creadoPor: {
        type: Schema.Types.ObjectId,
        ref: userModel,
        required: true,
    }
})

const advancementModel = model('avance', advancementSchema);

export { advancementModel}