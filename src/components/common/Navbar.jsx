import { useState, useEffect, useRef, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import './navbar.css'

const links = [
  { href: '/account-settings', label: 'Account settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
  { href: '/sign-out', label: 'Sign out' },
]

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={clsx(
        'border border-slate-500 backdrop-blur flex-none transition-colors duration-500 lg:z-50 supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75 flex w-full items-center justify-center top-0 left-0 right-0 !fixed !z-50',
      )}
      style={{
        width: '100%',
        height: '120px',
      }}
    >
      <div className='w-11/12 sm:w-10/12 xl:w-3/4 flex justify-between items-center'
        style={{
          height: '70px',
        }}
      >
        <a className='text-inherit flex-[1]' href='/' aria-current='page'
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 0,
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '10px',
            gap: '10px',
          }}>
            <img className='' alt='logo' loading='lazy' width="74" height="74" src='/icons/x-verse-logo.png' />
            <img alt='logo-text' loading='lazy' width="96" height="96" src='/images/logo-text.svg' hidden />
          </div>
        </a>
        <nav className='hidden font-Lato flex-[1] xl:flex-[1] lg:flex'>
          <ul className='flex list-none justify-end justify-items-end items-center py-6 text-white gap-x-10 w-full'>
            <li>
              <Link
                to="/"
                className='relative text-white decoration-transparent py-4 px-2 text-xl'
                style={{
                  fontFamily: 'Poppins Bold'
                }}
              >
                <span>Stake</span>
              </Link>
            </li>
            <li>
              <Link
                className='group/marketplace relative text-white decoration-transparent py-4 px-2 text-xl'
                style={{
                  fontFamily: 'Poppins Bold'
                }}
              >
                <span>Marketplace</span>
                <span className='group/show invisible group-hover/marketplace:visible group-hover/show: absolute w-[90px] bg-red-600 px-2 py-1 text-[12px] font-bold rounded-full -top-3 left-0 animate-bounce'>Coming Soon</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="lg:hidden inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect x='2' y='4' width='14' height='2'></rect>
                  <rect x='2' y='11' width='20' height='2'></rect>
                  <rect x='8' y='18' width='14' height='2'></rect>
                </svg>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link onClick={() => {
                        window.location.replace("/#home");
                      }}
                        className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-xl`}
                      >
                        Home
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='/stake'
                        rel='noreferrer'
                        target='_blank'
                        className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-xl`}
                      >
                        Stake
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header >
  )
}

export default Navbar

/*
import { useState, useEffect, useRef, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import './navbar.css'

const links = [
  { href: '/account-settings', label: 'Account settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
  { href: '/sign-out', label: 'Sign out' },
]

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span>
        </a>
        <div className="flex md:order-2">
          <button type="button" className="text-center text-gray-200 hover:bg-gray-700 border border-gray-200 focus:outline-none rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 hover:scale-[0.98]" onClick={}>
            <img className='rounded-full mr-2' alt="..." src="https://wallet.hashpack.app/assets/favicon/favicon.ico" />
            {walletId != null ? walletId + " | Disconnect" : "Connect with HashPack"}
          </button>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-900 border-gray-700">
            <li>
              <Link
                to="/"
                className='relative text-white decoration-transparent py-4 px-2 text-xl'
                style={{
                  fontFamily: 'Poppins Bold'
                }}
              >
                <span>Stake</span>
              </Link>
            </li>
            <li>
              <Link
                className='group/marketplace relative text-white decoration-transparent py-4 px-2 text-xl'
                style={{
                  fontFamily: 'Poppins Bold'
                }}
              >
                <span>Marketplace</span>
                <span className='group/show invisible group-hover/marketplace:visible group-hover/show: absolute w-[90px] bg-red-600 px-2 py-1 text-[12px] font-bold rounded-full -top-3 left-0 animate-bounce'>Coming Soon</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

*/