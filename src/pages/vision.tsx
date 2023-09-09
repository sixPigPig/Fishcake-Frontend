import React, { useContext } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import isMobile from 'is-mobile';

import TransitionEffect from '@/components/Transition/Transition';


import Banner2 from '~/image/Banner/2.png';
import Banner3 from '~/image/Banner/3.png';
import Banner4 from '~/image/Banner/4.png';
import Curve3 from '~/image/Curve/3.png';
import Logo from '~/image/Logo brand1.svg';
import SolutionsBg from '~/image/SolutionsBg.svg';
import { LangContext } from './_app';

type Texts = string[]

const VisionPc = ({ texts }: { texts: Texts }) => (
  <div className='relative flex flex-col items-center justify-center w-full bg-slate-100'>
    <div className='flex flex-col justify-center items-center py-[150px] max-sm:py-[50px] px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px]'>
      <div className='flex flex-row z-[100] justify-center'>
        <div className='animate-bounce animate-infinite animate-duration-[5000ms] animate-ease-in-out flex flex-row justify-between items-center h-full md:max-xl:w-[25%] max-md:w-[18%] max-sm:hidden'>
          <Image src={Logo} alt='Logo' loading='lazy' />
        </div>
        <div className='flex flex-col justify-center'>
          <span className='font-semibold text-[130px] md:max-xl:text-[100px] md:max-lg:text-[80px] max-sm:text-[48px] leading-[128px] md:max-lg:leading-[90px] max-sm:leading-[64px] text-primary font-Lo'>
            Fishcake
          </span>
          <span className='font-semibold text-[130px] md:max-xl:text-[100px] md:max-lg:text-[80px] max-sm:text-[48px] leading-[128px] md:max-lg:leading-[90px] max-sm:leading-[64px] text-secondary font-Lo'>
            Scopes
          </span>
        </div>
      </div>
      <div className=' flex flex-col mt-[5rem] z-[10]'>
        <div className='flex flex-row gap-[40px] max-md:flex-col'>
          <div className='flex flex-col p-12 max-lg:p-4 flex-1 rounded-[2rem] bg-white animate-fade-right animate-once animate-duration-2000 animate-ease-in-out'>
            <div className='flex flex-row justify-center items-center border border-[#F1F3F5] rounded-full py-1 pr-4 pl-1 gap-[10px] w-fit'>
              <div className='flex justify-center items-center bg-[#FFCB27] rounded-full py-1 px-4'>
                <span className='font-semibold text-[14px] leading-[22px] max-sm:text-[12px] text-secondary font-Sc'>
                  EXCLUSIVE
                </span>
              </div>
              <span className='font-semibold text-[20px] leading-[28px] max-sm:text-[12px] text-secondary font-Sc'>
                Rewarding
              </span>
            </div>
            <div className='flex flex-col mt-4'>
              <span className='font-semibold text-[60px] md:max-lg:text-[40px] max-sm:text-[25px] leading-[70px] md:max-lg:leading-[50px] max-sm:leading-[40px] text-transparent bg-clip-text bg-gradient-to-r from-start to-end font-Sc'>
                Fishcake
              </span>
              <span className='font-light text-[60px] md:max-lg:text-[40px] max-sm:text-[25px] leading-[70px] md:max-lg:leading-[50px] max-sm:leading-[40px] text-secondary font-Sc'>
                Rewarding Management
              </span>
              <span className='mt-4 pb-6 font-light text-[20px] max-sm:text-[16px] leading-[28px] text-secondary font-Sc'>
                {texts[0]}
              </span>
            </div>
            <div className='animate-bounce animate-infinite animate-duration-[5000ms] animate-ease-in-out group flex justify-center mt-[40px] max-sm:hidden'>
              <Image src={Banner2} alt='Banner2' loading='lazy' />
            </div>
          </div>
          <div className='flex flex-col p-12 max-lg:p-4 flex-1 rounded-[2rem] bg-white animate-fade-left animate-once animate-duration-2000 animate-ease-in-out'>
            <div className='flex flex-row justify-center items-center border border-[#FF285A] rounded-full py-1 px-4 gap-[10px] w-fit'>
              <span className='font-semibold text-[20px] leading-[28px] max-sm:text-[12px] text-primary font-Sc'>
                Solving Problems
              </span>
            </div>
            <div className='flex flex-col mt-4'>
              <span className='font-semibold text-[60px] md:max-lg:text-[40px] max-sm:text-[25px] leading-[70px] md:max-lg:leading-[50px] max-sm:leading-[40px] text-transparent bg-clip-text bg-gradient-to-r from-start to-end font-Sc'>
                Problems
              </span>
              <span className='font-light text-[60px] md:max-lg:text-[40px] max-sm:text-[25px] leading-[70px] md:max-lg:leading-[50px] max-sm:leading-[40px] text-secondary font-Sc'>
                We&apos;re solving
              </span>
              <span className='mt-4 pb-6 font-light text-[20px] max-sm:text-[16px] leading-[28px] text-secondary font-Sc'>
                {texts[1]}
              </span>
            </div>
            <div className='animate-bounce animate-infinite animate-duration-[5000ms] animate-ease-in-out flex justify-center mt-[40px] max-sm:hidden'>
              <Image src={Banner3} alt='Banner3' loading='lazy' />
            </div>
          </div>
        </div>
        <TransitionEffect duration={2} delay={0} effect='scale'>
          <div className='flex flex-col mt-[40px] p-12 max-lg:p-4 rounded-[2rem] bg-white animate-fade-up animate-once animate-duration-2000 animate-ease-in-out'>
            <div className='flex flex-row max-lg:flex-col justify-between gap-[60px]'>
              <div className='flex flex-col flex-1'>
                <div className='flex flex-row justify-center items-center border border-[#FF285A] rounded-full py-1 px-4 gap-[10px] w-fit'>
                  <span className='font-semibold text-[20px] max-sm:text-[12px] leading-[28px]  text-primary font-Sc'>
                    Bright Ideas
                  </span>
                </div>
                <div className='flex flex-col mt-4'>
                  <div className='flex flex-row gap-4'>
                    <span className='font-semibold text-[60px] md:max-lg:text-[40px] max-sm:text-[25px] leading-[70px] md:max-lg:leading-[50px] max-sm:leading-[40px] text-secondary font-Sc'>
                      Our
                    </span>
                    <span className='font-semibold text-[60px] md:max-lg:text-[40px] max-sm:text-[25px] leading-[70px] md:max-lg:leading-[50px] max-sm:leading-[40px] text-transparent bg-clip-text bg-gradient-to-r from-start to-end font-Sc'>
                      Solutions
                    </span>
                  </div>
                  <div className='flex flex-row items-baseline'>
                    <span className='font-normal text-[32px] max-sm:text-[27px] text-primary leading-[56px] max-sm:leading-[48px] font-Sc'>
                      {texts[2]}
                    </span>
                  </div>
                  <span className='font-normal text-[20px] max-sm:text-[16px] leading-[28px] text-secondary -Sc'>
                    {texts[3]}
                  </span>
                </div>
              </div>
              <div className='animate-bounce animate-infinite animate-duration-[5000ms] animate-ease-in-out flex justify-center items-center flex-1 max-sm:hidden'>
                <Image src={Banner4} alt='Banner4' loading='lazy' />
              </div>
            </div>
          </div>
        </TransitionEffect>
      </div>
      <div className='absolute top-0 left-0 max-sm:hidden'>
        <Image src={Curve3} alt='Curve3' loading='lazy' />
      </div>
    </div>
  </div>
);

const VisionMob = ({ texts }: { texts: Texts }) => (
  <>
    <div className='flex flex-col flex-1 p-[88px] animate-fade-right animate-once animate-duration-2000 animate-ease-in-out'>
      <div className='flex flex-col'>
        <span className='font-semibold text-[96px] leading-[88px] text-transparent bg-clip-text bg-gradient-to-r from-start to-end font-Sc'>
          Fishcake
        </span>
        <span className='font-light text-[96px] leading-[88px] text-secondary font-Sc'>Rewarding Management</span>
        <div className='flex flex-row justify-end w-full mt-[100px]'>
          <div className='flex items-center border border-[#F1F3F5] rounded-full bg-white p-[4px] gap-[10px] w-fit'>
            <div className='flex justify-center items-center bg-[#FFCB27] rounded-full py-[4px] px-[16px]'>
              <span className='font-semibold text-[14px] leading-[22px] text-secondary font-Sc'>EXCLUSIVE</span>
            </div>
            <span className='font-semibold text-[20px] leading-[28px] pr-[12px] text-secondary font-Sc'>Rewarding</span>
          </div>
        </div>
        <span className='mt-[10px] font-light text-[20px] w-[370px] leading-[28px] text-secondary font-Sc'>
          {texts[0]}
        </span>
      </div>
      <div className='animate-bounce animate-infinite animate-duration-[5000ms] animate-ease-in-out group flex justify-center mt-[80px] pl-[40px]'>
        <Image src={Banner2} alt='Banner2' loading='lazy' />
      </div>
    </div>
    <div className='flex flex-col flex-1 p-[88px] animate-fade-right animate-once animate-duration-2000 animate-ease-in-out'>
      <div className='flex flex-col'>
        <span className='font-semibold text-[96px] leading-[88px] text-transparent bg-clip-text bg-gradient-to-r from-start to-end font-Sc'>
          Problems
        </span>
        <span className='font-light text-[96px] leading-[88px] md:max-lg:leading-[50px] text-secondary font-Sc'>
          We&apos;re solving
        </span>
        <div className='flex flex-row justify-end w-full mt-[100px]'>
          <div className='flex flex-row justify-center items-center border border-[#FF285A] rounded-full px-[16px] py-[4px] w-fit'>
            <span className='font-semibold text-[20px] leading-[28px] text-primary font-Sc'>Solving Problems</span>
          </div>
        </div>
        <span className='mt-[82px] font-light text-[20px] w-[484px] leading-[28px] text-secondary font-Sc'>
          {texts[1]}
        </span>
      </div>
      <div className='animate-bounce animate-infinite animate-duration-[5000ms] animate-ease-in-out group flex justify-center mt-[80px] pl-[40px]'>
        <Image src={Banner3} alt='Banner3' loading='lazy' />
      </div>
    </div>
    <div className='flex flex-col flex-1 p-[88px] animate-fade-right animate-once animate-duration-2000 animate-ease-in-out'>
      <div className='flex flex-col'>
        <span className='text-[80px] text-transparent bg-clip-text bg-gradient-to-r font-Sc'>
          <span className='text-secondary font-Sc'>Our </span>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-start to-end font-Sc'>Solutions</span>
        </span>
        <span className='relative text-[32px] leading-[56px] text-primary font-Sc mt-[100px]'>
          <Image src={SolutionsBg} className='w-[510px] block m-auto' alt='SolutionsBg' />
          <div className='absolute text-center w-full top-[42px]'>{texts[2]}</div>
        </span>
        <span className='font-light text-[20px] w-full leading-[28px] text-secondary font-Sc mt-[70px]'>
          {texts[3]}
        </span>
      </div>
      <div className='animate-bounce animate-infinite animate-duration-[5000ms] animate-ease-in-out group flex justify-center mt-[80px] pl-[40px]'>
        <Image src={Banner3} alt='Banner3' loading='lazy' />
      </div>
    </div>
  </>
);

const Vision: NextPage = () => {
  const { isCN } = useContext(LangContext);
  const texts = isCN
    ? [
        'Fishcake致力于建立一个良性互动的健康经济生态，Fishcake coin作为共识奖励代币，允许在不同项目、供应商和行业之间即时、安全地创建和兑换代币化的忠诚度奖励。',
        '我们致力于利用区块链Web3技术，帮助企业和消费者从Fishcake的代币激励经济生态系统中获益。',
        'Fishcake 地理围栏型奖励 ',
        'Fishcake为所有商家提供免费的Web3界面，以向我们的DAPP上的本地用户广播他们的代币激励活动。这种直接的代币化激励营销可能是吸引更多的店面客流和培养强烈客户黏性的最有效方式！',
      ]
    : [
        'Fishcake coin as the consensus rewards token in this ecosystem allows instantaneous and secure creation,redemption of tokenized loyalty rewards across programs, vendors, and industries.',
        ' We dedicated to leveraging the blockchain web3 technology to help both businesses and consumers benefit from the token incentive economic ecosystem on fishcake.',
        'Fishcake geofencing marketing',
        'Fishcake provides all merchants with a free web3 interface to broadcast their token rewarding events to local users on our DAPP,  such direct tokenized incentive marketing could be the most effective way to attract more store foot traffic and foster strong customer bonding!',
      ];
  return (
    <>
      <Head>
        <title>Fishcake-Vision</title>
        <link rel='shortcut icon' type='image/x-icon' href='./image/Fishcake.ico' />
      </Head>
      {isMobile() ? <VisionMob texts={texts} /> : <VisionPc texts={texts} />}
    </>
  );
};

export default Vision;
