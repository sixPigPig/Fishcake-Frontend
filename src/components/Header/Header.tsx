import React, { useContext, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { LangContext } from '@/pages/_app';

import Logo from '~/image/Logo.png';

import { headers } from './menus';

const Header: NextPage = () => {
  const router = useRouter();
  const [show, onShowMenu] = useState(false);
  const onMenuShow = () => {
    onShowMenu(!show);
  };
  const { isCN, setIsCN } = useContext(LangContext);

  return (
    <div className='flex flex-col justify-center items-center border border-b-[1px] px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px] py-8 w-full gap-[2rem]'>
      <div className='flex flex-row max-md:flex-col justify-between items-center gap-[3rem] max-xl:gap-[1rem] z-[100] w-full'>
        <div className='flex items-center justify-between w-full'>
          <Link href='/'>
            <Image src={Logo} alt='Logo' />
          </Link>
          <div className='flex items-center justify-between lg:hidden'>
            <button
              type='button'
              onClick={onMenuShow}
              className='inline-flex items-center justify-center p-2 border border-[#323f4b] rounded-md hover:cursor-pointer focus:bg-gray-200 transition duration-150 ease-in-out'
            >
              <svg className='w-6 h-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  stroke='#323f4b'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
            <button
              type='button'
              onClick={() => {
                const isCNNew = isCN ? 0 : 1;
                localStorage.setItem('isCN', isCNNew.toString());
                setIsCN(isCNNew);
              }}
              className='ml-[10px] inline-flex items-center min-w-[42px] justify-center p-2 hover:cursor-pointer transition duration-150 ease-in-out text-[#323f4b]'
            >
              {!isCN ? '中' : 'EN'}
            </button>
          </div>
        </div>
        <div className='flex flex-row'>
          <ul className='flex flex-row justify-between max-lg:hidden gap-y-2'>
            {headers.map((header) => {
              return (
                <li key={header.Title}>
                  <Link href={header.Link}>
                    <button
                      type='button'
                      className='py-2 text-center group xl:px-8 md:max-xl:px-3 text-secondary hover:cursor-pointer w-max'
                    >
                      <span
                        className={`font-medium text-[16px] leading-[20px] font-Inter group-hover:text-primary ${
                          router.pathname === header.Link ? 'text-primary' : ''
                        }`}
                      >
                        {header.Title}
                      </span>
                    </button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          type='button'
          onClick={() => {
            const isCNNew = isCN ? 0 : 1;
            localStorage.setItem('isCN', isCNNew.toString());
            setIsCN(isCNNew);
          }}
          className='max-lg:hidden inline-flex items-center min-w-[42px] justify-center p-2 border border-[#323f4b] rounded-md hover:cursor-pointer focus:bg-gray-200 transition duration-150 ease-in-out text-[#323f4b]'
        >
          {!isCN ? '中' : 'EN'}
        </button>
        {show && (
          <div className='flex flex-col items-center justify-center w-full md:hidden'>
            <ul className='flex flex-col items-center justify-center w-full gap-y-2'>
              {headers.map((header) => {
                return (
                  <li key={header.Title} className='w-full'>
                    <Link href={header.Link}>
                      <div className='group text-center xl:px-8 md:px-2 md:max-xl:px-4 py-2 text-secondary hover:cursor-pointer border border-[#323F4B] rounded-lg'>
                        <span
                          className={`font-medium text-[16px] leading-[20px] font-Inter group-hover:text-primary ${
                            router.pathname === header.Link ? 'text-primary' : ''
                          }`}
                        >
                          {header.Title}
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
