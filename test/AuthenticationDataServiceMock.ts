import { CustomerAuthenticationData } from "../@cds-models/voicebot/typescript";
import { IAuthenticationDataService } from "../src/services/AuthenticationDataService";

export class AuthenticationDataServiceMock implements IAuthenticationDataService {
  async get_authentication_data_for_businesspartner(kundennummer: string): Promise<CustomerAuthenticationData> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          geburtstag: "123",
          iban: "iban",
          kundenkonto: "kundenkonto1",
          kundennummer: "kundennummer1",
          zaehlernummer: "zaehlernummer1",
        });
      }, 1);
    });
  }

  async get_existing_auth_informations_for_businesspartner(kundennummer: string): Promise<CustomerAuthenticationData> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          geburtstag: "123",
          iban: "iban",
          kundenkonto: "kundenkonto1",
          kundennummer: "kundennummer1",
          zaehlernummer: "zaehlernummer1",
        });
      }, 1);
    });
  }
}
