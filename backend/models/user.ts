import { Schema, model } from "mongoose";
import { Enum_rol, Enum_EstadoUsuario } from "./enums"

// Ayuda a ralizar una validación de los tipos, esto es gracias a typescript
interface User {
    email: string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: Enum_rol;
    estado: Enum_EstadoUsuario;
}
// es el esquema o maqueta para construir la colección
const userSchema = new Schema<User>({
    email: { 
        type: String,
        required: true,
        unique: true,
        validate: {
            validator:(email) => {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                },
                message: 'el formato del correo no es el adecuado',
            },  
        },
    identificacion: { 
        type: String, 
        required: true,
        unique: true
    },
    nombre: { 
        type: String, 
        required:true 
    },
    apellido: { 
        type: String, 
        required:true
    },
    rol:{
        type: String, 
        required:true,
        enum: Enum_rol,
    },
    estado:{
        type: String, 
        enum: Enum_EstadoUsuario,
        default: Enum_EstadoUsuario.PENDIENTE,
    }
    

});
//se genera el modelo que usa la maqueta definida en las lineas anteriores, es con esta herramienta que se realizan los querys
const userModel = model('User', userSchema);

export { userModel };