import { HttPostClient } from "../protocols/http/Http-post-client"

export class HttpPostClientSpy implements HttPostClient {
    url?: string

    async post (url: string): Promise<void>{
        this.url = url
        return Promise.resolve()
    }
}