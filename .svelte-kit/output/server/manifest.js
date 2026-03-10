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
		prerendered_routes: new Set(["/about","/about/__data.json","/contact","/contact/__data.json","/portfolio","/portfolio/__data.json","/showcase","/showcase/__data.json","/slice-simulator","/slice-simulator/__data.json","/twenty-for-twenty","/twenty-for-twenty/__data.json","/","/__data.json","/portfolio/progress-lighting","/portfolio/progress-lighting/__data.json","/portfolio/msot","/portfolio/msot/__data.json","/portfolio/crown-gold-exchange","/portfolio/crown-gold-exchange/__data.json","/portfolio/cxo-revolution","/portfolio/cxo-revolution/__data.json","/portfolio/hearts-and-minds","/portfolio/hearts-and-minds/__data.json","/portfolio/strategy-advantage-website","/portfolio/strategy-advantage-website/__data.json","/portfolio/strategy-advantage1","/portfolio/strategy-advantage1/__data.json","/portfolio/7600-broadway","/portfolio/7600-broadway/__data.json","/portfolio/erp-industrial","/portfolio/erp-industrial/__data.json","/portfolio/campbell-commercial","/portfolio/campbell-commercial/__data.json","/portfolio/richard-macdonald","/portfolio/richard-macdonald/__data.json","/portfolio/aura","/portfolio/aura/__data.json","/portfolio/beachfront-dentistry","/portfolio/beachfront-dentistry/__data.json","/portfolio/ceo-la","/portfolio/ceo-la/__data.json","/portfolio/la-county-counsel","/portfolio/la-county-counsel/__data.json","/portfolio/herbst-veterinary","/portfolio/herbst-veterinary/__data.json","/portfolio/st-james-episcopal-school","/portfolio/st-james-episcopal-school/__data.json","/portfolio/one-culver-branding","/portfolio/one-culver-branding/__data.json","/portfolio/summittrek","/portfolio/summittrek/__data.json","/portfolio/freedom-youth-foundation","/portfolio/freedom-youth-foundation/__data.json","/portfolio/worthe","/portfolio/worthe/__data.json","/portfolio/hbo-signage","/portfolio/hbo-signage/__data.json","/portfolio/scfai","/portfolio/scfai/__data.json","/portfolio/captivate","/portfolio/captivate/__data.json","/portfolio/gallery-sonder","/portfolio/gallery-sonder/__data.json","/portfolio/1-800-dentist","/portfolio/1-800-dentist/__data.json","/portfolio/lonehollow-ranch","/portfolio/lonehollow-ranch/__data.json","/portfolio/baseball-collab","/portfolio/baseball-collab/__data.json","/portfolio/animation-examples","/portfolio/animation-examples/__data.json","/portfolio/composition-hospitality","/portfolio/composition-hospitality/__data.json","/portfolio/pacific-luxury","/portfolio/pacific-luxury/__data.json","/portfolio/revogen","/portfolio/revogen/__data.json","/portfolio/la-county-channel","/portfolio/la-county-channel/__data.json","/portfolio/the-texas-organ-sharing-alliance","/portfolio/the-texas-organ-sharing-alliance/__data.json","/portfolio/trinity-law-school","/portfolio/trinity-law-school/__data.json","/portfolio/uppababy","/portfolio/uppababy/__data.json","/portfolio/alteryx","/portfolio/alteryx/__data.json","/portfolio/enzos","/portfolio/enzos/__data.json","/portfolio/boerne","/portfolio/boerne/__data.json","/portfolio/oprah-winfrey-network","/portfolio/oprah-winfrey-network/__data.json","/portfolio/young-life-connect","/portfolio/young-life-connect/__data.json","/portfolio/the-guild-collective","/portfolio/the-guild-collective/__data.json","/portfolio/life-technologies","/portfolio/life-technologies/__data.json","/portfolio/canvas-worldwide","/portfolio/canvas-worldwide/__data.json","/portfolio/infiniti","/portfolio/infiniti/__data.json","/portfolio/the-burbank-portfolio-covid-signage","/portfolio/the-burbank-portfolio-covid-signage/__data.json","/portfolio/toyota","/portfolio/toyota/__data.json","/portfolio/champion","/portfolio/champion/__data.json","/portfolio/ashland-skateboards","/portfolio/ashland-skateboards/__data.json","/portfolio/rm-sports","/portfolio/rm-sports/__data.json","/portfolio/blue-butterfly","/portfolio/blue-butterfly/__data.json","/showcase/cxo-visionaries-customer-stories-examples","/showcase/cxo-visionaries-customer-stories-examples/__data.json","/showcase/showcase-example","/showcase/showcase-example/__data.json","/showcase/custom-website-design-and-development","/showcase/custom-website-design-and-development/__data.json","/showcase/cre-branding-design","/showcase/cre-branding-design/__data.json","/showcase/very-nice-examples","/showcase/very-nice-examples/__data.json","/showcase/soq-examples","/showcase/soq-examples/__data.json","/showcase/suite-of-services-brand-design","/showcase/suite-of-services-brand-design/__data.json","/showcase/agency-collab","/showcase/agency-collab/__data.json","/home","/home/__data.json"]),
		matchers: async () => {
			const { match: preview } = await import ('./entries/matchers/preview.js')
			return { preview };
		},
		server_assets: {"_app/immutable/assets/printedReddoor.D_mIa69U.png":64413,"_app/immutable/assets/20_4_20_key_art.CS5OQWar.jpg":304911}
	}
}
})();
