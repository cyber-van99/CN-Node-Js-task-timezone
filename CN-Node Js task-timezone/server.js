const express = require("express");
const app = express();
const indexRouter = require("./app/routes/index")
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res, next)=>{
  res.send('App is running and use "/api" to use other routes')
});

//Route Prefixes
app.use("/api/", indexRouter);

// throw 404 if URL not found
app.all("*", function(req, res) {
	res.send("Page not found");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}.`);
});