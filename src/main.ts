import express, { Request, Response, NextFunction } from 'express';
import {CODE_SQUAD} from "./title";

const app = express();

function init() {
  app.listen(() => {
    console.log(CODE_SQUAD)
  })
}

init();