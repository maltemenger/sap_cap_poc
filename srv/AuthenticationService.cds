using { voicebot.typescript as voicebot } from '../db/schema';

// service AuthenticationService @(requires: 'authenticated-user') {
service AuthenticationService {

@readonly
  entity CustomerAuthenticationData as projection on voicebot.CustomerAuthenticationData 
  action authenticate(customerData: CustomerAuthenticationData) returns Boolean
}