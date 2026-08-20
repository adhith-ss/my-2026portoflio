/**
 * PostHog analytics — loaded on every page (see index.html, about.html,
 * allocatr.html, item-management.html, rxtogo.html).
 *
 * Traffic is proxied through this domain via the Vercel rewrites in
 * vercel.json ("/ingest/*") so ad-blockers that target posthog.com are
 * less likely to strip requests, and so no extra CSP allow-listing is
 * needed (requests stay same-origin).
 *
 * Only runs on the production hostname — localhost and Vercel preview
 * deployments (*.vercel.app) are excluded so they don't pollute analytics.
 *
 * The project API key below is a public, write-only client identifier
 * (PostHog's own docs confirm it's safe to expose in client-side code).
 *
 * If this PostHog project is ever moved to EU cloud instead of US cloud,
 * update the two destination hosts in vercel.json's "rewrites" from
 * us.i.posthog.com / us-assets.i.posthog.com to
 * eu.i.posthog.com / eu-assets.i.posthog.com, and change ui_host below
 * to https://eu.posthog.com.
 */
(function () {
  var PROD_HOSTNAME = 'www.adhith-s.com';
  if (window.location.hostname !== PROD_HOSTNAME) { return; }

  !function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="ki Ci init qi Hi pr Bi zi Di capture calculateEventProperties Qi register register_once register_for_session unregister unregister_for_session Ki getFeatureFlag getFeatureFlagPayload getFeatureFlagResult getAllFeatureFlags isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync Xi identify setPersonProperties unsetPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset shutdown setIdentity clearIdentity get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException addExceptionStep captureLog startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty Ji Gi createPersonProfile setInternalOrTestUser Yi Ai rn opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing Vi debug mr it getPageViewId captureTraceFeedback captureTraceMetric Oi".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

  posthog.init('phc_oDSfQfRaaasS6RUMdLyvj9ieNT9qB7mYTQuEvnyxPXu6', {
    api_host: '/ingest',
    ui_host: 'https://us.posthog.com',
    defaults: '2026-05-30',
    person_profiles: 'identified_only'
  });

  /* PostHog's bot classification — $virt_is_bot ("Is bot"), $virt_bot_name,
     $virt_bot_operator — reads $raw_user_agent, falling back to $user_agent,
     off each event. The JS SDK sends neither; it only sends the parsed
     $browser / $os / $device_type. With no user agent to read, PostHog treats
     every event as the "no_user_agent" automation category, so isLikelyBot()
     returns true for ALL traffic — which is why filtering a dashboard to
     "Is bot = is false" matched nothing and broke every tile.

     Registering the user agent as a super property attaches it to every event
     so the classification is meaningful. Only affects events from here on;
     historical events remain unclassifiable. */
  posthog.register({ $raw_user_agent: navigator.userAgent });
})();
