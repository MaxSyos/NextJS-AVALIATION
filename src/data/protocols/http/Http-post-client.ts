import { HttpResponse } from "./Http-response"

export type HttPostParams<T> = {
    url: string
    body?: T
}

export interface HttPostClient<T, R> {
    post (params: HttPostParams<T>): Promise<HttpResponse<R>>
}
