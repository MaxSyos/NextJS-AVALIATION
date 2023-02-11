import { AccountModel } from "../models/Acount-models"

type AuthenticationParams = {
    email: string,
    passaword: string,
} 

export interface Authentication {
    auth(params: AuthenticationParams): Promise<AccountModel>
}