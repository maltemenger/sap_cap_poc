/* checksum : e39bd00f39547ad01e30236a727bfd0e */
@cds.external : true
@m.IsDefaultEntityContainer : 'true'
@sap.message.scope.supported : 'true'
@sap.supported.formats : 'atom json xlsx'
service authprovider {};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.content.version : '1'
@sap.label : 'Consumption View für Auth Provider'
entity authprovider.AuthProvider {
  @sap.display.format : 'UpperCase'
  @sap.label : 'Geschäftspartner'
  @sap.quickinfo : 'Geschäftspartnernummer'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  key Geschaeftspartner : String(10) not null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Vertragskonto'
  @sap.quickinfo : 'Vertragskontonummer'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  key Vertragskonto : String(12) not null;
  @sap.display.format : 'Date'
  @sap.label : 'Geburtsdatum'
  @sap.quickinfo : 'Geburtsdatum des Geschäftspartners'
  Geburtstag : Date;
  @sap.label : 'Wahrheitswert'
  @sap.quickinfo : 'Wahrheitswert: wahr/falsch'
  Vertragskonto_exists : Boolean;
  @sap.label : 'Wahrheitswert'
  @sap.quickinfo : 'Wahrheitswert: wahr/falsch'
  Birthday_exists : Boolean;
  @sap.label : 'Wahrheitswert'
  @sap.quickinfo : 'Wahrheitswert: wahr/falsch'
  Iban_exists : Boolean;
  @sap.display.format : 'UpperCase'
  @sap.label : 'IBAN'
  @sap.quickinfo : 'IBAN (International Bank Account Number)'
  IBAN : String(34);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Anlage'
  Anlage : String(10);
};

@cds.external : true
type authprovider.YA_BUSINESSPARTNER_AUTH {
  authenticated : String(10);
  @sap.label : 'Geschäftspartner'
  @sap.quickinfo : 'Geschäftspartnernummer'
  businesspartner : String(10);
  reason : String(100);
};

@cds.external : true
type authprovider.YA_EXISTING_AUTH_DATA {
  @sap.label : 'Wahrheitswert'
  @sap.quickinfo : 'Wahrheitswert: wahr/falsch'
  bankverbindung_exists : Boolean;
  @sap.label : 'Wahrheitswert'
  @sap.quickinfo : 'Wahrheitswert: wahr/falsch'
  businesspartner_exists : Boolean;
  @sap.label : 'Wahrheitswert'
  @sap.quickinfo : 'Wahrheitswert: wahr/falsch'
  geburtstag_exists : Boolean;
  @sap.label : 'Wahrheitswert'
  @sap.quickinfo : 'Wahrheitswert: wahr/falsch'
  kundenkonto_exists : Boolean;
  @sap.label : 'Wahrheitswert'
  @sap.quickinfo : 'Wahrheitswert: wahr/falsch'
  zaehlernummer_exists : Boolean;
};

@cds.external : true
action authprovider.authenticate(
  geburtsdatum : String(10),
  @sap.label : 'Geschäftspartner'
  businesspartner : String(10),
  @sap.label : 'Vertragskonto'
  kundenkonto : String(12),
  @sap.label : 'IBAN'
  bankverbindung : String(34),
  @sap.label : 'Serialnummer'
  zaehlernummer : String(18)
) returns authprovider.YA_BUSINESSPARTNER_AUTH;

@cds.external : true
action authprovider.get_auth_infos(
  @sap.label : 'Geschäftspartner'
  kundennummer : String(10)
) returns authprovider.YA_EXISTING_AUTH_DATA;

