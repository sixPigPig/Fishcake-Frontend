import React, { useContext } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import isMobile from 'is-mobile';



import Appstore from '~/image/AppStore.svg';
import Apple from '~/image/Apple.png';
import Banner1 from '~/image/Banner/1.png';
import BannerMob1 from '~/image/Banner/mob-1.svg';
import Curve1 from '~/image/Curve/1.png';
import Curve2 from '~/image/Curve/2.png';
import Download from '~/image/Download.svg';
import DownloadBg from '~/image/DownloadBg.svg';
import Google from '~/image/Google.png';
import Phone1 from '~/image/Phone2.png';
import Phone from '~/image/Phone.png';
import Playstore from '~/image/PlayStore.svg';
import Start from '~/image/Start.svg';
import { LangContext } from './_app';

interface HomeProps {
  homeDesc: string
  downloadText: string[]
}

const HomePC = ({ homeDesc, downloadText }: HomeProps) => (
  <>
    <div className='flex w-full '>
      <div className='flex flex-row px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px] mt-[70px] max-md:mt-[40px]'>
        <div className='flex flex-col items-start'>
          <div className='flex flex-col mt-[64px] animate-fade-up animate-once animate-duration-[800ms] animate-ease-in'>
            <div className='flex flex-row items-center'>
              <span className='font-semibold text-[80px] leading-[90px] max-md:text-[40px] max-md:leading-[50px] text-transparent bg-clip-text bg-gradient-to-r from-start to-end font-Sc'>
                Fishcake
              </span>
              <span className='font-normal text-[80px] leading-[90px] max-md:text-[40px] max-md:leading-[50px] text-secondary font-Scr'>
                -make
              </span>
            </div>
            <span className='font-normal text-[80px] leading-[90px] max-md:text-[40px] max-md:leading-[50px] text-secondary font-Scr'>
              Token Values Real
            </span>
          </div>
          <div className='animate-fade-up animate-once animate-duration-[800ms] animate-ease-in flex flex-col mt-1 w-[56%] sm:max-lg:w-[70%] max-sm:w-[90%]'>
            <span className='font-light text-[24px] max-sm:text-[20px] xl:leading-[32px] text-secondary font-Scr'>
              {homeDesc}
            </span>
          </div>
          <div className='flex flex-row justify-between mt-12 w-[50%] lg:w-[65%] md:max-lg:w-[70%] max-sm:flex-col max-sm:items-center max-sm:w-full max-sm:justify-center max-sm:gap-4'>
            <div className='flex flex-row justify-between gap-4'>
              <div className='flex items-center justify-center -space-x-6'>
                <div className='p-2 bg-[#E4E7EB] border border-[#E4E7EB] rounded-full bg-gradient-to-b from-end to-start'>
                  <Image src={Download} alt='Download' loading='lazy' />
                </div>
                <div className='p-2 bg-white border border-[#E4E7EB] rounded-full'>
                  <Image src={Playstore} alt='Playtore' loading='lazy' />
                </div>
                <div className='p-2 bg-white border border-[#E4E7EB] rounded-full'>
                  <Image src={Appstore} alt='Appstore' loading='lazy' />
                </div>
              </div>
              <div className='flex flex-col'>
                <span className='animate-jump animate-infinite animate-duration-[5000ms] animate-ease-in-out font-semibold text-[28px] text-primary leading-[26px] max-sm:text-[18px] font-Sc'>
                  20,000+
                </span>
                <span className='font-semibold text-[18px] leading-[24px] max-sm:text-[18px] text-secondary font-Sc'>
                  Downloads
                </span>
              </div>
            </div>
            <Link href='/guide'>
              <button
                type='button'
                className='hover:animate-bounce hover:animate-infinite hover:animate-duration-1000 hover:animate-ease-out w-max flex flex-row justify-center items-center bg-white gap-[10px] py-3 pl-3 pr-6 border border-[#E4E7EB] rounded-full hover:cursor-pointer'
              >
                <Image src={Start} alt='Start' loading='lazy' />
                <span className='font-semibold text-[16px] leading-[22.4px] text-secondary font-SC'>How it works</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='animate-jump-in animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-forwards right-0 absolute z-[-1] mt-[70px] max-md:mt-[40px]'>
        <Image src={Banner1} alt='Banner1' loading='lazy' />
      </div>
    </div>
    <div className='flex flex-col justify-center items-center w-full bg-primary mt-[180px] max-md:mt-[40px]'>
      <div className='flex flex-row justify-center w-full pt-[90px] max-md:pt-[30px]'>
        <div className='flex flex-row justify-between w-full px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px] gap-4'>
          <div className='flex flex-row -space-x-48 ml-[5rem] max-2xl:ml-0 z-[100] -mt-[50px] xl:w-[60%] flex-1 max-sm:hidden'>
            <Image className='sm:max-lg:w-[85%]' src={Phone} alt='Phone' loading='lazy' />
            <Image className='sm:max-lg:hidden' src={Phone1} alt='Phone1' loading='lazy' />
          </div>
          <div className='flex flex-col flex-1 max-sm:items-center'>
            <div className='flex flex-col justify-center max-sm:items-center'>
              <span className='font-semibold text-[48px] max-xl:text-[30px] leading-[56px] max-xl:leading-[40px] font-Sc text-white'>
                Fishcake DAPP
              </span>
              {downloadText.map((text, index) => (
                <span
                  key={index}
                  className='font-light text-[48px] max-xl:text-[29px] leading-[56px] max-xl:leading-[40px] font-Sc text-white'
                >
                  {text}
                </span>
              ))}
              <span className='font-medium text-[18px] leading-[28px] font-Sc text-white mt-4'>
                Our beta version APP is coming!
              </span>
              <span className='font-medium text-[18px] leading-[28px] font-Sc text-white'>
                Download Fishcake APP for Android and Apple.
              </span>
            </div>
            <div className='flex flex-row  items-center mt-12 gap-[1rem] max-md:pb-[20px]'>
              <Link href='https://play.google.com/store/apps/details?id=com.fishcake' target='_blank'>
                <Image
                  className='animate-jump animate-infinite animate-duration-[5000ms] animate-ease-in-out hover:cursor-pointer hover:scale-110"'
                  src={Google}
                  alt='Google'
                  loading='lazy'
                />
              </Link>
              <Link href='https://play.google.com/store/apps?hl=en_US&gl=US&pli=1' target='_blank'>
                <Image
                  className='animate-jump animate-infinite animate-duration-[5000ms] animate-ease-in-out hover:cursor-pointer hover:scale-110"'
                  src={Apple}
                  alt='Apple'
                  loading='lazy'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute left-0 max-sm:hidden'>
        <Image src={Curve1} alt='Curve1' loading='lazy' />
      </div>
      <div className='absolute right-0 -mt-[35px] max-sm:hidden'>
        <Image src={Curve2} alt='Curve2' loading='lazy' />
      </div>
    </div>
  </>
);

const HomeMob = ({ homeDesc, downloadText }: HomeProps) => (
  <>
    <div className='px-[80px]'>
      <div className='animate-jump-in animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-forwards mt-[30px]'>
        <Image src={BannerMob1} alt='Banner1' loading='lazy' />
      </div>
      <div className='flex flex-row justify-between w-full mt-[40px]'>
        <div className='flex flex-row justify-between gap-[16px]'>
          <div className='flex items-center justify-center -space-x-[20px]'>
            <div className='p-[12px] bg-[#E4E7EB] border border-[#E4E7EB] rounded-full bg-gradient-to-b from-end to-start shadow-box'>
              <Image className='w-[22px]' src={Download} alt='Download' loading='lazy' />
            </div>
            <div className='p-[8px] bg-white border border-[#E4E7EB] rounded-full shadow-box'>
              <Image className='w-[32px]' src={Playstore} alt='Playtore' loading='lazy' />
            </div>
            <div className='p-[8px] bg-white border border-[#E4E7EB] rounded-full shadow-box'>
              <Image className='w-[32px]' src={Appstore} alt='Appstore' loading='lazy' />
            </div>
          </div>
          <div className='flex flex-col'>
            <span className='animate-jump animate-infinite animate-duration-[5000ms] animate-ease-in-out font-semibold text-[28px] text-primary leading-[26px] max-sm:text-[18px] font-Sc'>
              20,000+
            </span>
            <span className='font-semibold text-[18px] leading-[24px] max-sm:text-[18px] text-secondary font-Sc'>
              User Downloads
            </span>
          </div>
        </div>
        <Link href='/guide' target='_blank'>
          <button
            type='button'
            className='shadow-box pl-[12px] pr-[24px] py-[12px] hover:animate-bounce hover:animate-infinite hover:animate-duration-1000 hover:animate-ease-out w-max flex flex-row justify-center items-center bg-white gap-[10px] border border-[#E4E7EB] rounded-full hover:cursor-pointer'
          >
            <Image className='w-[32px]' src={Start} alt='Start' loading='lazy' />
            <span className='font-semibold text-[16px] leading-[22.4px] text-secondary font-SC'>How it works</span>
          </button>
        </Link>
      </div>
      <div className='flex flex-col mt-[116px] animate-fade-up animate-once animate-duration-[800ms] animate-ease-in'>
        <div className='flex flex-row items-center'>
          <span className='font-semibold text-[80px] leading-[90px] text-transparent bg-clip-text bg-gradient-to-r from-start to-end font-Sc'>
            Fishcake
          </span>
          <span className='font-normal text-[80px] leading-[90px] text-secondary font-Scr'>-make</span>
        </div>
        <span className='font-normal text-[80px] text-secondary font-Scr'>Token Values Real</span>
      </div>
      <div className='animate-fade-up animate-once animate-duration-[800ms] animate-ease-in flex flex-col mt-1 w-[517px]'>
        <span className='font-light text-[24px] text-secondary font-Scr'>{homeDesc}</span>
      </div>
    </div>
    <div className='mt-[30px] pt-[100px] relative'>
      <Image src={DownloadBg} alt='' className='z-[-1]' />
      <div className='absolute top-[1120px] flex flex-col flex-1 items-center w-full'>
        <div className='flex flex-col justify-center pl-[120px]'>
          <span className='text-[48px] leading-[56px] font-Sc text-white'>Fishcake DAPP</span>
          {downloadText.map((text, index) => {
            return (
              <span key={index} className='text-[48px] leading-[56px] font-Sc text-white'>{text}</span>
            );
          })}
          <span className='text-[18px] leading-[28px] font-Sc text-white mt-[20px]'>
            Our beta version APP is coming!
          </span>
          <span className='text-[18px] leading-[28px] font-Sc text-white'>
            Download Fishcake APP for Android and Apple.
          </span>
        </div>
        <div className='flex flex-row items-center mt-[48px] gap-[16px]'>
          <Link href='https://play.google.com/store/apps/details?id=com.fishcake' target='_blank'>
            <Image
              className='w-[165px] animate-jump animate-infinite animate-duration-[5000ms] animate-ease-in-out hover:cursor-pointer hover:scale-110"'
              src={Google}
              alt='Google'
              loading='lazy'
            />
          </Link>
          <Link href='https://play.google.com/store/apps?hl=en_US&gl=US&pli=1' target='_blank'>
            <Image
              className='w-[165px] animate-jump animate-infinite animate-duration-[5000ms] animate-ease-in-out hover:cursor-pointer hover:scale-110"'
              src={Apple}
              alt='Apple'
              loading='lazy'
            />
          </Link>
        </div>
      </div>
    </div>
  </>
);

const Home: NextPage = () => {
  const { isCN } = useContext(LangContext);
  const homeDesc = isCN
    ? 'Fishcake提供一个无中介的Web3活动推广平台，使人们能够在区块链上顺畅透明地参与营销和激励活动。We focus on local and real！'
    : 'Fishcake provides a non-intermediary Web3 campaign platform that enables people to engage in marketing and incentivization on the blockchain smoothly and transparently. We focus on local and real!';
  const downloadText = isCN ? ['下载&赢取早期用户奖励'] : ['Download, Earn Early', 'Stage User Rewards!'];
  return (
    <>
      <Head>
        <title>Fishcake</title>
        <link rel='shortcut icon' type='image/x-icon' href='./image/Fishcake.ico' />
      </Head>
      {isMobile() ? <HomeMob {...{ homeDesc, downloadText }} /> : <HomePC {...{ homeDesc, downloadText }} />}
    </>
  );
};

export default Home;
