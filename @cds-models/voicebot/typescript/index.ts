// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../../_';
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
Object.defineProperty(CustomerAuthenticationData, 'name', { value: 'voicebot.typescript.CustomerAuthenticationData' })
export class CustomerAuthenticationData_ extends Array<CustomerAuthenticationData> {}
Object.defineProperty(CustomerAuthenticationData_, 'name', { value: 'voicebot.typescript.CustomerAuthenticationData' })

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
Object.defineProperty(CustomerExistingAuthenticationData, 'name', { value: 'voicebot.typescript.CustomerExistingAuthenticationData' })
export class CustomerExistingAuthenticationData_ extends Array<CustomerExistingAuthenticationData> {}
Object.defineProperty(CustomerExistingAuthenticationData_, 'name', { value: 'voicebot.typescript.CustomerExistingAuthenticationData' })
