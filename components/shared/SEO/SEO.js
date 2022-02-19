import React, { useEffect, useState } from "react";
import Head from 'next/head';

export default function SEO(props) {
    const [href, setHref] = useState();
    useEffect(() => {
        setHref(window.location.href);
    });
    return (
        <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>Nacho Vázquez | {props.title}</title>
            <meta name="description" content={props.description} />
            <meta property="og:title" content="Nacho Vázquez" />
            <meta property="og:description" content={props.description} />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={href} />
            <meta property="og:site_name" content="Nacho Vázquez"></meta>
            {/* <meta property="og:image" content={props.seoContenido.seoImage} />  */}
            {/* <meta property="og:image:width" content={props.seoContenido.seoImageWidth} />  */}
            {/* <meta property="og:image:height" content={props.seoContenido.seoImageHeight} />  */}
            <meta name="twitter:title" content="Nacho Vázquez" />
            <meta name="twitter:description" content={props.description} />
            {/* <meta name="twitter:image" content={props.seoContenido.seoImage} />  */}
            <meta name="twitter:url" content={href} />
            <meta name="twitter:card" content="summary" />
            <meta itemprop="name" content="Nacho Vázquez" />
            <meta itemprop="url" content={href} />
            {/* <meta itemprop="thumbnailUrl" content={props.seoContenido.seoImage} /> */}
        </Head>
    )
}