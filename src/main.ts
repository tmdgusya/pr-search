import express from 'express';
import {CODE_SQUAD, PR_TITLE,} from "./title";

const app = express();

function init() {
  app.listen(() => {
    console.log(CODE_SQUAD)
    console.log(PR_TITLE)
  })
}

init();