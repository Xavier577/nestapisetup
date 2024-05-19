export class ErrorResponse extends Error {
  constructor(
    public message: string,
    public statusCode: number,
    public data?: any,
  ) {
    super(message || 'Error');
    this.message = message || 'Error';
    this.statusCode = statusCode;
    this.data = data;
  }
}
