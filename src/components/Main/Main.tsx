import LargeHeading from 'components/ui/LargeHeading'
import Paragraph from 'components/ui/Paragraph'
import Image from 'next/image'
import { FC } from 'react'

const Main: FC = () => {
  return (
    <main className="relative h-screen pt-12 overflow-x-hidden">
      <div className="container flex flex-col items-center justify-start w-full h-full mx-auto text-center max-w-7xl lg:justify-center">
        <div className="relative w-full h-full max-w-xl mb-8 max-h-14 lg:max-w-3xl">
          <Image
            className="img-shadow "
            priority
            fill
            src={'./images/logo-light.svg'}
            alt="Logo"
            style={{ objectFit: 'contain' }}
            quality={100}
          />
        </div>
        <LargeHeading>React Advanced</LargeHeading>
        <Paragraph className="text-center">
          Typescript, ReactJs, NextJs, Tailwindcss The library for web and
          native user interfaces
        </Paragraph>
        <div className="relative w-full max-w-sm mt-12 h-60">
          <Image
            priority
            className="img-shadow "
            quality={100}
            style={{ objectFit: 'contain' }}
            fill
            src="./images/hero-illustration.svg"
            alt="illustration"
          />
        </div>
      </div>
    </main>
  )
}

export default Main
