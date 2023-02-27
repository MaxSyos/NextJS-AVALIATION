import { HttpPostClientSpy } from "../../test/Mock-http-client";
import { RemoteAuthentication } from "./Remote-authentication";
import faker from "faker"
import { MockAuthentication } from "../../../domains/test/Mock-authentication";
import { InvalidCredentialError } from "@/domains/errors/Invalid-credentiral-error";
import { HttpStastusCode } from "@/data/protocols/http/Http-response";
import { UnespectedError } from "@/domains/errors/Unexpected-error";
import { AuthenticationParams } from "@/domains/useCases/Authentication";
import { AccountModel } from "@/domains/models/Acount-models";

type SutTypes = {
    sut: RemoteAuthentication,
    httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>
}

const makeSut = (url: string = faker.internet.url() ): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy<AuthenticationParams, AccountModel>()
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

    test('Should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
        const { sut, httpPostClientSpy } = makeSut()
        httpPostClientSpy.response = {
            statusCode: HttpStastusCode.unathorized
        }
        const promise = sut.auth(MockAuthentication())
        await expect(promise).rejects.toThrow(new InvalidCredentialError())
    });

    test('Should throw UnespectedError if HttpPostClient returns 400', async () => {
        const { sut, httpPostClientSpy } = makeSut()
        httpPostClientSpy.response = {
            statusCode: HttpStastusCode.badRquest
        }
        const promise = sut.auth(MockAuthentication())
        await expect(promise).rejects.toThrow(new UnespectedError())
    });

    test('Should throw UnespectedError if HttpPostClient returns 500', async () => {
        const { sut, httpPostClientSpy } = makeSut()
        httpPostClientSpy.response = {
            statusCode: HttpStastusCode.serverError
        }
        const promise = sut.auth(MockAuthentication())
        await expect(promise).rejects.toThrow(new UnespectedError())
    });

    test('Should throw UnespectedError if HttpPostClient returns 404', async () => {
        const { sut, httpPostClientSpy } = makeSut()
        httpPostClientSpy.response = {
            statusCode: HttpStastusCode.notFound
        }
        const promise = sut.auth(MockAuthentication())
        await expect(promise).rejects.toThrow(new UnespectedError())
    });
});