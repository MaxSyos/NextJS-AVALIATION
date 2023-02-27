import { HttPostClient, HttPostParams } from "../protocols/http/Http-post-client"
import { HttpResponse, HttpStastusCode } from "../protocols/http/Http-response"

export class HttpPostClientSpy<T, R> implements HttPostClient<T, R> {
    url?: string
    body?: T
    response: HttpResponse<R> = { 
       statusCode: HttpStastusCode.ok
     }

    async post (params: HttPostParams<T>): Promise<HttpResponse<R>>{
        this.url = params.url
        this.body = params.body
        return Promise.resolve(this.response)
    }
}