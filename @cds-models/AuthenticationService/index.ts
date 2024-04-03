// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_';
export default { name: 'AuthenticationService' }
export function _CustomerAuthenticationDataAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CustomerAuthenticationData extends Base {
        kundennummer?: string;
        kundenkonto?: string | null;
        geburtstag?: string | null;
        iban?: string | null;
        zaehlernummer?: string | null;
      static actions: {
      }
  };
}
export class CustomerAuthenticationData extends _CustomerAuthenticationDataAspect(__.Entity) {}
Object.defineProperty(CustomerAuthenticationData, 'name', { value: 'AuthenticationService.CustomerAuthenticationData' })
export class CustomerAuthenticationData_ extends Array<CustomerAuthenticationData> {}
Object.defineProperty(CustomerAuthenticationData_, 'name', { value: 'AuthenticationService.CustomerAuthenticationData' })

export function _CustomerExistingAuthenticationDataAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CustomerExistingAuthenticationData extends Base {
        kundennummer?: boolean | null;
        kundenkonto?: boolean | null;
        geburtstag?: boolean | null;
        iban?: boolean | null;
        zaehlernummer?: boolean | null;
      static actions: {
      }
  };
}
export class CustomerExistingAuthenticationData extends _CustomerExistingAuthenticationDataAspect(__.Entity) {}
Object.defineProperty(CustomerExistingAuthenticationData, 'name', { value: 'AuthenticationService.CustomerExistingAuthenticationData' })
export class CustomerExistingAuthenticationData_ extends Array<CustomerExistingAuthenticationData> {}
Object.defineProperty(CustomerExistingAuthenticationData_, 'name', { value: 'AuthenticationService.CustomerExistingAuthenticationData' })

// function
export declare const authenticate: { (customerData: CustomerAuthenticationData | null): boolean | null, __parameters: {customerData: CustomerAuthenticationData | null}, __returns: boolean | null };
// function
export declare const get_auth_infos: { (businesspartner: string | null): {} | null, __parameters: {businesspartner: string | null}, __returns: {} | null };