export class UnacceptableInputError extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, UnacceptableInputError);
    const baseMessage = 'The data given was not acceptable for this kind of input';

    if(this.message === '' || this.message === null)
      this.message = baseMessage;
 }
}