//Required packages
const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config()

//Routers
const articleRouter = require("./routes/articles");
const adminRouter = require("./routes/admin");
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const composeRouter = require("./routes/compose");

//Mongoose models
const Article = require('./models/article');
const User = require('./models/user');
const { patch } = require('./routes/articles');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

app.use(session({
    secret: 'Our little secret.',
    resave: false,
    saveUninitialized: false
}));

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use('/uploads', express.static('uploads'));

mongoose.connect(process.env.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});;

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/post', articleRouter);
app.use('/admin', adminRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/compose', composeRouter);

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USEREMAIL,
        pass:  process.env.PASSWORD
    },
});

app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.post('/mail', async (req, res) => {
    // send mail with defined transport object
    let mailOptions = {
        from: req.body.name, // sender address
        to: process.env.USEREMAIL, // list of receivers
        subject: req.body.email, // Subject line
        text: req.body.message, // plain text body
        html: req.body.message, // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }

    });
});

app.route("/delete")

    .post((req, res) => {
        const clickedArticle = req.body.delete;
        Article.findByIdAndRemove(clickedArticle, function (err) {
            if (!err) {
                res.redirect("/admin?page=1");
            }
        });
    });

app.route("/edit")
    .post(async (req, res) => {
        const clickEdit = req.body.edit;
        console.log(clickEdit)
        await Article.findOne({ _id: clickEdit }, function (err, article) {
            console.log(article);
            if (!err) {
                res.render("edit", {
                    id: clickEdit,
                    name: article.name,
                    postcontent: article.postcontent
                });
            } else {
                console.log(err);
            }
        });
    });

app.post("/edit/:id", async (req, res) => {

    let article = new Article({
        name: req.body.namebeg,
        postcontent: req.body.beg,
        description: req.body.desk
    });

    try {
        article = await article.save();
        res.redirect('/admin?page=1');
    } catch (err) {
        console.log(err);
        res.render("articles/compose", {
            article: article
        });
    }

});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
