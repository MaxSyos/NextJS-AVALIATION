import { AuthenticationParams } from "../useCases/Authentication";
import faker from "faker"

export const MockAuthentication = (): AuthenticationParams => ({
    email: faker.internet.email(), 
    passaword: faker.internet.password() 
});