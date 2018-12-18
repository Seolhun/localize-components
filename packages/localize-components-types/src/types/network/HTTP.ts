export interface HttpResponse<T> {
  hasError: boolean;
  message: string;
  statusCode: number;
  payload: T;
}

export enum HttpMethods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch',
}

export enum HttpStages {
  DEV = 'dev.',
  PROD = '',
  STAGE = 'stage.',
}
