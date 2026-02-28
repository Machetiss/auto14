"use client";

import Script from "next/script";

export default function Analytics() {
    return (
        <>
            {/* Noscript fallback for Yandex Metrika (main counter is in YandexMetrika.tsx) */}
            <noscript>
                <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://mc.yandex.ru/watch/${process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID}`} style={{ position: "absolute", left: "-9999px" }} alt="" />
                </div>
            </noscript>
        </>
    );
}
