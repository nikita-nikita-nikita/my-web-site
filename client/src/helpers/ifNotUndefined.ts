const ifNotUndefined = <T = string>(toCheck:T|undefined|null, defaultValue:T):T => toCheck ? toCheck : defaultValue;

export default ifNotUndefined;
