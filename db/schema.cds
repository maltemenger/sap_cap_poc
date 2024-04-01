// using { managed } from '@sap/cds/common';
namespace voicebot.typescript;

entity CustomerAuthenticationData {
  key kundennummer : String(111);
  kundenkonto  : localized String(111);
  geburtstag  : localized String(1111);
  iban : localized String(1111);
  zaehlernummer  : localized String(1111);
}



entity CustomerExistingAuthenticationData {
  kundennummer : Boolean;
  kundenkonto  : Boolean;
  geburtstag  : Boolean;
  iban : Boolean;
  zaehlernummer  : Boolean;
}
