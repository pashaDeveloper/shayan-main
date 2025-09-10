import Ghasedak from "ghasedaksms";

const apiKey = process.env.GHASEDAK_API_KEY || "d8842a0df3ce0233326ba77ee6b9fe98cd6c8b74c8f90cffaa371b8ba92876d2Gcwmt4RrUAu9EXK3";
const line = "30005088";
console.log("API Key:", apiKey);

let ghasedak = new Ghasedak(apiKey);
console.log("ghasedak:", ghasedak);

export { ghasedak, line };
