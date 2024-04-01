import { CustomerAuthenticationData } from "../../@cds-models/voicebot/typescript";

export interface IAuthenticationDataService {
    get_existing_auth_informations_for_businesspartner(kundennummer: string): CustomerAuthenticationData
    get_authentication_data_for_businesspartner(kundennummer: string): CustomerAuthenticationData
}



export class AuthenticationDataService implements IAuthenticationDataService {
    
    get_existing_auth_informations_for_businesspartner(kundennummer: string): CustomerAuthenticationData {
        throw new Error("Method not implemented.");
    }
    get_authentication_data_for_businesspartner(kundennummer: string): CustomerAuthenticationData {
        throw new Error("Method not implemented.");
    }

}


