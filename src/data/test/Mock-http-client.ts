import { HttPostClient, HttPostParams } from "../protocols/http/Http-post-client"
import { HttpResponse, HttpStastusCode } from "../protocols/http/Http-response"

export class HttpPostClientSpy implements HttPostClient {
    url?: string
    body?: object
    response: HttpResponse = { 
       statusCode: HttpStastusCode.ok
     }

    async post (params: HttPostParams): Promise<HttpResponse>{
        this.url = params.url
        this.body = params.body
        return Promise.resolve(this.response)
    }
}