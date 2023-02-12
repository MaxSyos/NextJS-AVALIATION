import { HttPostClient, HttPostParams } from "../protocols/http/Http-post-client"

export class HttpPostClientSpy implements HttPostClient {
    url?: string
    body?: object

    async post (params: HttPostParams): Promise<void>{
        this.url = params.url
        this.body = params.body
        return Promise.resolve()
    }
}