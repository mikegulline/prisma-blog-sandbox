'use client';
import { useState, useEffect } from 'react';
import { useAnimate } from 'framer-motion';
import Link from 'next/link';
import { Suspense } from 'react';
import { TbMenu } from 'react-icons/tb';
import { CgClose } from 'react-icons/cg';
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
    animate('#menu-closed', { height: isOpen ? 0 : 178 });
    animate('#menu-open', { height: isOpen ? 795 : 177 });
    animate('#open-menu', { rotate: isOpen ? -180 : 0 }, { duration: 0.3 });
    animate('#close-menu', { rotate: isOpen ? 0 : 180 }, { duration: 0.3 });
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
        <div
          id='menu-closed'
          className='absolute top-0 w-full overflow-hidden z-20'
        >
          <div className='border-b bg-white text-neutral-900'>
            <Container className='flex justify-between items-center h-[177px]'>
              <Logo />
              <nav className='flex gap-5 items-center'>
                <Link
                  href='/contact'
                  className='px-7 hover:text-white h-9 flex justify-center items-center text-md rounded-full bg-neutral-900 text-neutral-200 font-medium'
                >
                  Contact
                </Link>
                <button
                  id='open-menu'
                  onClick={() => setIsOpen(true)}
                  className='text-2xl size-12 rounded-full hover:bg-neutral-200 flex justify-center items-center'
                >
                  <TbMenu />
                </button>
              </nav>
            </Container>
          </div>
        </div>
        {/* Full Open Menu*/}
        <div
          onClick={() => setIsOpen(false)}
          id='menu-open'
          className='width-full overflow-hidden  h-[177px]'
        >
          <div id='menu-open-masthead' className='border-b border-neutral-800'>
            <Container className=' h-[177px] flex justify-between items-center'>
              {/* Logo */}
              <Logo color='white' />
              {/* Top Navigation */}
              <nav className='flex gap-5 items-center'>
                <Link
                  href='/contact'
                  className='px-7 hover:bg-neutral-300 h-9 flex justify-center items-center text-md rounded-full bg-white text-neutral-900 font-medium'
                >
                  Contact
                </Link>
                <button
                  id='close-menu'
                  onClick={() => setIsOpen(false)}
                  className=' text-2xl size-12 rounded-full hover:bg-neutral-800 flex justify-center items-center'
                >
                  <CgClose />
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
                  href='/resume'
                  className='group isolate relative p-16 odd:pl-0 even:pr-0 even:border-l border-neutral-800 text-5xl'
                >
                  Résumé
                  <span className='-z-10 inset-y-0 w-screen absolute opacity-0 bg-neutral-900 group-hover:opacity-100 group-odd:right-0 group-even:left-0'></span>
                </Link>
              </Container>
            </div>
            <div className='relative border-b border-neutral-800'>
              <Container className='grid grid-cols-2  border-neutral-800'>
                <Link
                  href='/works'
                  className='group isolate relative p-16 odd:pl-0 even:pr-0 even:border-l border-neutral-800 text-5xl'
                >
                  Works
                  <span className='-z-10 inset-y-0 w-screen absolute opacity-0 bg-neutral-900 group-hover:opacity-100 group-odd:right-0 group-even:left-0'></span>
                </Link>

                <Link
                  href='/contact'
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
              <h3 className='pb-7 text-lg'>Availability</h3>
              <div className='flex gap-12'>
                <div>
                  <h4 className='text-sm font-bold pb-2'>In-Person</h4>
                  <p className='text-sm text-neutral-300'>
                    <strong>Southern California:</strong> Orange, <br />
                    LA and Riverside County.
                  </p>
                </div>
                <div>
                  <h4 className='text-sm font-bold pb-2'>Remote</h4>
                  <p className='text-sm text-neutral-300'>
                    United States
                    <br />
                    and Canada.
                  </p>
                </div>
                <div>
                  <h4 className='text-sm font-bold pb-2'>Relocate</h4>
                  <p className='text-sm text-neutral-300'>
                    Oregon, Virginia,
                    <br />
                    Washington and UK.
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
  color?: 'white' | 'black';
  smash?: boolean;
}

function Logo({ color, smash }: LogoProps) {
  return (
    <Link
      href='/'
      title='HU7K'
      className='font-black hover:opacity-80'
      style={{
        color: color || 'black',
        fontSize: smash ? '2.875rem' : '1.875rem',
      }}
    >
      HU7K
    </Link>
  );
}
