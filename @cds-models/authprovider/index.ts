// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_';
export default { name: 'authprovider' }
export function _AuthProviderAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class AuthProvider extends Base {
        Geschaeftspartner?: string;
        Vertragskonto?: string;
        Geburtstag?: string | null;
        Vertragskonto_exists?: boolean | null;
        Birthday_exists?: boolean | null;
        Iban_exists?: boolean | null;
        IBAN?: string | null;
        Anlage?: string | null;
      static actions: {
      }
  };
}
export class AuthProvider extends _AuthProviderAspect(__.Entity) {}
Object.defineProperty(AuthProvider, 'name', { value: 'authprovider.AuthProvider' })
export class AuthProvider_ extends Array<AuthProvider> {}
Object.defineProperty(AuthProvider_, 'name', { value: 'authprovider.AuthProvider' })

export function _YA_BUSINESSPARTNER_AUTHAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class YA_BUSINESSPARTNER_AUTH extends Base {
        authenticated?: string | null;
        businesspartner?: string | null;
        reason?: string | null;
      static actions: {
      }
  };
}
export class YA_BUSINESSPARTNER_AUTH extends _YA_BUSINESSPARTNER_AUTHAspect(__.Entity) {}
Object.defineProperty(YA_BUSINESSPARTNER_AUTH, 'name', { value: 'authprovider.YA_BUSINESSPARTNER_AUTH' })

export function _YA_EXISTING_AUTH_DATAAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class YA_EXISTING_AUTH_DATA extends Base {
        bankverbindung_exists?: boolean | null;
        businesspartner_exists?: boolean | null;
        geburtstag_exists?: boolean | null;
        kundenkonto_exists?: boolean | null;
        zaehlernummer_exists?: boolean | null;
      static actions: {
      }
  };
}
export class YA_EXISTING_AUTH_DATA extends _YA_EXISTING_AUTH_DATAAspect(__.Entity) {}
Object.defineProperty(YA_EXISTING_AUTH_DATA, 'name', { value: 'authprovider.YA_EXISTING_AUTH_DATA' })

// function
export declare const authenticate: { (geburtsdatum: string | null, businesspartner: string | null, kundenkonto: string | null, bankverbindung: string | null, zaehlernummer: string | null): YA_BUSINESSPARTNER_AUTH | null, __parameters: {geburtsdatum: string | null, businesspartner: string | null, kundenkonto: string | null, bankverbindung: string | null, zaehlernummer: string | null}, __returns: YA_BUSINESSPARTNER_AUTH | null };
// function
export declare const get_auth_infos: { (kundennummer: string | null): YA_EXISTING_AUTH_DATA | null, __parameters: {kundennummer: string | null}, __returns: YA_EXISTING_AUTH_DATA | null };