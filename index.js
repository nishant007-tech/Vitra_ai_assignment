const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    fs.readFile("./people.json", "utf-8", (err, jsonString) => {
        if (err) {
            console.log("Error reading file from disk:", err);
            return;
        }
        try {
            const peopleData = JSON.parse(jsonString);
            res.status(200).send(peopleData);
        } catch (err) {
            console.log("Error parsing JSON string:", err);
        }
    })
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});