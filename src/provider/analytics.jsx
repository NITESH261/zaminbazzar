import Script from "next/script";
import React from "react";

const CHAT_BOT_ID = process.env.CHAT_BOT_ID;

const Analytics = () => {
    return (
        <>
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
