if (self.CavalryLogger) { CavalryLogger.start_js(["tRfih"]); }

__d("useFeedbackCommentReactionSubscription",["React","RelayHooks","UFI2FeedbackCommentReactSubscription","gkx"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a,c){var d=b("RelayHooks").useRelayEnvironment();g.useEffect(function(){if(a==null||c==null)return;var e=b("UFI2FeedbackCommentReactSubscription").subscribe(d,{top_level_feedback_id:a},!1,c,b("gkx")("708253"));return e.dispose},[d,a,c])}}),null);
__d("MiddotSeparator.react",["Middot.react","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){return g.Children.toArray(a.children).filter(Boolean).map(function(a,c){return g.jsxs(g.Fragment,{children:[c!==0?g.jsx(b("Middot.react"),{}):null,a]},c)})}}),null);