import { HttpStastusCode, HttPostClient } from "@/data/protocols/http";
import { InvalidCredentialError, UnespectedError } from "@/domains/errors";
import { AccountModel } from "@/domains/models";
import { Authentication, AuthenticationParams } from "@/domains/useCases";

export class RemoteAuthentication implements Authentication {
    constructor(
        private readonly url: string,
        private readonly httpPostClient: HttPostClient<AuthenticationParams, AccountModel>
    ) {}

    async auth (params: AuthenticationParams): Promise<AccountModel> {
        const httpResponse = await this.httpPostClient.post({
            url : this.url,
            body : params
        })
        switch(httpResponse.statusCode) {
            case HttpStastusCode.ok: return httpResponse.body
            case HttpStastusCode.unauthorized: throw new InvalidCredentialError()
             default: throw new UnespectedError()
        }
    }
}