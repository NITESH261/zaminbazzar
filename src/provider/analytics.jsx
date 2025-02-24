import Script from "next/script";
import React from "react";
import { GoogleTagManager } from "@next/third-parties/google";

const CHAT_BOT_ID = process.env.CHAT_BOT_ID;
const GTM_ID = process.env.GTM_TAG_ID;

const Analytics = () => {
    return (
        <>
            <GoogleTagManager gtmId={GTM_ID} />
            <Script
                id="collect-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `(function(w, d) { 
                      w.CollectId = "${CHAT_BOT_ID}"; 
                      var h = d.head || d.getElementsByTagName("head")[0]; 
                      var s = d.createElement("script"); 
                      s.setAttribute("type", "text/javascript");
                      s.async = true;
                      s.setAttribute("src", "https://collectcdn.com/launcher.js"); 
                      h.appendChild(s); 
                  })(window, document);`,
                }}
            />
        </>
    );
};

export default Analytics;
