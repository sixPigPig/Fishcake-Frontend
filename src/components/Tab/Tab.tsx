/* eslint-disable-next-line react/jsx-props-no-spreading */
/* eslint-disable react/jsx-props-no-spreading */

import { FC } from 'react';

interface TabProps {
  index:number
  active:number
  text:string
  showTab:(index:number) => void
}
const Tab:FC<TabProps> = ({index, text, active, showTab}) => {
  return(
    <li className='flex-1'>
      <button
        type='button'
        onClick={() => showTab(index)}
        className={`${
          active === index ? 'bg-[#dbd8d8]' : 'bg-[#f1f5f9]'
        } group text-center xl:px-8 md:max-xl:px-3 py-4 max-xl:py-2 max-sm:px-2 text-secondary hover:cursor-pointer w-max rounded-xl`}
      >
        <span
          className={`font-medium text-[16px] max-sm:text-[12px] leading-[20px] font-Inter group-hover:text-primar ${
            active === index ? 'text-primary' : ''
          }`}
        >
          {text}
        </span>
      </button>
    </li>
  );
};

export default Tab;