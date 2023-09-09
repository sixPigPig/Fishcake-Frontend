
import { NextPage } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';

const Footer: NextPage = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [year, setYear] = useState(currentYear);
  return (
    <div className="flex flex-col justify-center items-center w-full bg-slate-100 absolute">
      <div className='flex px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px] py-[20px] w-full'>
        <div className='flex flex-row justify-between w-full'>
          <div className='flex flex-row gap-8 max-sm:gap-4'>
            <Link href='/term'>
              <span className='font-normal text-[16px] max-sm:text-[12px] leading-[32px] max-sm:leading-[18px] text-secondary font-Inter hover:cursor-pointer hover:underline'>Terms & Conditions</span>
            </Link>
            <Link href='/policy'>
              <span className='font-normal text-[16px] max-sm:text-[12px] leading-[32px] max-sm:leading-[18px] text-secondary font-Inter hover:cursor-pointer hover:underline'>Privacy Policy</span>
            </Link>
          </div>
          <span className='font-normal text-[16px] max-sm:text-[12px] leading-[32px] max-sm:leading-[18px] text-secondary font-Inter w-max'>© {year} Fishcake Inc.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
