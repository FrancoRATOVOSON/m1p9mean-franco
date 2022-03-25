/* eslint-disable max-classes-per-file */
export class UserTypeError extends Error {
  constructor() {
    super('User type not defined')
  }
}

export class UserDatasError extends Error {
  constructor(missing?: string) {
    super(`Missing ${missing || 'data'}`)
  }
}
