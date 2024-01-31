'use client';
import { useState, useEffect } from 'react';
import { useAnimate, stag } from 'framer-motion';
import Link from 'next/link';
import { Suspense } from 'react';
import { TfiClose, TfiMenu } from 'react-icons/tfi';
import SocialIconsMenu from './social-icons-menu';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import Container from '@/components/layout/container';
import HeaderAuth from '@/components/header-auth';
import SearchInput from '@/components/search-input';

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate('#menu-closed', { height: isOpen ? 0 : 177 });
    animate('#menu-open', { height: isOpen ? 755 : 177 });
  }, [isOpen]);

  return scope;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  return (
    <>
      <header
        className='bg-neutral-950 text-white w-full overflow-hidden'
        ref={scope}
      >
        {/* menu closed main menu */}
        <div id='menu-closed' className='absolute top-0 w-full overflow-hidden'>
          <div className='py-16 border-b bg-white text-neutral-900'>
            <Container className='flex justify-between items-center'>
              <Logo color='black' />
              <nav className='flex gap-5 items-center'>
                <Link
                  href='/'
                  className='px-7 hover:text-white h-9 flex justify-center items-center text-md rounded-full bg-neutral-900 text-neutral-200 font-medium'
                >
                  Contact
                </Link>
                <button
                  onClick={() => setIsOpen(true)}
                  className='text-2xl size-12 rounded-full hover:bg-neutral-200 flex justify-center items-center'
                >
                  <TfiMenu />
                </button>
              </nav>
            </Container>
          </div>
        </div>
        {/* Full Open Menu*/}
        <div id='menu-open' className='width-full overflow-hidden  h-[177px]'>
          <div
            id='menu-open-masthead'
            className='py-16 border-b border-neutral-800'
          >
            <Container className='flex justify-between items-center'>
              {/* Logo */}
              <Logo color='white' />
              {/* Top Navigation */}
              <nav className='flex gap-5 items-center'>
                <Link
                  href='/'
                  className='px-7 hover:bg-neutral-300 h-9 flex justify-center items-center text-md rounded-full bg-white text-neutral-900 font-medium'
                >
                  Contact
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className='text-2xl size-12 rounded-full hover:bg-neutral-800 flex justify-center items-center'
                >
                  <TfiClose />
                </button>
              </nav>
            </Container>
          </div>
          {/* Main Menu */}
          <div id='menu-open-main-menu'>
            <div className='relative border-b border-neutral-800'>
              <Container className='grid grid-cols-2'>
                <Link
                  href='/about'
                  className='font-display group isolate relative p-16 odd:pl-0 even:pr-0 even:border-l border-neutral-800 text-5xl'
                >
                  About
                  <span className='-z-10 inset-y-0 w-screen absolute opacity-0 bg-neutral-900 group-hover:opacity-100 group-odd:right-0 group-even:left-0'></span>
                </Link>

                <Link
                  href='/contact'
                  className='group isolate relative p-16 odd:pl-0 even:pr-0 even:border-l border-neutral-800 text-5xl'
                >
                  Resume
                  <span className='-z-10 inset-y-0 w-screen absolute opacity-0 bg-neutral-900 group-hover:opacity-100 group-odd:right-0 group-even:left-0'></span>
                </Link>
              </Container>
            </div>
            <div className='relative border-b border-neutral-800'>
              <Container className='grid grid-cols-2  border-neutral-800'>
                <Link
                  href='/faqs'
                  className='group isolate relative p-16 odd:pl-0 even:pr-0 even:border-l border-neutral-800 text-5xl'
                >
                  Works
                  <span className='-z-10 inset-y-0 w-screen absolute opacity-0 bg-neutral-900 group-hover:opacity-100 group-odd:right-0 group-even:left-0'></span>
                </Link>

                <Link
                  href='/learn-more'
                  className='group isolate relative p-16 odd:pl-0 even:pr-0 even:border-l border-neutral-800 text-5xl'
                >
                  Contact
                  <span className='-z-10 inset-y-0 w-screen absolute opacity-0 bg-neutral-900 group-hover:opacity-100 group-odd:right-0 group-even:left-0'></span>
                </Link>
              </Container>
            </div>
          </div>
          {/* Menu Footer */}
          <Container className='grid grid-cols-2 py-16'>
            <div id='menu-open-footer-left'>
              <h3 className='pb-7 text-lg'>Our locations</h3>
              <div className='grid grid-cols-2'>
                <div>
                  <h4 className='text-sm font-bold pb-2'>United States</h4>
                  <p className='text-sm text-neutral-300'>
                    7624 Potter Valley Dr.
                    <br />
                    Eastvale, CA 92880
                  </p>
                </div>
                <div>
                  <h4 className='text-sm font-bold pb-2'>Canada</h4>
                  <p className='text-sm text-neutral-300'>
                    100 Queens Park
                    <br />
                    Toronto, ON M5S 2C6
                  </p>
                </div>
              </div>
            </div>
            <div id='menu-open-footer-right ' className='pl-16'>
              <h3 className='pb-7 text-lg'>Let's connect</h3>
              <SocialIconsMenu />
            </div>
          </Container>
        </div>
      </header>
      {/* END Header */}
      <div className='h-[177px]'></div>
      <Navbar className='shadow h-20 hidden'>
        <NavbarBrand>
          <Link href='/' className='font-bold'>
            BlogApp
          </Link>
        </NavbarBrand>
        <NavbarContent justify='center'>
          <NavbarItem>
            <Suspense>
              <SearchInput />
            </Suspense>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
          <HeaderAuth />
        </NavbarContent>
      </Navbar>
    </>
  );
}

interface LogoProps {
  color: 'white' | 'black';
}

function Logo({ color }: LogoProps) {
  return (
    <Link
      href='/'
      title='HU7K'
      className='text-3xl font-black hover:opacity-80'
      style={{ color }}
    >
      HU7K
    </Link>
  );
}
