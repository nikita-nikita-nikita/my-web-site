import {Application} from "express";
import technologiesRoutes from "./technologiesRoutes";
import authRoutes from "./authRoutes";

export default (app: Application):void => {
    app.use("/api/technologies", technologiesRoutes);
    app.use("/api/auth", authRoutes);
}
