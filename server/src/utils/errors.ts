/* eslint-disable max-classes-per-file */
export class UserTypeError extends Error {
  constructor(userType: string) {
    super(`User type <${userType}> not defined`)
  }
}

export class UserDatasError extends Error {
  constructor(missing?: string) {
    super(`Missing ${missing || 'data'}`)
  }
}
