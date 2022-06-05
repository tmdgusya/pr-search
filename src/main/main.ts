import express from 'express';
import {CODE_SQUAD, PR_TITLE,} from "./title";
import {Server,} from "typescript-rest";
import BodyParser from "body-parser"
import cookieParser from "cookie-parser";

const app: express.Application = express();

class IOCContainer {

  static async bindServer() {
    Server.buildServices(app)
  }

  static async resolveDependencies() {
    Server.loadServices(app, ['../main/controller/**/*.js', '../main/service/**/*.js',], __dirname)
  }

}

async function init() {

  app.use(cookieParser())
  app.use(BodyParser.json())
  app.use(BodyParser.urlencoded())

  await IOCContainer.resolveDependencies()
  await IOCContainer.bindServer()

  app.listen(3000, () => {
    console.log("BootStrap Sever!!")
  })
}

init().then(() => {
  console.log(CODE_SQUAD)
  console.log(PR_TITLE)
});