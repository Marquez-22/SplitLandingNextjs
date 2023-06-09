import { ColumnAnimation } from '@/componentes/ColumnAnimation'
import { TituloImagesButton } from '@/componentes/TituloImagesButton'
import Head from 'next/head'




export default function Home() {
  return (
    <>
      <Head>
        <title>Split Landing Page nextjs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <TituloImagesButton
        title="Samsung Galaxi-A80"
        buttonText='Buy Now'
        images='/images/Samsung-Galaxy-A80.png'
      /> */}
      <ColumnAnimation/>

    </>
  )
}
