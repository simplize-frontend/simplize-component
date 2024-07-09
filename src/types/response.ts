export interface IResponse<T> {
  data: T
  message: string
  status: number
  total?: number
  meta?: {
    nextToken: string
  }
}
