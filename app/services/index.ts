import {
  NotAuthorizedError,
  NotFoundError,
  NotAcceptableError,
  sql,
  DbPool,
  SqlResult,
} from '@elements/application';

export async function getHelloWorld(): Promise<string> {
  return 'Hello, world.';
}

export async function login(email: string, password: string) {
  this.session.login(email);
}
