import { HttPostClient } from "../../protocols/http/Http-post-client";
import { RemoteAuthentication } from "./Remote-authentication";

describe('Remoteauthentication', () => {

    test('Should call HttpPostClient with corret URL ', async () => {
        class HttpPostClientSpy implements HttPostClient {
            url?: string

            async post (url: string): Promise<void>{
                this.url = url
                return Promise.resolve()
            }

        }
        const url = 'any-url'
        const httpPostClientSpy = new HttpPostClientSpy()
        const sut =  new RemoteAuthentication(url, httpPostClientSpy)
        await sut.auth()
        expect(httpPostClientSpy.url).toBe(url)
    });
});