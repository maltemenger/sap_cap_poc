using {voicebot.typescript as voicebot} from '../db/schema';

// service AuthenticationService @(requires: 'authenticated-user') {
service AuthenticationService {

  @readonly
  entity CustomerAuthenticationData         as projection on voicebot.CustomerAuthenticationData
  entity CustomerExistingAuthenticationData as projection on voicebot.CustomerExistingAuthenticationData
  action authenticate(customerData : CustomerAuthenticationData) returns Boolean;
  action get_auth_infos(businesspartner : String ) returns Boolean
}
