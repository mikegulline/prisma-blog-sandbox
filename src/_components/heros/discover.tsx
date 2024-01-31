import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Link from 'next/link';

export default function Discover() {
  return (
    <section className='flex flex-col justify-center items-center w-full h-screen bg-slate-600'>
      <div id='stage' className='w-full flex flex-col'>
        <h1>Welcome to the world of</h1>
        <div id='navigation' className='flex flex-grow'>
          <div id='left' className='w-20 flex justify-center items-center'>
            <button>
              <SlArrowLeft />
            </button>
          </div>
          <div id='title' className='flex flex-grow'>
            <h1>Slug-Name-Here</h1>
            <nav>
              <ul>
                <li>Questions and Answers</li>
                <li>Helpful Links</li>
                <li>Newsletter</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
          <div id='right' className='w-20 justify-center items-center'>
            <button>
              <SlArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
