export const ValidateEnv = () : boolean => {
    if(!process.env.MONGO_URI) {
        console.warn("MONGO_URI must be defined");
        return false;
    }

    if(!process.env.BOT_TOKEN) {
        console.warn("BOT_TOKEN must be defined");
        return false;
    }

    return true;
}