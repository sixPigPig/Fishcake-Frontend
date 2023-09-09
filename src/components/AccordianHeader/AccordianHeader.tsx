/* eslint-disable-next-line react/jsx-props-no-spreading */
/* eslint-disable react/jsx-props-no-spreading */

import { FC, HtmlHTMLAttributes, } from 'react';

interface AccordianHeaderProps extends HtmlHTMLAttributes<HTMLAnchorElement> {
  index:number
  active:number
  text:string
  onAccordianClick:(index:number) => void
}
const AccordianHeader:FC<AccordianHeaderProps> = ({index, active, text, onAccordianClick}) => {
  return(
    <div
      className='group bg-[#dbd8d8] px-8 max-sm:px-4 py-4 rounded-lg'
      onClick={() => {
        onAccordianClick(index);
      }}
    >
      <div className='flex flex-row items-center justify-between hover:cursor-pointer'>
        <span className='font-medium text-[20px] max-sm:text-[15px] leading-[32px] max-sm:leading-[28px] text-Inter text-[#323F4B] group-hover:text-primary'>
          {text}
        </span>
        <svg
          className={`${
            active === index ? 'transform duration-300 ease  rotate-180' : 'transform duration-300 ease'
          } w-6 h-6 text-gray-800 dark:text-white`}
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 14 8'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1'
            d='m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1'
          />
        </svg>
      </div>
    </div>
  );
};

export default AccordianHeader;