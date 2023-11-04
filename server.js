const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        data: {
            name: "Nodeapp"
        }
    })
});

app.get("/Student", (req, res) => {
    res.status(200).json({
        data: {
            name: "Student"
        }
    })
});


app.listen(5000, () => {});
