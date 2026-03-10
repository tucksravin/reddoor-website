export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt","waterColorBg.jpg","waterColorBgRed.jpg"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.CP6IiCpv.js",app:"_app/immutable/entry/app.CRZ3VVPK.js",imports:["_app/immutable/entry/start.CP6IiCpv.js","_app/immutable/chunks/Dp71AjJq.js","_app/immutable/chunks/C5HbiXfb.js","_app/immutable/chunks/B2-s-9Jg.js","_app/immutable/entry/app.CRZ3VVPK.js","_app/immutable/chunks/C5HbiXfb.js","_app/immutable/chunks/8d0pKEXo.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js'))
		],
		routes: [
			{
				id: "/[[preview=preview]]/about",
				pattern: /^(?:\/([^/]+))?\/about\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/api/preview",
				pattern: /^\/api\/preview\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/preview/_server.ts.js'))
			},
			{
				id: "/[[preview=preview]]/contact",
				pattern: /^(?:\/([^/]+))?\/contact\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]/portfolio",
				pattern: /^(?:\/([^/]+))?\/portfolio\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]/portfolio/[uid]",
				pattern: /^(?:\/([^/]+))?\/portfolio\/([^/]+?)\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true},{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,3,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]/showcase",
				pattern: /^(?:\/([^/]+))?\/showcase\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]/showcase/[uid]",
				pattern: /^(?:\/([^/]+))?\/showcase\/([^/]+?)\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true},{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,4,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/slice-simulator",
				pattern: /^\/slice-simulator\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]/twenty-for-twenty",
				pattern: /^(?:\/([^/]+))?\/twenty-for-twenty\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]",
				pattern: /^(?:\/([^/]+))?\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]/[uid]",
				pattern: /^(?:\/([^/]+))?\/([^/]+?)\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true},{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,2,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			const { match: preview } = await import ('./entries/matchers/preview.js')
			return { preview };
		},
		server_assets: {"_app/immutable/assets/printedReddoor.D_mIa69U.png":64413,"_app/immutable/assets/20_4_20_key_art.CS5OQWar.jpg":304911}
	}
}
})();
