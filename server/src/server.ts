import express from "express";
import passport from 'passport';
import authorizationMiddleware from "./api/middleware/authorizationMiddleware";
import errorHandlerMiddleware from "./api/middleware/errorHandlerMiddleware";
import whitelist from "./config/routesWhitelist";
import cors from "./config/corsConfig";
import routes from "./api/routes/index";
import env from "./env";
import "./config/fbConfig";
import "./config/passportConfig";

const app = express();
const port = env.app.port||8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);
app.use(passport.initialize());
app.use("/api/", authorizationMiddleware(whitelist));
routes(app);

app.use(errorHandlerMiddleware);

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
});
