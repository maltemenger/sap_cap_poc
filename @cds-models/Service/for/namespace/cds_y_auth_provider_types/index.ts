// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../../../../_';
export type count = string;
export function _cds_y_auth_provider_AuthProviderTypeAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class cds_y_auth_provider_AuthProviderType extends Base {
        Geschaeftspartner?: string | null;
        Vertragskonto?: string | null;
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
export class cds_y_auth_provider_AuthProviderType extends _cds_y_auth_provider_AuthProviderTypeAspect(__.Entity) {}
Object.defineProperty(cds_y_auth_provider_AuthProviderType, 'name', { value: 'Service.for.namespace.cds_y_auth_provider_types.cds_y_auth_provider_AuthProviderType' })

export function _cds_y_auth_provider_YA_BUSINESSPARTNER_AUTHAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class cds_y_auth_provider_YA_BUSINESSPARTNER_AUTH extends Base {
        authenticated?: string | null;
        businesspartner?: string | null;
        reason?: string | null;
      static actions: {
      }
  };
}
export class cds_y_auth_provider_YA_BUSINESSPARTNER_AUTH extends _cds_y_auth_provider_YA_BUSINESSPARTNER_AUTHAspect(__.Entity) {}
Object.defineProperty(cds_y_auth_provider_YA_BUSINESSPARTNER_AUTH, 'name', { value: 'Service.for.namespace.cds_y_auth_provider_types.cds_y_auth_provider_YA_BUSINESSPARTNER_AUTH' })

export function _cds_y_auth_provider_YA_EXISTING_AUTH_DATAAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class cds_y_auth_provider_YA_EXISTING_AUTH_DATA extends Base {
        bankverbindung_exists?: boolean | null;
        businesspartner_exists?: boolean | null;
        geburtstag_exists?: boolean | null;
        kundenkonto_exists?: boolean | null;
        zaehlernummer_exists?: boolean | null;
      static actions: {
      }
  };
}
export class cds_y_auth_provider_YA_EXISTING_AUTH_DATA extends _cds_y_auth_provider_YA_EXISTING_AUTH_DATAAspect(__.Entity) {}
Object.defineProperty(cds_y_auth_provider_YA_EXISTING_AUTH_DATA, 'name', { value: 'Service.for.namespace.cds_y_auth_provider_types.cds_y_auth_provider_YA_EXISTING_AUTH_DATA' })

export function _errorAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class error extends Base {
        error?: {
      code?: string | null,
      message?: {
        lang?: string | null,
        value?: string | null,
      } | null,
      innererror?: {
      } | null,
    } | null;
      static actions: {
      }
  };
}
export class error extends _errorAspect(__.Entity) {}
Object.defineProperty(error, 'name', { value: 'Service.for.namespace.cds_y_auth_provider_types.error' })
