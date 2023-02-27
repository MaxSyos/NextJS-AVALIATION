import { AuthenticationParams } from "../useCases";
import faker from "faker"
import { AccountModel } from "../models";

export const MockAuthentication = (): AuthenticationParams => ({
    email: faker.internet.email(), 
    passaword: faker.internet.password() 
});

export const MockAccountModel = (): AccountModel => ({
    accessToken: faker.random.uuid()
});