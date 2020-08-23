import bcrypt from 'bcrypt';

const saltRounds = 10;

export const encrypt = (data:string) => bcrypt.hash(data, saltRounds);

export const encryptSync = (data:string) => bcrypt.hashSync(data, saltRounds);

export const compare = (data:string, encrypted:string) => bcrypt.compare(data, encrypted);
