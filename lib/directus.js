import { Directus } from "@directus/sdk";

const directus = new Directus(process.env.DIRECTUS_API_URL);
console.log('helloo')
export default directus;