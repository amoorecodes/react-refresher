import express from "express";
import React from "react";
import { renderToString, renderToNodeStream } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "../src/App";
import { render } from "react-dom";

const PORT = process.env.port || 3000;
const html = fs.readFileSync("dist/index.html").toString();

const parts = html.split("not rendered");

const app = express();

app.use("/dist", express.static("dist"));

app.use((req, res) => {
  res.write(parts[0]);
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );
  const stream = renderToNodeStream(reactMarkup) + parts[1];
  stream.on("end", () => {
    res.write(parts[1]);
    res.end();
  });
});

app.listen(PORT);
