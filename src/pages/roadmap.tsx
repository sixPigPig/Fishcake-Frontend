import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import isMobile from 'is-mobile';

import Banner6 from '~/image/Banner/6.png';
import Check from '~/image/Check.png';
import Curve5 from '~/image/Curve/5.png';
import Logo from '~/image/Logo brand.svg';
import RoEnd from '~/image/Ro-End.png';
import RoadmapBg from '~/image/RoadmapBg.svg';
import Time from '~/image/Time.png';

const RoadmapPc = () => (
  <div className='flex flex-col justify-center items-center w-full bg-white px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px]'>
    <div className='flex flex-col w-full z-[100]'>
      <div className='flex flex-col items-center pt-[100px]'>
        <span className='font-medium text-[80px] md:max-lg:text-[64px] leading-[90px] md:max-lg:leading-[72px] font-Sc'>
          Fishcake coin 2023
        </span>
        <div className='flex flex-row items-end gap-4'>
          <span className='font-bold text-[80px] md:max-lg:text-[64px] leading-[90px] md:max-lg:leading-[72px] text-transparent bg-clip-text bg-gradient-to-t from-start to-end font-Sc'>
            Roadmap
          </span>
          <Image src={Logo} alt='Logo' loading='lazy' />
        </div>
      </div>
    </div>
    <div className='relative flex flex-col pb-[300px] z-[100]'>
      <div className='flex flex-row'>
        <div className='flex flex-col items-center z-[100]'>
          <div className='flex flex-row'>
            <div className='flex items-center mt-[100px]'>
              <div className='flex flex-col items-center -mt-[70px]'>
                <div className='flex flex-row items-center'>
                  <Image src={Check} alt='Check' className='w-[32px] h-[32px]' loading='lazy' />
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]' />
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-row items-center'>
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]' />
                  <Image src={Check} alt='Check' className='w-[32px] h-[32px]' loading='lazy' />
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]' />
                </div>
                <div className='flex flex-col mt-[12px] items-center'>
                  <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>January</span>
                  <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>Idea</span>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-row items-center'>
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]' />
                  <Image src={Check} alt='Check' className='w-[32px] h-[32px]' loading='lazy' />
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]' />
                </div>
                <div className='flex flex-col mt-[12px] items-center'>
                  <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>Feburary</span>
                  <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>
                    Brainstorm
                  </span>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-row items-center'>
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]' />
                  <Image src={Check} alt='Check' className='w-[32px] h-[32px]' loading='lazy' />
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]' />
                </div>
                <div className='flex flex-col mt-[12px] items-center'>
                  <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>March</span>
                  <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>
                    Dev Team Build-Up
                  </span>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-row items-center'>
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]' />
                  <Image src={Check} alt='Check' className='w-[32px] h-[32px]' loading='lazy' />
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]' />
                </div>
                <div className='flex flex-col mt-[12px] items-center'>
                  <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>April</span>
                  <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>
                    Prototype
                  </span>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-row items-center'>
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]' />
                  <Image src={Check} alt='Check' className='w-[32px] h-[32px]' loading='lazy' />
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]' />
                </div>
                <div className='flex flex-col mt-[12px] items-center'>
                  <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>May</span>
                  <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>MVP Beta</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row'>
            <div className='flex items-center mt-[40px]'>
              <div className='flex flex-col items-center'>
                <div className='flex flex-row items-center mt-[60px]'>
                  <Image src={RoEnd} alt='Time' className='w-[32px] h-[32px]' loading='lazy' />
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#5A6B7E]' />
                </div>
                <div className='flex flex-col mt-[12px] items-start'>
                  <span className='font-medium text-[24px] leading-[28px] text-[#5A6B7E] font-Sc'>Future</span>
                  <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>
                    DAPP Upgrade
                  </span>
                  <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>
                    Medal Sales
                  </span>
                  <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>GameFi</span>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-row items-center'>
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#5A6B7E]' />
                  <Image src={Time} alt='Time' className='w-[32px] h-[32px]' loading='lazy' />
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#5A6B7E]' />
                </div>
                <div className='flex flex-col mt-[12px] items-center'>
                  <span className='font-medium text-[24px] leading-[28px] text-[#5A6B7E] font-Sc'>October</span>
                  <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>
                    Seed Round
                  </span>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-row items-center'>
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#5A6B7E]' />
                  <Image src={Time} alt='Time' className='w-[32px] h-[32px]' loading='lazy' />
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#5A6B7E]' />
                </div>
                <div className='flex flex-col mt-[12px] items-center'>
                  <span className='font-medium text-[24px] leading-[28px] text-[#5A6B7E] font-Sc'>September</span>
                  <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>Campaign</span>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-row items-center'>
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#5A6B7E]' />
                  <Image src={Time} alt='Time' className='w-[32px] h-[32px]' loading='lazy' />
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#5A6B7E]' />
                </div>
                <div className='flex flex-col mt-[12px] items-center'>
                  <span className='font-medium text-[24px] leading-[28px] text-[#5A6B7E] font-Sc'>August</span>
                  <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>
                    Release & Coin
                  </span>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-row items-center'>
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]' />
                  <Image src={Check} alt='Check' className='w-[32px] h-[32px]' loading='lazy' />
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]' />
                </div>
                <div className='flex flex-col mt-[12px] items-center'>
                  <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>July</span>
                  <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>
                    Tokenomic Audit
                  </span>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-row items-center'>
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]' />
                  <Image src={Check} alt='Check' className='w-[32px] h-[32px]' loading='lazy' />
                  <div className='h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]' />
                </div>
                <div className='flex flex-col mt-[12px] items-center'>
                  <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>June</span>
                  <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>
                    Brainstorm
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[204px] w-4 rounded-tr-[16px] rounded-br-[16px] border-r-2 border-t-2 border-b-2 border-[#FF285A] mt-[115px]' />
      </div>
      <div className='absolute bottom-0 right-0 flex justify-end opacity-30'>
        <Image src={Banner6} alt='Banner6' loading='lazy' />
      </div>
    </div>
    <div className='absolute top-0 right-0'>
      <Image src={Curve5} alt='Curve5' loading='lazy' />
    </div>
  </div>
);

const RoadMapMob = () => (
  <>
    <div className='px-[80px] pt-[80px] leading-[90px]'>
      <div className='font-medium text-[64px] text-[#323F4B]'>Fishcake coin 2023</div>
      <div className='font-bold text-[80px] text-transparent bg-clip-text bg-gradient-to-t from-start to-end font-Sc'>
        Roadmap
      </div>
      <Image className='mt-[130px] w-[100%]' src={Banner6} alt='Banner6' loading='lazy' />
    </div>
    <div className='relative ml-[40px] pb-[80px]'>
      <Image src={RoadmapBg} alt='RoadmapBg' loading='lazy' className='w-full' />
      <div className='flex absolute top-[240px] pl-[72px] gap-[40px]'>
        <div className='flex flex-col w-[150px]'>
          <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>January</span>
          <span className='mt-[8px] font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>Idea</span>
        </div>
        <div className='flex flex-col w-[150px]'>
          <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>Feburary</span>
          <span className='mt-[8px] font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>Brainstorm</span>
        </div>
        <div className='flex flex-col w-[150px]'>
          <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>March</span>
          <span className='mt-[8px] font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>
            Dev Team Build-Up
          </span>
        </div>
        <div className='flex flex-col w-[120px]'>
          <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>April</span>
          <span className='mt-[8px] font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>Prototype</span>
        </div>
      </div>
      <div className='flex absolute top-[490px] pl-[72px] gap-[40px]'>
        <div className='flex flex-col w-[150px]'>
          <span className='font-medium text-[24px] leading-[28px] text-[#5A6B7E] font-Sc'>August</span>
          <span className='mt-[8px] font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>
            Release & Coin
          </span>
        </div>
        <div className='flex flex-col w-[150px]'>
          <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>July</span>
          <span className='mt-[8px] font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>
            Tokenomic Audit
          </span>
        </div>
        <div className='flex flex-col w-[150px]'>
          <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>June</span>
          <span className='mt-[8px] font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>Brainstorm</span>
        </div>
        <div className='flex flex-col w-[120px]'>
          <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>May</span>
          <span className='mt-[8px] font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>MVP Beta</span>
        </div>
      </div>
      <div className='flex absolute top-[740px] pl-[72px] gap-[40px]'>
        <div className='flex flex-col w-[150px]'>
          <span className='font-medium text-[24px] leading-[28px] text-[#5A6B7E] font-Sc'>September</span>
          <span className='mt-[8px] font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>Campaign</span>
        </div>
        <div className='flex flex-col w-[150px]'>
          <span className='font-medium text-[24px] leading-[28px] text-[#5A6B7E] font-Sc'>October</span>
          <span className='mt-[8px] font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>Seed Round</span>
        </div>
      </div>
      <div className='flex absolute top-[980px] pl-[346px]'>
        <div className='flex flex-col w-[150px]'>
          <span className='font-medium text-[24px] leading-[28px] text-[#5A6B7E] font-Sc'>Future</span>
          <ul className='mt-[8px] font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc list-disc'>
            <li>DAPP Upgrade</li>
            <li>Medal Sales</li>
            <li>GameFi</li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

const Roadmap: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fishcake-Roadmap</title>
        <link rel='shortcut icon' type='image/x-icon' href='./image/Fishcake.ico' />
      </Head>
      {isMobile() ? <RoadMapMob /> : <RoadmapPc />}
    </>
  );
};

export default Roadmap;
