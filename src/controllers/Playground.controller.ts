import { Controller, Middleware, Post } from "@overnightjs/core";
import { Request, Response } from "express";
import entryMiddleware from "src/middlewares/entry";
import signToken from "src/middlewares/signToken";

@Controller("playground")
export class PlaygroundController {
  logger() {
    console.log(`Logando`);
  }

  @Post("indexando")
  @Middleware([entryMiddleware, signToken])
  index(req: Request, res: Response) {
    try {
      console.log(req.userDataRequest);
      console.log(req.tokenAuth);
      return res.json(req.body);
    } catch (err) {
      console.log("Error: ");
      return;
    }
  }
}
