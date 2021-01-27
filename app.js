const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.set('view engine', 'html');
ejs = require('ejs')
app.engine('.html', ejs.renderFile);
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

const users = []

app.get("/views/login.ejs", function (req, res) {
    res.render("login.ejs");
});

app.get("/views/register.ejs", function (req, res) {
    res.render("register.ejs");
});

app.post("/login", async function (req, res) {
    const user = req.body.name;
    console.log(users);
    if (users.length == 0) {
        return res.status(500).send("Incearca din nou");
    }
    try {
        for (var i = 0; i < users.length; i++) {
            if (await bcrypt.compare(req.body.password, users[i].password) && users[i].email === req.body.email) {
                res.redirect("/index.html");
            }
            else {
                res.send("Incearca din nou");
            }
        }
    }
    catch {
        res.status(500).send();
    }
});

app.get("/logout", function(req, res) {
    req.session.destroy();
    res.redirect("/views/login.ejs");
});

app.post("/register", async function (req, res) {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        res.redirect("/views/login.ejs");
    }
    catch {
        res.redirect("/views/register.ejs")
    }
    console.log(users);
});

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/404.html");
});

app.listen(3000, function (req, res) {
    console.log("server has started");
});
