import {Application} from "express";
import technologiesRoutes from "./technologiesRoutes";
import authRoutes from "./authRoutes";
import imageRoutes from "./imageRoutes";

export default (app: Application):void => {
    app.use("/api/technologies", technologiesRoutes);
    app.use("/api/auth", authRoutes);
    app.use("/api/img", imageRoutes);
}
