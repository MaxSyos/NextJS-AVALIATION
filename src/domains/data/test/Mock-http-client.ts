import { HttPostClient, HttPostParams } from "../protocols/http/Http-post-client"

export class HttpPostClientSpy implements HttPostClient {
    url?: string

    async post (params: HttPostParams): Promise<void>{
        this.url = params.url
        return Promise.resolve()
    }
}