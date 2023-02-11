import { HttpPostClientSpy } from "../../test/Mock-http-client";
import { RemoteAuthentication } from "./Remote-authentication";

type SutTypes = {
    sut: RemoteAuthentication,
    httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = 'any-url'): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut =  new RemoteAuthentication(url, httpPostClientSpy)
    return {
        sut,
        httpPostClientSpy
    }
}

describe('Remoteauthentication', () => {

    test('Should call HttpPostClient with corret URL ', async () => {
        const url = 'other_url'
        const { sut, httpPostClientSpy } = makeSut(url)
        await sut.auth()
        expect(httpPostClientSpy.url).toBe(url)
    });
});