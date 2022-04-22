export default {
  github: 'https://github.com/dhaiwat10/web3cheatsheet',
  docsRepositoryBase: 'https://github.com/dhaiwat10/web3cheatsheet/blob/master',
  titleSuffix: ' – web3 cheatsheet',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">
        🚀 web3cheatsheet.xyz
      </span>
      {/* <span className="text-gray-600 font-normal hidden md:inline">
        The Next.js Static Site Generator
      </span> */}
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="A set of useful code snippets and mini-guides to help you build web3."
      />
      <meta
        name="og:description"
        content="A set of useful code snippets and mini-guides to help you build web3."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://web3cheatsheet.xyz/og.png" />
      <meta name="twitter:site:domain" content="web3cheatsheet.xyz" />
      <meta name="twitter:url" content="https://web3cheatsheet.xyz" />
      <meta name="og:title" content="🚀 web3cheatsheet.xyz" />
      <meta name="og:image" content="https://web3cheatsheet.xyz/og.png" />
      <meta name="apple-mobile-web-app-title" content="web3cheatsheet.xyz" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Dhaiwat Pandya</>,
  unstable_faviconGlyph: '🚀',
}
