"use client";

import Script from "next/script";

export default function Analytics() {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    return (
        <>
            {/* Google Analytics (GA4) */}
            {gaId && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
                    </Script>
                </>
            )}

            {/* Noscript fallback for Yandex Metrika */}
            <noscript>
                <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://mc.yandex.ru/watch/${process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID}`} style={{ position: "absolute", left: "-9999px" }} alt="" />
                </div>
            </noscript>
        </>
    );
}
