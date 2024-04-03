import { authenticate } from "#cds-models/AuthenticationService";
import { CustomerAuthenticationData } from "../../@cds-models/voicebot/typescript";
import * as cds from "@sap/cds";

export interface IAuthenticationDataService {
  get_existing_auth_informations_for_businesspartner(kundennummer: string): Promise<CustomerAuthenticationData>;
  get_authentication_data_for_businesspartner(kundennummer: string): Promise<CustomerAuthenticationData>;
}

export class AuthenticationDataService implements IAuthenticationDataService {

  async get_existing_auth_informations_for_businesspartner(kundennummer: string): Promise<CustomerAuthenticationData> {
    const authProviderService = await cds.connect.to("authprovider");
    console.log('get_existing_auth_informations_for_businesspartner was called')
    console.log(authProviderService);
    console.log('KUNDENNUMMER', kundennummer)
    const reponse = await authProviderService.post("get_auth_infos", { kundennummer });
    console.log(reponse);
    return reponse;
  }

  async get_authentication_data_for_businesspartner(kundennummer: string): Promise<CustomerAuthenticationData> {

    const authProviderService = await cds.connect.to("authprovider");
    console.log('get_existing_auth_informations_for_businesspartner was called', kundennummer)

    const srv = await cds.connect.to("authprovider");
    const { AuthProvider } = require('#cds-models/authprovider');
    console.log(AuthProvider)
    const test = await srv.run(SELECT.from(AuthProvider));
    console.log('get_authentication_data_for_businesspartner was called');
    console.log(test)
    return await srv.run(SELECT.from(AuthProvider));
  }
}
