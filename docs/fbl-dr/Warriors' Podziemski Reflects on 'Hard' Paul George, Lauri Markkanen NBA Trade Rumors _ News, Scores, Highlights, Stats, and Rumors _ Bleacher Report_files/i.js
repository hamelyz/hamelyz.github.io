(function() { function bxBootstrap() {
	var re = /bot|crawl|slurp|spider|mediapartners|headlesschrome|snap-prefetch|remotasks|woorank|uptime\.com|facebookexternalhit|facebookcatalog/i;
	if (re.test(navigator.userAgent) || navigator.userAgent == '') {
		return;
	}

	if (!(window.bouncex&&bouncex.website)) {
		var pushedData = [];
		if(window.bouncex && bouncex.push && bouncex.length){
			pushedData = bouncex;
		}
		window.bouncex = {};
		bouncex.pushedData = pushedData;
		bouncex.website = {"id":3136,"name":"Bleacher Report","cookie_name":"bounceClientVisit3136","domain":"bleacherreport.com","ct":"fp_local_storage","ally":0,"ei":0,"tcjs":"","cjs":"/* enable.feature.PRESTRUCTURE_OPT_IN */\n/* enable.feature.GPP_COMPLIANCE_DISABLED */\n\n/* temp implementation for segment identify */\nbouncex.SHA256 = function(s) {\n    var chrsz = 8;\n    var hexcase = 0;\n\n    function safe_add(x, y) {\n        var lsw = (x & 0xFFFF) + (y & 0xFFFF);\n        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);\n        return (msw << 16) | (lsw & 0xFFFF);\n    }\n\n    function S(X, n) { return (X >>> n) | (X << (32 - n)); }\n    function R(X, n) { return (X >>> n); }\n    function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }\n    function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }\n    function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }\n    function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }\n    function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }\n    function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }\n\n    function core_sha256(m, l) {\n        var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);\n        var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);\n        var W = new Array(64);\n        var a, b, c, d, e, f, g, h, i, j;\n        var T1, T2;\n\n        m[l >> 5] |= 0x80 << (24 - l % 32);\n        m[((l + 64 >> 9) << 4) + 15] = l;\n\n        for (i = 0; i < m.length; i += 16) {\n            a = HASH[0];\n            b = HASH[1];\n            c = HASH[2];\n            d = HASH[3];\n            e = HASH[4];\n            f = HASH[5];\n            g = HASH[6];\n            h = HASH[7];\n\n            for (j = 0; j < 64; j++) {\n                if (j < 16) W[j] = m[j + i];\n                else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);\n\n                T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);\n                T2 = safe_add(Sigma0256(a), Maj(a, b, c));\n\n                h = g;\n                g = f;\n                f = e;\n                e = safe_add(d, T1);\n                d = c;\n                c = b;\n                b = a;\n                a = safe_add(T1, T2);\n            }\n\n            HASH[0] = safe_add(a, HASH[0]);\n            HASH[1] = safe_add(b, HASH[1]);\n            HASH[2] = safe_add(c, HASH[2]);\n            HASH[3] = safe_add(d, HASH[3]);\n            HASH[4] = safe_add(e, HASH[4]);\n            HASH[5] = safe_add(f, HASH[5]);\n            HASH[6] = safe_add(g, HASH[6]);\n            HASH[7] = safe_add(h, HASH[7]);\n        }\n        return HASH;\n    }\n\n    function str2binb(str) {\n        var bin = Array();\n        var mask = (1 << chrsz) - 1;\n        for (var i = 0; i < str.length * chrsz; i += chrsz) {\n            bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);\n        }\n        return bin;\n    }\n\n    function Utf8Encode(string) {\n        string = string.replace(/\\r\\n/g, '\\n');\n        var utftext = '';\n\n        for (var n = 0; n < string.length; n++) {\n\n            var c = string.charCodeAt(n);\n\n            if (c < 128) {\n                utftext += String.fromCharCode(c);\n            }\n            else if ((c > 127) && (c < 2048)) {\n                utftext += String.fromCharCode((c >> 6) | 192);\n                utftext += String.fromCharCode((c & 63) | 128);\n            }\n            else {\n                utftext += String.fromCharCode((c >> 12) | 224);\n                utftext += String.fromCharCode(((c >> 6) & 63) | 128);\n                utftext += String.fromCharCode((c & 63) | 128);\n            }\n\n        }\n\n        return utftext;\n    }\n\n    function binb2hex(binarray) {\n        var hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef';\n        var str = '';\n        for (var i = 0; i < binarray.length * 4; i++) {\n            str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +\n                hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);\n        }\n        return str;\n    }\n\n    s = Utf8Encode(s);\n    return binb2hex(core_sha256(str2binb(s), s.length * chrsz));\n};\n","force_https":false,"waypoints":false,"content_width":0,"gai":"","swids":"","sd":0,"ljq":"auto","campaign_id":0,"is_preview":false,"aco":{"first_party_limit":"3500","local_storage":"1"},"cmp":null,"burls":[],"ple":false,"fbe":true,"ffs":"","mas":2,"map":1,"gar":true,"ete":1,"ettm":true,"etjs":"","dge":false,"bxidLoadFirst":false,"pie":false,"cme":false,"gbi_enabled":1,"bpush":false,"pt":{"article":{"testmode":false,"val":[[{"activation":"current_page_url","prop":"contains","prop2":"","prop3":"","val":"/articles/"}]]},"category":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('.teamAvatar__name').length > 0;"}],[{"activation":"js","prop":"","prop2":"","prop3":"","val":"bouncex.utils.url.getCanonicalURL() !== 'https://bleacherreport.com/';"}],[{"activation":"current_page_url","prop":"not_contains","prop2":"","prop3":"","val":"/articles/"}],[{"activation":"current_page_url","prop":"not_contains","prop2":"","prop3":"","val":"/videos"}],[{"activation":"current_page_url","prop":"not_contains","prop2":"","prop3":"","val":"/post/"}]]},"gallery":{"testmode":false,"val":[[{"activation":"current_page_url","prop":"contains","prop2":"","prop3":"","val":"/videos"}]]},"home":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"bouncex.utils.url.getCanonicalURL() === 'https://bleacherreport.com/';"}]]}},"els":null,"vars":[{"name":"submitted_dailyam","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"submitted_betting","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"page_type","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"bouncex.website.pts;","trigger":"pageload"},{"name":"logged_in","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\n    if (jQuery('li.userMenu').text().indexOf('Account') > -1) {\n        return false;\n    }\n    return !!localStorage.getItem('br_registration') || (bouncex.getBounceCookie('br_user_type') || '').indexOf('Registered') > -1 || (jQuery('.sign-up').length === 0 && jQuery('a[href*=\"accounts/edit\"]').length > 0);\n})();","trigger":"pageload"},{"name":"ever_logged_in","polling":"all","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"bouncex.vars.logged_in || null;","trigger":"pageload"},{"name":"articles_remaining","polling":"none","persist":"no","page_types":[],"testmode":true,"default":"false","code":"null;","trigger":"pageload"},{"name":"modal_visible","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('.newsletterSubsModule.flyIn.show').length > 0;","trigger":"pageload"},{"name":"ad_visible","polling":"all","persist":"no","page_types":[],"testmode":true,"default":"false","code":"jQuery('.br-ad.loaded').length > 0;","trigger":"pageload"},{"name":"video_visible","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('.bmpui-ui-uicontainer.bmpui-player-state-playing, video[playsinline=true]:visible').length > 0;","trigger":"pageload"},{"name":"submitted_onsite","polling":"none","persist":"no","page_types":[],"testmode":true,"default":"false","code":"null;","trigger":"pageload"},{"name":"cookie_bar_present","polling":"none","persist":"no","page_types":[],"testmode":true,"default":"false","code":"null;","trigger":"pageload"},{"name":"article_name","polling":"all","persist":"no","page_types":["article"],"testmode":false,"default":"false","code":"jQuery('h1').text().trim();","trigger":"pageload"},{"name":"article_category","polling":"all","persist":"no","page_types":["article"],"testmode":false,"default":"false","code":"jQuery('ol.nr-breadcrumb__list .nr-breadcrumb__element:not(:contains(\"Home\")):first').text().trim();","trigger":"pageload"},{"name":"ecap_overlay_shown","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"hamburger_menu_visible","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('.drawer.-left.-open').length > 0;","trigger":"pageload"},{"name":"mobile_nav_visible","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"bouncex.state.mobile && jQuery('.drawer.-top:visible') && jQuery('.drawer.-top:visible').hasClass('-open');","trigger":"pageload"}],"dgu":"pixel.cdnwidget.com","dgp":false,"ba":{"enabled":0,"fbte":0},"biu":"assets.bounceexchange.com","bau":"api.bounceexchange.com","beu":"events.bouncex.net","ibx":{"tjs":"","cjs":"","miw":0,"mibcx":0,"te":0,"cart_rep":{"get":"","set":""},"ulpj":null,"cus":"","miw_exclude":"","enabled":0},"etjson":null,"osre":true,"osru":"osr.bounceexchange.com/v1/osr/items","checkDfp":false,"gamNetwork":"","spa":0,"spatm":1,"preinit_cjs":"","crs":{"integrations":null,"pageCount":null},"mat":1,"math":24,"cpnu":"coupons.bounceexchange.com","dfpcms":0,"sms":{"optm":"","eventSharing":false,"shqId":"","enabled":0},"pde":false,"fmc":["US"],"fme":true,"fmx":"","uid2":false,"sdk":{"android":{"enabled":false,"enabledVersions":[],"eventModifications":null},"ios":{"enabled":false,"enabledVersions":[],"eventModifications":null}},"onsite":{"enabled":1},"ads":{"enabled":0},"pubs":{"enabled":1},"websdk":{"enabled":0,"devMode":0},"ga4_property_id":"","ga4_measurement_id":"","tag_state_domain":"api.bounceexchange.com"}
;

		bouncex.tag = 'tag3';
		bouncex.$ = window.jQuery;
		bouncex.env = 'production';
		bouncex.restrictedTlds = {"casl":{"ca":1},"gdpr":{"ad":1,"al":1,"at":1,"ax":1,"ba":1,"be":1,"bg":1,"by":1,"xn--90ais":1,"ch":1,"cy":1,"cz":1,"de":1,"dk":1,"ee":1,"es":1,"eu":1,"fi":1,"fo":1,"fr":1,"uk":1,"gb":1,"gg":1,"gi":1,"gr":1,"hr":1,"hu":1,"ie":1,"im":1,"is":1,"it":1,"je":1,"li":1,"lt":1,"lu":1,"lv":1,"mc":1,"md":1,"me":1,"mk":1,"xn--d1al":1,"mt":1,"nl":1,"no":1,"pl":1,"pt":1,"ro":1,"rs":1,"xn--90a3ac":1,"ru":1,"su":1,"xn--p1ai":1,"se":1,"si":1,"sj":1,"sk":1,"sm":1,"ua":1,"xn--j1amh":1,"va":1,"tr":1}};
		bouncex.client = {
			supportsBrotli: 1
		};
		bouncex.assets = {"ads":"27166d3b6527a269bad237fea7e0ef3c","creativesBaseStyles":"a53944a2","gpsAuction":"bbb80866120d17013073bb6d284cbd6b","inbox":"75060a85c1a4aebcc6f779b9e84db722","onsite":"abbdf7a49be9b52b097917b7b527b262","sms":"e39203556bab2366e56296ce42e974a7","websdk":"04cde0014774b7eb597770595769aab1"};
		bouncex.push = function(pushData) {
			bouncex.pushedData.push(pushData);
		}

		var runtime = document.createElement('script');
		runtime.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/runtime_c81e76ee00d795b1eebf8d27949f8dc5.br.js');
		runtime.setAttribute('async', 'async');

		bouncex.initializeTag = function() {
			var script = document.createElement('script');
			script.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/main-v2_4b048f3d0cfb1030f90fec02949d8c38.br.js');
			script.setAttribute('async', 'async');
			document.body.appendChild(script);


			bouncex.initializeTag = function() {};
		};

		runtime.onload = bouncex.initializeTag;
		document.body.appendChild(runtime);

	}


}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", bxBootstrap);
} else {
	bxBootstrap();
}})();