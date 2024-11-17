(function() {
    
var script = document.getElementById("celtra-script-1");
if (!script || script.tagName.toLowerCase() !== 'script')
    throw 'Element with id equal to scriptId does not exist or is not a script.';
  
    var runtimeParams = {"tagVersion":"html-universal-10","deviceInfo":{"deviceType":"Desktop","primaryHardwareType":"desktop","mobileDevice":false,"osName":"OSX","osVersion":"10.15.7","platform":"DesktopPlatform","platformVersion":null,"browserName":"Chrome","browserVersion":"130.0.0.0","browserRenderingEngine":"WebKit","vendor":"Apple","model":null},"weather":{"windy":"0","currentCondition":"sunny","apparentTemperature":16.0,"temperature":16.7,"windSpeed":3,"cloudCoverage":0,"conditions":[{"name":"sunny","weight":1}]},"ipCountryCode":"US","ipRegionCode":null,"ipPrincipalSubdivisionCode":"NY","ipCityGeonameId":"5128581","ipCity":"New York","ipPostalCode":"10029","ipLat":40.7961,"ipLng":-73.9513,"accountId":"1635c534","folderId":"53cb168a","placementId":"e88cd877","supplierId":null,"sessionId":"s1731880163x52f7d060ca39c4x27802890","purpose":"live","secure":1,"clientTimestamp":"1731880005.060","clientTimeZoneOffsetInMinutes":300,"clientIp":"74.66.83.0","gpsLat":null,"gpsLng":null,"language":"en","acceptLanguage":"en-US,en;q=0.9","platformAdvId":null,"platformAdvIdTrackingLimited":null,"userIdentifiers":{},"variantChoices":{},"neustarSegment":null,"authBasis":"1731880163417,27e0b5bc,e88cd877","authToken":"eba12d50f6c68372b19516ded668f1c1","customAudiences":{},"derivedAudiences":{},"destinationDefinitions":[{"campaignId":null,"placementId":"e88cd877","creativeId":null,"eventName":"urlOpened","reportLabel":"Main CTA","destinationUrl":"https://ad.doubleclick.net/ddm/trackclk/N2115732.3073485DBM_ESPN_US/B32832588.407764719;dc_trk_aid=599388438;dc_trk_cid=224394793;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1","destination":{"url":"https://ad.doubleclick.net/ddm/trackclk/N2115732.3073485DBM_ESPN_US/B32832588.407764719;dc_trk_aid=599388438;dc_trk_cid=224394793;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1","clazz":"Fixed"},"impressionUrl":null}],"dynamicContent":[],"moatCustomAttributes":{},"admarvel_format":null,"overrides":{"placementId":"e88cd877","customAudiences":{},"derivedAudiences":{},"deviceInfo":{"deviceType":"Desktop","primaryHardwareType":"desktop","mobileDevice":false,"osName":"OSX","osVersion":"10.15.7","platform":"DesktopPlatform","platformVersion":null,"browserName":"Chrome","browserVersion":"130.0.0.0","browserRenderingEngine":"WebKit","vendor":"Apple","model":null},"language":"en","ipCountryCode":"US","ipRegionCode":null,"ipPrincipalSubdivisionCode":"NY","ipCityGeonameId":"5128581","ipMetroCode":501,"ipCity":"New York","weather":{"windy":"0","currentCondition":"sunny","apparentTemperature":16.0,"temperature":16.7,"windSpeed":3,"cloudCoverage":0,"conditions":[{"name":"sunny","weight":1}]},"clientTimestamp":"1731880005.060","clientTimeZoneOffsetInMinutes":300},"utSignals":{"tagWindow":{"isTop":false,"readyState":"loading","hasBody":true,"mraid":false,"safeframe":false,"hasJQuery":false,"locationPrefix":"file:///Users/stevehamel/Documents/Projects/git%20projects/sports/nba%20fantasy%20page/Warriors'%20P","locationExtension":"html","innerDimensions":{"width":1,"height":2},"documentClientDimensions":{"width":1,"height":2},"hasRobotsMeta":false,"hasSocialMeta":false,"hasLanguageMeta":false,"hasWindowsMeta":false,"linkCount":0,"hasFaviconLink":false,"noScriptCount":0,"scriptCount":6,"externalScriptCount":0,"embeddedStyleCount":0,"externalStyleCount":0,"styleRuleCount":0,"anchorCount":0,"imageCount":0,"titleLength":0,"innerTextLength":0},"topmostAccessibleAncestorWindow":{"isTop":true,"readyState":"complete","hasBody":true,"mraid":false,"safeframe":false,"hasJQuery":false,"locationPrefix":"file:///Users/stevehamel/Documents/Projects/git%20projects/sports/nba%20fantasy%20page/Warriors'%20P","locationExtension":"html","innerDimensions":{"width":1470,"height":798},"documentClientDimensions":{"width":1470,"height":798},"hasRobotsMeta":true,"hasSocialMeta":true,"hasLanguageMeta":true,"hasWindowsMeta":false,"linkCount":82,"hasFaviconLink":true,"noScriptCount":0,"scriptCount":89,"externalScriptCount":61,"embeddedStyleCount":2,"externalStyleCount":6,"styleRuleCount":null,"anchorCount":72,"imageCount":42,"titleLength":149,"innerTextLength":2788}},"_mraidCheck":null,"fallbackSdk":null,"passthroughParameters":{},"googleMapsClientKey":"AIzaSyAzNwAEulCsOA5MN8iSDGLHm8lRML24_ZA","shouldShowMapsPrompt":false,"pageSkinsHost":null,"pageSkinsPath":null,"stickToPageHeader":null,"externalAdServer":"DFPPremium","externalCreativeId":"138495318233","externalCreativeName":null,"externalPlacementId":"51426877","externalPlacementName":null,"externalSiteId":"7663597","externalSiteName":"","externalSupplierId":null,"externalSupplierName":null,"externalLineItemId":"6813803185","externalSessionId":null,"externalBundleId":null,"externalCreativeWidth":null,"externalCreativeHeight":null,"externalCampaignId":"3619166040","externalCampaignName":null,"externalAdvertiserId":"5296627354","externalDestinationUrl":null,"clickUrl":"https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsuyrDPA4fvewvmW9Aix6EE694igRZu2YlqMRIjzyVGtqaJJPmvh-YAw5UqZcw1hlKHvNN6IYAtmzigtNEOTjsWD8UPBHaMPCEioJmQ4P78E-AuioB5mtYlXg1jjYDbxalDWCv7FJxeeNP2v3pzy_h2fAWxu_-FFtWEyUCHj6NNkXB_Nxo5d5bOwCzLk7qqKppB7PTANswKSOjHlq-1C_AZTyxy9CZteGucNqdaomm7PHiIw9YnWRAyPm0kF9PaY6KL6XFZG_uo1IN9pU2tiYmeyxdC5z2bTgFTzDEh83ybq0_tPEICuLsmkeplIPTLFIBuI02KSFC8j9roSJHpHyGuo-uljcEFB65TgBhId-yV5ZCq1uMhflBJuipWd&sai=AMfl-YTpysRx9p-WgNJPDaAvPqvwdMPjdp4JUSGm2gs-W1yYnCO5YeL2hG6eyC3uojRARwcbsZDKVy3zKzTcml3QaJtuxAIesl_yt4s_hmQ6ciIz&sig=Cg0ArKJSzAGO_VGkkuobEAE&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=","useClickAsDestination":null,"scriptId":"celtra-script-1","firehoseUrl":null,"clickEvent":"advertiser","clickUrlNeedsDest":null,"ncu":null,"firstPage":1,"dataURIsEnabled":0,"monotypeProjectId":"c46ed090-3671-4163-a85b-b06b4038ae38","iosAdvId":null,"iosAdvIdTrackingLimited":null,"androidAdvId":null,"androidAdvIdTrackingLimited":null,"moatRandom":{"first":109505145,"second":154051679},"skipOffset":null,"_enablePoliteLoading":null,"massProductionPreview":null,"_politeImageUrl":null,"_politeClickThrough":null,"sticky":null,"showDismissButton":null,"_mopubExt":null,"enabledServices":["contentSharing"],"creativeVariantLockSize":null,"screenIdLock":null,"vastVersion":null,"standalonePreview":null,"campaignExplorer":null,"exportingFirstFrame":null,"exportingFrameRate":null,"exportingVideoAssetBlobHash":null,"country":"US","campaignName":"US BR Hisense Ultimate TV 10.28.2024","agencyId":null,"customPartnerAttributeBrandId":null,"suppressCloseButton":null,"useComponentNameAsDataAttribute":null,"featureFlags":{"perAccountRateLimiting":true,"noConfigSkinPositioning":false,"allowGlobalSkinPageConfigs":false,"decreasePayloadWeight":true,"useTCFConsentViaGPPFramework":false,"canFLAEscapeIABIframe":true,"useTCFCanada":false,"ctvDeviceType":true,"sliderPositionEvent":true},"coppa":"0","preferredClickThroughWindow":"new","hostPageLoadId":"004110542681785567"};
    runtimeParams.overridableClickThroughDestinationUrl = false;
    runtimeParams.redirectJsClientTimestamp = new Date() / 1000;
    
    
var macros = function (x) {
    if (x instanceof Array) {
        return x.map(macros);
    } else {
        var macroTags = [
            ['%%CACHEBUSTER%%', (Math.random()+'').slice(2)]
,['%ecid!', "138495318233"]
,['%n', (Math.random()+'').slice(2)]
,['%s', "https"]
,['\\[timestamp\\]', (Math.random()+'').slice(2)]
,['\\{celtraAccountId\\}', "1635c534"]
,['\\{celtraAgencyId\\}', ""]
,['\\{celtraAndroidAdvIdTrackingLimitedBoolStr\\}', ""]
,['\\{celtraAndroidAdvIdTrackingLimited\\}', ""]
,['\\{celtraAndroidAdvId\\}', ""]
,['\\{celtraCampaignId:int\\}', "1405818506"]
,['\\{celtraCampaignId\\}', "53cb168a"]
,['\\{celtraCampaignName\\}', "US%20BR%20Hisense%20Ultimate%20TV%2010.28.2024"]
,['\\{celtraCountryCode\\}', "US"]
,['\\{celtraCreativeId:int\\}', "669038012"]
,['\\{celtraCreativeId\\}', "27e0b5bc"]
,['\\{celtraCreativeVariant:urlenc\\}', ""]
,['\\{celtraCreativeVariant\\}', ""]
,['\\{celtraCustomPartnerAttribute\\[code\\]\\}', ""]
,['\\{celtraExternalAdServer\\}', "DFPPremium"]
,['\\{celtraExternalAdvertiserId\\}', "5296627354"]
,['\\{celtraExternalBundleId\\}', ""]
,['\\{celtraExternalCampaignId\\}', "3619166040"]
,['\\{celtraExternalCampaignName\\}', ""]
,['\\{celtraExternalCreativeId\\}', "138495318233"]
,['\\{celtraExternalCreativeName\\}', ""]
,['\\{celtraExternalDestinationUrl\\}', ""]
,['\\{celtraExternalLineItemId\\}', "6813803185"]
,['\\{celtraExternalPlacementId\\}', "51426877"]
,['\\{celtraExternalPlacementName\\}', ""]
,['\\{celtraExternalSessionId\\}', ""]
,['\\{celtraExternalSiteId\\}', "7663597"]
,['\\{celtraExternalSiteName\\}', ""]
,['\\{celtraExternalSupplierId\\}', ""]
,['\\{celtraExternalSupplierName\\}', ""]
,['\\{celtraFeedReportLabel\\}', ""]
,['\\{celtraIosAdvIdTrackingLimitedBoolStr\\}', ""]
,['\\{celtraIosAdvIdTrackingLimited\\}', ""]
,['\\{celtraIosAdvId\\}', ""]
,['\\{celtraPlacementId:int\\}', "3901544567"]
,['\\{celtraPlacementId\\}', "e88cd877"]
,['\\{celtraPlatformAdvIdTrackingLimited\\}', ""]
,['\\{celtraPlatformAdvId\\}', ""]
,['\\{celtraProto\\}', "https"]
,['\\{celtraRandom\\}', (Math.random()+'').slice(2)]
,['\\{celtraSessionId\\}', "s1731880163x52f7d060ca39c4x27802890"]
,['\\{celtraSupplierId:int\\}', ""]
,['\\{celtraSupplierId\\}', ""]

        ];
        return macroTags.reduce(function(str, replacementRule, idx, arr) {
            return str.replace(new RegExp(replacementRule[0], 'ig'), replacementRule[1] ? replacementRule[1] : '');
        }, x);
    }
};

    var urlOpenedOverrideUrls = {"Main CTA":"https://ad.doubleclick.net/ddm/trackclk/N2115732.3073485DBM_ESPN_US/B32832588.407764719;dc_trk_aid=599388438;dc_trk_cid=224394793;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"};
    var storeOpenedOverrideUrls = {};
    var urlOpenedUrlAppendage = "";
    var clickThroughDestinationUrl = null;

    var payloadBase = "https://cache-ssl.celtra.com/api/creatives/27e0b5bc/compiled/web.js";
    var cacheParams = {"v": "5-2845fb1e-moatvideo", "secure": 1, "cachedVariantChoices": "W10-", "isPurposePreview": 0, "decreasePayloadWeight": '1'};

    
    var trackers = (function() {
    return [
        
function(event) {
    if (event.name == 'adLoading')
        return {urls: macros(["https://ad.doubleclick.net/ddm/trackimp/N2115732.3073485DBM_ESPN_US/B32832588.407764719;dc_trk_aid=599388438;dc_trk_cid=224394793;ord=%%CACHEBUSTER%%;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1?"])};

    if (event.name == 'firstInteraction')
        return {urls: macros([])};

    if (event.name == 'creativeLoaded')
        return {urls: macros([])};

    if (event.name == 'creativeRendered')
        return {urls: macros([])};

    if (event.name == 'viewable00')
        return {urls: macros([])};

    if (event.name == 'viewable501')
        return {urls: macros([])};

    if (event.name == 'expandRequested')
        return {urls: macros([])};

    if (event.name == 'videoPlayInitiated')
        return {urls: macros([])};

    if (event.clazz === "MasterVideo") {
        if (event.name == 'videoStart')
            return {urls: macros([])};

        if (event.name == 'videoFirstQuartile')
            return {urls: macros([])};

        if (event.name == 'videoMidpoint')
            return {urls: macros([])};

        if (event.name == 'videoThirdQuartile')
            return {urls: macros([])};

        if (event.name == 'videoComplete')
            return {urls: macros([])};
    }

    if (event.name == 'videoPause')
        return {urls: macros([])};

    if (event.name == 'videoMuted')
        return {urls: macros([])};

    if (event.name == 'videoUnmuted')
        return {urls: macros([])};

    if (event.name == 'custom')
        return {urls: macros({}[event.label] || [])};

    if (event.name == 'urlOpened')
        return {urls: macros({}[event.label] || [])};

    if (event.name == 'storeOpened')
        return {urls: macros({}[event.label] || [])};
},

function(event) {
    if (event.name === "urlOpened" && event.label === "Main CTA")
        return {urls: macros([]), events: [{name: 'click'}] };
},
// Ad server tracker
function(event) {
    if (event.name === "urlOpened" && event.label === "Main CTA")
        return {urls: macros(["https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsuyrDPA4fvewvmW9Aix6EE694igRZu2YlqMRIjzyVGtqaJJPmvh-YAw5UqZcw1hlKHvNN6IYAtmzigtNEOTjsWD8UPBHaMPCEioJmQ4P78E-AuioB5mtYlXg1jjYDbxalDWCv7FJxeeNP2v3pzy_h2fAWxu_-FFtWEyUCHj6NNkXB_Nxo5d5bOwCzLk7qqKppB7PTANswKSOjHlq-1C_AZTyxy9CZteGucNqdaomm7PHiIw9YnWRAyPm0kF9PaY6KL6XFZG_uo1IN9pU2tiYmeyxdC5z2bTgFTzDEh83ybq0_tPEICuLsmkeplIPTLFIBuI02KSFC8j9roSJHpHyGuo-uljcEFB65TgBhId-yV5ZCq1uMhflBJuipWd&sai=AMfl-YTpysRx9p-WgNJPDaAvPqvwdMPjdp4JUSGm2gs-W1yYnCO5YeL2hG6eyC3uojRARwcbsZDKVy3zKzTcml3QaJtuxAIesl_yt4s_hmQ6ciIz&sig=Cg0ArKJSzAGO_VGkkuobEAE&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl="]), events: [{name: 'clickReportedToSupplier'}] };
}
    ]
})();
    trackers.urlsAndEventsFor = function(event) {
        return this.reduce(function(acc, tracker) {
            var ue = tracker(event) || {};
            return {
                urls:   acc.urls.concat(ue.urls || []),
                events: acc.events.concat(ue.events || [])
            };
        }, {urls: [], events: []});
    };
       

    
var adLoadingEvent = {"name":"adLoading","sessionId":"s1731880163x52f7d060ca39c4x27802890"};
adLoadingEvent.clientTimestamp = new Date/1000;

trackers.urlsAndEventsFor(adLoadingEvent).urls.forEach(function(url) {
    try {
        var img = new Image;
        
        img.src = url;
    } catch(e) {}
});
    

    
(function () {
    runtimeParams.protoLoading = {};

    var base64img = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wEKCBsN103sxwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAC0lEQVQI12NgAAIAAAUAAeImBZsAAAAASUVORK5CYII=";

    runtimeParams.protoLoading.dataLoadStatus = null;
    var dataImg = new Image();
    dataImg.onload = function() {
        runtimeParams.protoLoading.dataLoadStatus = "supported";
    };
    dataImg.onerror = function(e) {
        runtimeParams.protoLoading.dataLoadStatus = "blocked";
    };
    dataImg.src = "data:image/png;base64," + base64img;

    runtimeParams.protoLoading.blobLoadStatus = null;
    var url = null;
    try {
        var binaryImg = atob(base64img);
        var length = binaryImg.length;
        var ab = new ArrayBuffer(length);
        var ua = new Uint8Array(ab);
        for (var i = 0; i < length; i++) {
            ua[i] = binaryImg.charCodeAt(i);
        }
        var blob = new Blob([ab], {type: 'image/png'});
        url = URL.createObjectURL(blob);
    } catch(error) {
        runtimeParams.protoLoading.blobLoadStatus = "error";
        runtimeParams.protoLoading.blobErrorMessage = error.name + ': ' + error.message;
        return;
    }
    var blobImg = new Image();
    blobImg.onload = function() {
        runtimeParams.protoLoading.blobLoadStatus = "supported";
        URL.revokeObjectURL(url);
    };
    blobImg.onerror = function(e) {
        runtimeParams.protoLoading.blobLoadStatus = "blocked";
    };
    blobImg.src = url;
})();
    

    function buildPayloadParams() {
      var pairs = [];
      for (var k in cacheParams)
          pairs.push(encodeURIComponent(k) + '=' + encodeURIComponent(cacheParams[k]));
      return pairs.join('&');
    }

    var payloadUrl = payloadBase + '?' + buildPayloadParams();
    var payloadLookupKey = "27e0b5bc/web.js?" + buildPayloadParams();

    
var payload = document.createElement('script');
payload.src = payloadUrl;
payload.onload = function() {

runtimeParams.payloadJsClientTimestamp = new Date() / 1000;
window.celtraDeviceInfoRuntimeParams = runtimeParams.deviceInfo;
const selectedPayload = window.celtra.payloads[payloadLookupKey] ? window.celtra.payloads[payloadLookupKey] : window.celtra.payloads[payloadUrl];
selectedPayload(script, runtimeParams, trackers, urlOpenedOverrideUrls, storeOpenedOverrideUrls, macros, urlOpenedUrlAppendage, clickThroughDestinationUrl);
    
};
script.parentNode.insertBefore(payload, script.nextSibling);
    
    
    
// Append moat display script
var moatScript = document.createElement('script');
var moatCustomParams = [].map(
    function(urlParam) {
        return urlParam.key + '=' + encodeURIComponent(macros(urlParam.value));
    }).reduce(function(url, urlParam) {
        return url + '&' + urlParam;
    }, '');
moatScript.src = 'https://z.moatads.com/turnerceltradisplay283259868569/moatad.js#moatClientLevel1=53cb168a&moatClientLevel2=-&moatClientLevel3=e88cd877&moatClientLevel4=27e0b5bc&zMoatAC=1635c534&zMoatFT=CrossScreenBanner&zMoatBR=2cb0219d&zMoatMA=-&zMoatAS=DFP&zMoatCV=&zMoatDFPST=7663597&zMoatDFPCP=3619166040&zMoatDFPPL=51426877&zMoatDFPCR=138495318233&zMoatDFPAD=5296627354&zMoatDFPLI=6813803185' + moatCustomParams;
moatScript.type = 'text/javascript';
script.parentNode.appendChild(moatScript);
var moatPixel = document.createElement('img');
moatPixel.src = 'https://pixel.moatads.com/pixel.gif?e=12&ac=1&bq=0&dz=1&f=0&gh=1&i=CELTRADISPLAY1&t=109505145&de=154051679&d=53cb168a%3A-%3Ae88cd877%3A27e0b5bc&bo=-&bd=-&cs=0';
      
    
})();
  