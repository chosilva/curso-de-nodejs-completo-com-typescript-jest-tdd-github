import { NextFunction, Request, Response } from "express";

import UserFakeRepository from "src/repository/User.fake-repository";
import { isValidEmail } from "src/utils/isValidEmail";

export default function (req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;

    if (!isValidEmail(email)) {
      return res.status(400).json({
        err: "Formato de email inválido.",
      });
    }

    if (!password) {
      return res.status(404).json({
        err: "Falta preencher os dados do campo de senha.",
      });
    }

    if (
      email === UserFakeRepository.email &&
      password === UserFakeRepository.password
    ) {
      req.userDataRequest = {
        id: UserFakeRepository.id,
        email: UserFakeRepository.email,
      };
      next();
    }
    return {
      err: `Email e, ou password estão incorretos.`,
    };
  } catch (err) {
    return {
      err,
    };
  }
}
