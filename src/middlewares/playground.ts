import jwt, { JwtPayload } from "jsonwebtoken";
import configurations from "src/utils/apiConfig";

export interface TokenPayload {
  permission: JwtPayload;
  email: string;
}
const id = 1;
const email = "riktest@test.com";
const secret = configurations.jwtSecretKey;

const verifyToken = (token: string) => {
  if (!token) {
    return {
      message: "Token não fornecido",
    };
  }

  return jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return { message: "Falha na autenticação do token" };
    }
    return decoded;
  });
};

const reSubscribe = (token: string) => {
  if (!token) {
    return {
      message: "Token não fornecido",
    };
  }
  return jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return { message: "Falha na autenticação, faça login novamente." };
    }
    return decoded;
  });
};

const signToken = () => {
  const payload = { id, email };
  const token = jwt.sign(payload, secret, {
    expiresIn: "2h",
  });
  return token;
};

const token = String(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNzExNTM1OTc0LCJleHAiOjE3MTE2MjIzNzR9.LstzaLA5oJ_FcbA43AWduov-5WKcqdj4kAREddZn2jQ"
);

type RequestWithJWT = {
  token: string;
  authentication: string;
  resource: string;
};
const request: RequestWithJWT = {
  token: token,
  authentication: "user",
  resource: "create",
};

const caseRequest = (request: RequestWithJWT) => {
  if (!request.token) {
    return { message: "Falha na autenticação, faça login novamente." };
  }
  const verification = verifyToken(token);
  return verification;
};

const valid = caseRequest({
  authentication: "user",
  resource: "create",
  token,
});

console.log(valid);
