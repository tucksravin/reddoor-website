import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.BAIw50hG.js","_app/immutable/chunks/C5HbiXfb.js","_app/immutable/chunks/8d0pKEXo.js","_app/immutable/chunks/D0QH3NT1.js","_app/immutable/chunks/CA-r5jeO.js","_app/immutable/chunks/Dp71AjJq.js","_app/immutable/chunks/B2-s-9Jg.js","_app/immutable/chunks/CK1Ags9H.js","_app/immutable/chunks/DuYCUC4s.js","_app/immutable/chunks/BCJ65Txv.js","_app/immutable/chunks/B41gtHmx.js","_app/immutable/chunks/659YaCN9.js"];
export const stylesheets = ["_app/immutable/assets/0.BlyYKD1G.css"];
export const fonts = [];
