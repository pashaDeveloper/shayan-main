import Ghasedak from "ghasedaksms";

const apiKey = process.env.GHASEDAK_API_KEY || "";
const lineNumber = "30005088"; 
const ghasedak = new Ghasedak(apiKey);

export { ghasedak, lineNumber };