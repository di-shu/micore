import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import getT from 'next-translate/getT'
import i18nConfig from '../i18n.json'
import { MetaHead } from '../src/Components'

function documentLang({ __NEXT_DATA__}) {
  const { page } = __NEXT_DATA__
  const [,langQuery] = page.split('/')
  const lang = i18nConfig.locales.find(l => l === langQuery)

  return lang || i18nConfig.defaultLocale
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const t = await getT(ctx?.locale || i18nConfig.defaultLocale, 'common')

    return {
      ...initialProps,
      title: t('title')
    }
  }

  render() {
    return (
      <Html lang={documentLang(this.props)}>
        <Head>
          <MetaHead title={this.props.title}/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

