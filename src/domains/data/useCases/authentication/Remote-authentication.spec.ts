import { HttpPostClientSpy } from "../../test/Mock-http-client";
import { RemoteAuthentication } from "./Remote-authentication";

describe('Remoteauthentication', () => {

    test('Should call HttpPostClient with corret URL ', async () => {

        const url = 'any-url'
        const httpPostClientSpy = new HttpPostClientSpy()
        const sut =  new RemoteAuthentication(url, httpPostClientSpy)
        await sut.auth()
        expect(httpPostClientSpy.url).toBe(url)
    });
});