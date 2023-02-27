import { HttpStastusCode } from "@/data/protocols/http/Http-response";
import { InvalidCredentialError } from "@/domains/errors/Invalid-credentiral-error";
import { UnespectedError } from "@/domains/errors/Unexpected-error";
import { AccountModel } from "@/domains/models/Acount-models";
import { AuthenticationParams } from "@/domains/useCases/Authentication";
import { HttPostClient } from "../../protocols/http/Http-post-client";

export class RemoteAuthentication {
    constructor(
        private readonly url: string,
        private readonly httpPostClient: HttPostClient<AuthenticationParams, AccountModel>
    ) {}

    async auth (params: AuthenticationParams): Promise<void> {
        const httpResponse = await this.httpPostClient.post({
            url : this.url,
            body : params
        })
        switch(httpResponse.statusCode) {
            case HttpStastusCode.ok: break
            case HttpStastusCode.unathorized: throw new InvalidCredentialError()
             default: throw new UnespectedError()
        }
    }
}