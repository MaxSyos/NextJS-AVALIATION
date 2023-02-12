import { HttPostClient } from "../../protocols/http/Http-post-client";

export class RemoteAuthentication {
    constructor(
        private readonly url: string,
        private readonly httpPostClient: HttPostClient
    ) {}

    async auth (): Promise<void> {
        await this.httpPostClient.post({ url : this.url })
    }
}