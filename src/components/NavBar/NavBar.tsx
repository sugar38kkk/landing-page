import Link from 'next/link'
import { buttonVariants } from '@/ui/Button'
import ThemeToggle from '../ThemeToggle'

const Navbar = async () => {

  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-20 border-b shadow-sm backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 border-slate-300 dark:border-slate-700'>
      <div className='container flex items-center justify-between w-full mx-auto max-w-7xl'>
        <Link href='/' className={buttonVariants({ variant: 'link' })}>
          SuDev Blog
        </Link>

        <div className='md:hidden'>
          <ThemeToggle />
        </div>

        <div className='hidden gap-4 md:flex'>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar