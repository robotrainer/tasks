const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Настраиваем возможность принимать от клиента данные в формате JSON
app.use(bodyParser.json());

// обрабатываем запрос стартовой страницы. app.get - настраивает запросы на получение на данных
app.get("/", (req, res) => {
    // читаем файл index.html
    const html = fs
        .readFileSync(path.join(__dirname, "assets/index.html"))
        .toString();

    // говорим, что ответом будет документ в формате html
    res.setHeader("Content-Type", "text/html");

    // отсылаем документ клиенту
    res.end(html);
});

app.get("/get-todos", (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json')));
  res.setHeader("Content-Type", "application/json");
  res.send(data);
});

app.use("/", express.static(path.join(__dirname,"assets")));

// запускаем сервер на 3000 порту
app.listen(3000, () => {
    console.log("http://localhost:3000/");
});