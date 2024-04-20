declare namespace Express {
  interface Request {
    userDataRequest: {
      id: number | string;
      email: string;
    };
    tokenAuth: string;
  }
}
