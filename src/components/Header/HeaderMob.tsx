import React, { useContext, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { LangContext } from '@/pages/_app';

import Logo from '~/image/Logo brand.svg';

import { headers } from './menus';

const HeaderMob: NextPage = () => {
  const router = useRouter();
  const [show, onShowMenu] = useState(false);
  const onMenuShow = () => {
    onShowMenu(!show);
  };

  const { isCN, setIsCN } = useContext(LangContext);

  return (
    <div
      className={`flex flex-col justify-center items-center px-[88px] py-[50px] w-full ${
        router.pathname === '/token' && 'bg-secondary'
      }`}
    >
      <div className='flex flex-col justify-between items-center gap-[60px] z-[100] w-full'>
        <div className='flex items-center justify-between w-full'>
          <Link className='flex items-center' href='/'>
            <Image className='w-[90px]' src={Logo} alt='Logo' />
            <span className='pl-[32px] text-[36px] text-primary'>
              {headers.find((item) => item.Link === router.pathname)?.Title}
            </span>
          </Link>
          <div className='flex items-center justify-between mr-[-40px]'>
            <button
              type='button'
              onClick={onMenuShow}
              className='inline-flex items-center justify-center border-[3px] border-[#323f4b] rounded-[12px] w-[90px] h-[90px] hover:cursor-pointer focus:bg-gray-200 transition duration-150 ease-in-out'
            >
              <svg className='w-[52px] h-[52px]' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
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
              className='ml-[10px] inline-flex items-center justify-center w-[90px] h-[90px] hover:cursor-pointer transition duration-150 ease-in-out text-[36px] text-[#323f4b]'
            >
              {!isCN ? '中' : 'EN'}
            </button>
          </div>
        </div>
        {show && (
          <div className='flex flex-col items-center justify-center w-full'>
            <ul className='flex flex-col items-center justify-center w-full gap-y-[20px]'>
              {headers.map((header) => {
                return (
                  <li key={header.Title} className='w-full'>
                    <Link href={header.Link}>
                      <div className='flex items-center justify-center group text-center h-[90px] text-secondary hover:cursor-pointer border-[3px] border-[#323F4B] rounded-[18px]'>
                        <span
                          className={`font-medium text-[32px] font-Inter group-hover:text-primary ${
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

export default HeaderMob;
