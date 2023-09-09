/* eslint-disable-next-line react/jsx-props-no-spreading */
/* eslint-disable react/jsx-props-no-spreading */

import { FC, HtmlHTMLAttributes, } from 'react';
import { Disclosure, Transition } from '@headlessui/react';

interface AccordianProps extends HtmlHTMLAttributes<HTMLAnchorElement> {
  index:number 
  isActive:number
  children?: React.ReactElement | React.ReactElement[] | string
}
const Accordian:FC<AccordianProps> = ({index, isActive, children}) => {
  return(
    <div>
      <Disclosure as='div' defaultOpen={false}>
        <Transition
          show={isActive === index}
          className='overflow-hidden'
          enter='transition transition-[max-height] duration-300 ease-in'
          enterFrom='transform max-h-0'
          enterTo='transform '
          leave='transition transition-[max-height] duration-300 ease-out'
          leaveFrom='transform'
          leaveTo='transform max-h-0'
        >
          <Disclosure.Panel>
            {children}
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </div>
  );
};

export default Accordian;