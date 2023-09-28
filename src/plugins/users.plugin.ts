import { User } from "../interfaces/interface";
import { getAgePlugin } from "./get-age.plugin";
import { genUUID } from "./get-uuid.plugin";


export const createUser = ( name: string, birthdate: string ): User => {

    return {
        id: genUUID(),
        name: name,
        birthdate: getAgePlugin(birthdate),
    }
}