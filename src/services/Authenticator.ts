import { CustomerAuthenticationData } from "#cds-models/AuthenticationService";
import { IAuthenticationDataService } from "./AuthenticationDataService";

export class Authenticator {
  required_auth_infos = 3;
  authenticationDataService: IAuthenticationDataService;

  constructor(authenticationDataService: IAuthenticationDataService) {
    this.authenticationDataService = authenticationDataService;
  }

  async authenticate(customerAuthenticationData: CustomerAuthenticationData): Promise<Boolean> {
    const has_enough_data = is_enough_data_provided(customerAuthenticationData, this.required_auth_infos);
    if (!has_enough_data) {
      throw_not_enough_data_error(this.required_auth_infos);
    }

    const actualAuthenticationData = await this.authenticationDataService.get_authentication_data_for_businesspartner(
      customerAuthenticationData.kundennummer
    );

    return is_data_consistent(customerAuthenticationData, actualAuthenticationData);
  }
}

export function is_data_consistent(
  customerAuthenticationData: CustomerAuthenticationData,
  actualCustomerData: CustomerAuthenticationData
): Boolean {
  const is_consistent = Object.keys(customerAuthenticationData).every((key) => {
    const aKey = key as keyof CustomerAuthenticationData;
    return customerAuthenticationData[aKey] === null || customerAuthenticationData[aKey] === actualCustomerData[aKey];
  });

  return is_consistent;
}

export function is_enough_data_provided(
  customerAuthenticationData: CustomerAuthenticationData,
  required_auth_infos: number
): Boolean {
  return Object.values(customerAuthenticationData).filter((wert) => wert !== null).length >= required_auth_infos;
}

function throw_not_enough_data_error(required_data: number) {
  throw new Error(`Not enough customer data provided. Please provide at least ${required_data} informations.`);
}
