import jwt from "jsonwebtoken";
import { secret, expiresIn } from '../config/jwtConfig';

export const createToken = (data:any) => jwt.sign(data, secret, { expiresIn });
