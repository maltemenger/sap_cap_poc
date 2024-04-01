import { describe, expect, test } from "@jest/globals";
import { Authenticator, is_data_consistent, is_enough_data_provided } from "../src/services/Authenticator";
import { CustomerAuthenticationData } from "../@cds-models/voicebot/typescript";
import { AuthenticationDataServiceMock } from "./AuthenticationDataServiceMock";

const customerAuthenticationData: CustomerAuthenticationData = {
  geburtstag: "123",
  iban: "iban",
  kundenkonto: "kundenkonto1",
  kundennummer: "kundennummer1",
  zaehlernummer: "zaehlernummer1",
};

describe("test authentication", () => {
  test("is data consistent", () => {
    // arrange
    const expected = false;

    const actualAuthenticationData: CustomerAuthenticationData = {
      geburtstag: "123",
      iban: "iban",
      kundenkonto: "kundenkonto2",
      kundennummer: "kundennummer2",
      zaehlernummer: "zaehlernummer2",
    };

    // act
    const actual = is_data_consistent(customerAuthenticationData, actualAuthenticationData);

    // assert
    expect(actual).toBe(expected);
  });

  test("is enough data provided", () => {
    // arrange
    const expected = true;
    const needed_pieces_of_data = 3;

    // act
    const actual = is_enough_data_provided(customerAuthenticationData, needed_pieces_of_data);

    // assert
    expect(actual).toBe(expected);
  });

  test("not enough data provided", () => {
    // arrange
    const expected = false;
    const needed_pieces_of_data = 3;

    const missingAuthenticationData: CustomerAuthenticationData = {
      geburtstag: "123",
      iban: null,
      kundenkonto: null,
      kundennummer: "kundennummer_1",
      zaehlernummer: null,
    };

    // act
    const actual = is_enough_data_provided(missingAuthenticationData, needed_pieces_of_data);

    // assert
    expect(actual).toBe(expected);
  });

  test("should throw not enough data error", async () => {
    // arrange
    const expected = `Not enough customer data provided. Please provide at least 3 informations.`;
    const needed_pieces_of_data = 3;
    var actual = "";

    const missingAuthenticationData: CustomerAuthenticationData = {
      geburtstag: "123",
      iban: null,
      kundenkonto: null,
      kundennummer: "kundennummer_1",
      zaehlernummer: null,
    };

    const authenticationDataService = new AuthenticationDataServiceMock();
    const authenticator = new Authenticator(authenticationDataService);

    // act
    try {
      await authenticator.authenticate(missingAuthenticationData);
    } catch (error) {
      actual = error.message;
    }

    // assert
    expect(actual).toBe(expected);
  });

  test("data os consistent", () => {
    // arrange
    const expected = true;

    // act
    const actual = is_data_consistent(customerAuthenticationData, customerAuthenticationData);

    // assert
    expect(actual).toBe(expected);
  });

  test("data is not consistent", () => {
    // arrange
    const expected = false;

    const customerAuthenticationData1: CustomerAuthenticationData = {
      geburtstag: "123",
      iban: "iban",
      kundenkonto: "kundenkonto1",
      kundennummer: "kundennummer1",
      zaehlernummer: "zaehlernummer1",
    };

    const customerAuthenticationData2: CustomerAuthenticationData = {
      geburtstag: "IS_DIFFERENT",
      iban: "iban",
      kundenkonto: "kundenkonto1",
      kundennummer: "kundennummer1",
      zaehlernummer: "zaehlernummer1",
    };

    // act
    const actual = is_data_consistent(customerAuthenticationData1, customerAuthenticationData2);

    // assert
    expect(actual).toBe(expected);
  });

  test("should be authenticated", async () => {
    // arrange
    const expected = true;

    const customerAuthenticationData1: CustomerAuthenticationData = {
      geburtstag: "123",
      iban: "iban",
      kundenkonto: "kundenkonto1",
      kundennummer: "kundennummer1",
      zaehlernummer: "zaehlernummer1",
    };

    const authenticationDataService = new AuthenticationDataServiceMock();
    const authenticator = new Authenticator(authenticationDataService);

    // act
    const actual = await authenticator.authenticate(customerAuthenticationData);

    // assert
    expect(actual).toBe(expected);
  });

  test("should not be authenticated", async () => {
    // arrange
    const expected = false;

    const customerAuthenticationData1: CustomerAuthenticationData = {
      geburtstag: "SOMETHING_ELSE",
      iban: "iban",
      kundenkonto: "kundenkonto1",
      kundennummer: "kundennummer1",
      zaehlernummer: "zaehlernummer1",
    };

    const authenticationDataService = new AuthenticationDataServiceMock();
    const authenticator = new Authenticator(authenticationDataService);

    // act
    const actual = await authenticator.authenticate(customerAuthenticationData1);

    // assert
    expect(actual).toBe(expected);
  });
});
