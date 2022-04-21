import Head from 'next/head'
import { useRouter } from 'next/router'

type TitleAndMetaTagsProps = {
  url?: string
  pathname?: string
  title?: string
  description?: string
  poster?: string
}

export function TitleAndMetaTags({
  url = 'https://expolabbrasil.com.br',
  pathname,
  title = 'EXPOLAB',
  description = '1&#170; Mostra Nacional de Experiências da Rede de Laboratórios de Saúde Pública',
  poster
}: TitleAndMetaTagsProps) {
  const router = useRouter()

  const image = poster ? `${url}/${poster}` : `${url}/assets/img/social.png`
  const path = pathname || router.pathname

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />

      <link rel="icon" href="favicons/favicon.ico" />
      <link rel="icon" href="favicons/favicon.svg" type="image/svg+xml" />

      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:site" content="@minsaude" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
