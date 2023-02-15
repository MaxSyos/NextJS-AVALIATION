import { HttpResponse } from "./Http-response"

export type HttPostParams = {
    url: string
    body?: object
}

export interface HttPostClient {
    post (params: HttPostParams): Promise<HttpResponse>
}
