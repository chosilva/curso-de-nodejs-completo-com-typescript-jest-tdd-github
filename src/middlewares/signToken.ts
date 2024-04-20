import { NextFunction, Request, Response } from "express";
import { sign } from "jsonwebtoken";
import configurations from "src/utils/apiConfig";
import { isValidEmail } from "src/utils/isValidEmail";

export default function signToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { email, password } = req.body;

    if (!isValidEmail(email)) {
      return res.status(400).json({
        err: "Formato de email inválido.",
      });
    }

    if (!password) {
      return res.status(400).json({
        err: "A senha não foi fornecida.",
      });
    }

    const tokenAuth = sign(
      {
        id: req.userDataRequest.id,
        email: req.userDataRequest.email,
        role: "client",
      },
      configurations.jwtSecretKey,
      { expiresIn: "24h" }
    );
    req.tokenAuth = tokenAuth;

    next();
    return;
  } catch (err) {
    return res.status(500).json({ err: "Erro interno do servidor." });
  }
}
