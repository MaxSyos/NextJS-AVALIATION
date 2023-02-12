import { HttpPostClientSpy } from "../../test/Mock-http-client";
import { RemoteAuthentication } from "./Remote-authentication";
import faker from "faker"
import { MockAuthentication } from "../../../domains/test/Mock-authentication";

type SutTypes = {
    sut: RemoteAuthentication,
    httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url() ): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut =  new RemoteAuthentication(url, httpPostClientSpy)
    return {
        sut,
        httpPostClientSpy
    }
}

describe('Remoteauthentication', () => {

    test('Should call HttpPostClient with corret URL ', async () => {
        const url = faker.internet.url()
        const { sut, httpPostClientSpy } = makeSut(url)
        await sut.auth(MockAuthentication())
        expect(httpPostClientSpy.url).toBe(url)
    });

    test('Should call HttpPostClient with corret bory ', async () => {
        const { sut, httpPostClientSpy } = makeSut()
        const authenticateParams = MockAuthentication()
        await sut.auth(authenticateParams)
        expect(httpPostClientSpy.body).toEqual(authenticateParams)
    });

});