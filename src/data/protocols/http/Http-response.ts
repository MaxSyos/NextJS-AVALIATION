export enum HttpStastusCode {
    noContent = 204,
    unathorized = 401

}

export type HttpResponse = {
    statusCode: HttpStastusCode 
    body?: any
}