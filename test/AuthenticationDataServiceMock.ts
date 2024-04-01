import { CustomerAuthenticationData } from "../@cds-models/voicebot/typescript";
import { IAuthenticationDataService } from "../src/services/AuthenticationDataService";

export class AuthenticationDataServiceMock implements IAuthenticationDataService{

    get_authentication_data_for_businesspartner( kundennummer: string ): CustomerAuthenticationData  {
        return { 
            geburtstag: '123',
            iban: 'iban', 
            kundenkonto: 'kundenkonto1',
            kundennummer: 'kundennummer1',
            zaehlernummer: 'zaehlernummer1' 
           };
    }

    get_existing_auth_informations_for_businesspartner( kundennummer: string ): CustomerAuthenticationData {
        return { 
            geburtstag: '123',
            iban: 'iban', 
            kundenkonto: 'kundenkonto1',
            kundennummer: 'kundennummer1',
            zaehlernummer: 'zaehlernummer1' 
           };
    }


}
