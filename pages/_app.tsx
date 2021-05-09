import { AppProps } from 'next/dist/next-server/lib/router/router'
import { NextWebVitalsMetric } from 'next/dist/next-server/lib/utils'
import '../styles/GlobalStyle.css'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.label === 'web-vital') {
    console.log(metric) 
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}