import * as cds from "@sap/cds";
import { Authenticator } from "../src/services/Authenticator";
import { AuthenticationDataServiceMock } from "../test/AuthenticationDataServiceMock";

module.exports = async function AuthenticationService() {
  this.after("READ", "CustomerAuthenticationData", (each: { geburtstag: string }) => {
    console.log("Entity read");
  });

  this.on("authenticate", async (request: cds.Request) => {
    const customerAuthData = request.data.customerData;

    const authenticationDataService = new AuthenticationDataServiceMock();
    const authenticator = new Authenticator(authenticationDataService);

    try {
      return authenticator.authenticate(customerAuthData);
    } catch (validation_error) {
      const error = request.error({
        code: "499",
        message: validation_error.message,
      });
      request.reject(error);
    }
  });
};
