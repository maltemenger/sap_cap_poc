// This is an automatically generated file. Please do not change its contents manually!
import * as _Service_for_namespace_cds_y_auth_provider_anonymous from './anonymous';
import * as __ from './../../../../_';
import * as _Service_for_namespace_cds_y_auth_provider_types from './../cds_y_auth_provider_types';
export default { name: 'Service.for.namespace.cds_y_auth_provider' }
// action
export declare const AuthProvider: { (_top: number | null, _skip: number | null, _filter: string | null, _inlinecount: "allpages" | "none", _orderby: Array<_Service_for_namespace_cds_y_auth_provider_anonymous.type0>, _select: Array<_Service_for_namespace_cds_y_auth_provider_anonymous.type1>): {
    d?: {
    ___count?: _Service_for_namespace_cds_y_auth_provider_types.count | null,
    results?: Array<_Service_for_namespace_cds_y_auth_provider_types.cds_y_auth_provider_AuthProviderType>,
  } | null;
} | null, __parameters: {_top: number | null, _skip: number | null, _filter: string | null, _inlinecount: "allpages" | "none", _orderby: Array<_Service_for_namespace_cds_y_auth_provider_anonymous.type0>, _select: Array<_Service_for_namespace_cds_y_auth_provider_anonymous.type1>}, __returns: {
    d?: {
    ___count?: _Service_for_namespace_cds_y_auth_provider_types.count | null,
    results?: Array<_Service_for_namespace_cds_y_auth_provider_types.cds_y_auth_provider_AuthProviderType>,
  } | null;
} | null };
// action
export declare const AuthProvider_Geschaeftspartner_____Vertragskonto_____: { (Geschaeftspartner: string | null, Vertragskonto: string | null, _select: Array<_Service_for_namespace_cds_y_auth_provider_anonymous.type2>): {
    d?: _Service_for_namespace_cds_y_auth_provider_types.cds_y_auth_provider_AuthProviderType | null;
} | null, __parameters: {Geschaeftspartner: string | null, Vertragskonto: string | null, _select: Array<_Service_for_namespace_cds_y_auth_provider_anonymous.type2>}, __returns: {
    d?: _Service_for_namespace_cds_y_auth_provider_types.cds_y_auth_provider_AuthProviderType | null;
} | null };
// function
export declare const authenticate_post: { (body: {
    geburtsdatum?: string | null;
    businesspartner?: string | null;
    kundenkonto?: string | null;
    bankverbindung?: string | null;
    zaehlernummer?: string | null;
} | null): {
    d?: _Service_for_namespace_cds_y_auth_provider_types.cds_y_auth_provider_YA_BUSINESSPARTNER_AUTH | null;
} | null, __parameters: {body: {
    geburtsdatum?: string | null;
    businesspartner?: string | null;
    kundenkonto?: string | null;
    bankverbindung?: string | null;
    zaehlernummer?: string | null;
} | null}, __returns: {
    d?: _Service_for_namespace_cds_y_auth_provider_types.cds_y_auth_provider_YA_BUSINESSPARTNER_AUTH | null;
} | null };
// function
export declare const get_auth_infos_post: { (body: {
    kundennummer?: string | null;
} | null): {
    d?: _Service_for_namespace_cds_y_auth_provider_types.cds_y_auth_provider_YA_EXISTING_AUTH_DATA | null;
} | null, __parameters: {body: {
    kundennummer?: string | null;
} | null}, __returns: {
    d?: _Service_for_namespace_cds_y_auth_provider_types.cds_y_auth_provider_YA_EXISTING_AUTH_DATA | null;
} | null };
// function
export declare const _batch_post: { (): {} | null, __parameters: {}, __returns: {} | null };