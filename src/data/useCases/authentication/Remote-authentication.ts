import { AuthenticationParams } from "@/domains/useCases/Authentication";
import { HttPostClient } from "../../protocols/http/Http-post-client";

export class RemoteAuthentication {
    constructor(
        private readonly url: string,
        private readonly httpPostClient: HttPostClient
    ) {}

    async auth (params: AuthenticationParams): Promise<void> {
        await this.httpPostClient.post({
            url : this.url,
            body : params
        })
    }
}