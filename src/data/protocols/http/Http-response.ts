export enum HttpStastusCode {
    ok = 200,
    noContent = 204,
    badRquest = 400,
    unauthorized = 401,
    notFound = 404,
    serverError = 500,
}

export type HttpResponse<T> = {
    statusCode: HttpStastusCode 
    body?: T
}