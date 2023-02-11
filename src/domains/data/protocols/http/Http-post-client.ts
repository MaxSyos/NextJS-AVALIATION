export interface HttPostClient {
    post (url: string): Promise<void>
}
