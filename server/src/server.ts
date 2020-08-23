import express from "express";
import passport from 'passport';
import authorizationMiddleware from "./api/middleware/authorizationMiddleware";
import whitelist from "./config/routesWhitelist";
import cors from "./config/corsConfig";
import routes from "./api/routes/index";
import "./config/fbConfig";



import env from "./env";
const app = express();
const port = env.app.port||8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);
routes(app);
// app.use(passport.initialize());


app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
});
