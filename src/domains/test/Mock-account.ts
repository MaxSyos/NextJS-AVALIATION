import { AuthenticationParams } from "../useCases/Authentication";
import faker from "faker"
import { AccountModel } from "../models/Acount-models";

export const MockAuthentication = (): AuthenticationParams => ({
    email: faker.internet.email(), 
    passaword: faker.internet.password() 
});

export const MockAccountModel = (): AccountModel => ({
    accessToken: faker.random.uuid()
});