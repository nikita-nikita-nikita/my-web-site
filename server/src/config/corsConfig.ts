import originalCors from "cors";
import env from "../env";

const whitelist = env.app.corsWhitelist;

const cors = originalCors({
    origin(origin, callback){
        if(whitelist.indexOf(origin) !== -1) callback(null, true);
        else callback(new Error("Wrong domain"), false);
    },
    methods:["GET", "POST", "PUT", "DELETE", "PATCH"]
});

export default cors;
