import { CustomerAuthenticationData } from "../../@cds-models/voicebot/typescript";
import * as cds from "@sap/cds";

export interface IAuthenticationDataService {
  get_existing_auth_informations_for_businesspartner(kundennummer: string): Promise<CustomerAuthenticationData>;
  get_authentication_data_for_businesspartner(kundennummer: string): Promise<CustomerAuthenticationData>;
}

export class AuthenticationDataService implements IAuthenticationDataService {
  async get_existing_auth_informations_for_businesspartner(kundennummer: string): Promise<CustomerAuthenticationData> {
    const srv = await cds.connect.to("AuthProvider");
    const { AuthProvider } = srv.entities;
    return await srv.run(SELECT.from(AuthProvider));
  }

  async get_authentication_data_for_businesspartner(kundennummer: string): Promise<CustomerAuthenticationData> {
    const srv = await cds.connect.to("AuthProvider");
    const { AuthProvider } = srv.entities;
    return await srv.run(SELECT.from(AuthProvider));
  }
}
