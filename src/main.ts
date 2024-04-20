import { Server } from "@overnightjs/core";
import { PlaygroundController } from "./controllers/Playground.controller";
import express from "express";

class LayerServer extends Server {
  constructor(protected portApp: number) {
    super();
    this.setupMiddlewares();
    this.setupControllers();
  }

  setupMiddlewares() {
    this.app.use(express.json());
  }
  setupControllers() {
    this.addControllers([new PlaygroundController()]);
  }
  startServer() {
    this.app.listen(this.portApp, () => {
      console.log(`Server: is running in port: ${this.portApp}`);
    });
  }
}

const server = new LayerServer(3100);
server.startServer();
