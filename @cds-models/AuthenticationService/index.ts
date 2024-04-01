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

// function
export declare const authenticate: { (customerData: CustomerAuthenticationData | null): boolean | null, __parameters: {customerData: CustomerAuthenticationData | null}, __returns: boolean | null };