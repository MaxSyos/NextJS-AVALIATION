export type HttPostParams {
    url: string
}

export interface HttPostClient {
    post (params: HttPostParams): Promise<void>
}
