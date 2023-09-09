import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import isMobile from 'is-mobile';

import Apple1 from '~/image/Apple1.png';
import Arrow from '~/image/Arrow.svg';
import Curve6 from '~/image/Curve/6.png';
import Curve7 from '~/image/Curve/7.png';
import Curve8 from '~/image/Curve/8.png';
import Discord from '~/image/Discord.png';
import Google1 from '~/image/Google1.png';
import JoinBg from '~/image/JoinBg.svg';
import JoinStar from '~/image/JoinStar.svg';
import Logo from '~/image/Logo.png';
import Tg from '~/image/Tg.svg';
import Twitter from '~/image/Twitter.png';
import Youtube from '~/image/Youtube.png';

const JoinPc = () => (
  <>
    <div className='relative flex flex-col items-center justify-center w-full bg-white'>
      <div className='flex flex-row px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px] max-sm:py-[50px] py-[100px]'>
        <div className='flex flex-row max-md:flex-col gap-[120px] max-xl:gap-[20px] justify-between'>
          <div className='flex flex-col w-[30%] xl:w-[40%] md:max-lg:w-[45%] max-md:w-full'>
            <div className='flex flex-row items-center'>
              <Image src={Logo} alt='Logo' loading='lazy' />
            </div>
            <span className='mt-4 font-normal text-[16px] leading-[24px] text-secondary font-Sc'>
              Fishcake is committed to advancing the web3 protocols that enable users to engage in marketing and
              incentivization on the blockchain frictionlessly and transparently! We’re building Groupon and Meetup of
              the web3 era.
            </span>
            <div className='flex flex-col gap-2 mt-8 w-fit'>
              <Link href='https://discord.gg/hbHBW5Jq2s' target='_blank'>
                <div className='flex flex-row bg-[#F9F9FB] p-2 gap-2 rounded-full items-center'>
                  <Image src={Discord} alt='Discord' loading='lazy' />
                  <div className='flex flex-col'>
                    <span className='text-[16px] leading-[24px] font-Sc text-secondary font-normal'>Discord</span>
                    <span className='text-[12px] leading-[18px] font-Sc text-secondary font-normal pr-[10px]'>
                      join the community--contribute and earning
                    </span>
                  </div>
                </div>
              </Link>
              <Link href='https://t.me/fishcake_official' target='_blank'>
                <div className='flex flex-row bg-[#F9F9FB] p-2 gap-2 rounded-full items-center'>
                  <Image src={Tg} alt='tg' loading='lazy' />
                  <div className='flex flex-col'>
                    <span className='text-[16px] leading-[24px] font-Sc text-secondary font-normal'>Telegram</span>
                    <span className='text-[12px] leading-[18px] font-Sc text-secondary font-normal'>
                      Join Fishcake group--Talking about events
                    </span>
                  </div>
                </div>
              </Link>
              <Link href='https://twitter.com/fishcake_labs' target='_blank'>
                <div className='flex flex-row bg-[#F9F9FB] p-2 gap-2 rounded-full items-center'>
                  <Image src={Twitter} alt='Twitter' loading='lazy' />
                  <div className='flex flex-col'>
                    <span className='text-[16px] leading-[24px] font-Sc text-secondary font-normal'>Twitter</span>
                    <span className='text-[12px] leading-[18px] font-Sc text-secondary font-normal'>
                      keep Posted On Fishcake News
                    </span>
                  </div>
                </div>
              </Link>
              <Link href='https://www.youtube.com/channel/UCwWaz6t7o00fhl8nY37Y5Ig' target='_blank'>
                <div className='flex flex-row bg-[#F9F9FB] p-2 gap-2 rounded-full items-center'>
                  <Image src={Youtube} alt='Youtube' loading='lazy' />
                  <div className='flex flex-col'>
                    <span className='text-[16px] leading-[24px] font-Sc text-secondary font-normal'>Youtube</span>
                    <span className='text-[12px] leading-[18px] font-Sc text-secondary font-normal'>
                      Learn More Of Fishcake Ecosystem
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='flex flex-col py-8 px-12 max-sm:p-4 rounded-[2rem] bg-[#F9F9FB] z-[10] w-[53%] max-md:w-full'>
            <span className='font-semibold text-[48px] xl:text-[40px] md:max-lg:text-[32px] max-sm:text-[22px] leading-[56px] max-lg:leading-[40px] text-transparent bg-clip-text bg-gradient-to-r from-start to-end font-Sc'>
              Fishcake DAPP
            </span>
            <span className='font-light text-[48px] xl:text-[40px] md:max-lg:text-[32px] max-sm:text-[22px] leading-[56px] max-lg:leading-[40px] text-secondary font-Sc'>
              Download & Earn Early Stage User Rewards!
            </span>
            <span className='mt-4 font-medium text-[18px] leading-[28px] text-secondary font-Sc'>
              Our beta version APP is coming!
            </span>
            <span className='font-medium text-[18px] leading-[28px] text-secondary font-Sc'>
              Download Fishcake APP for Android and Apple.
            </span>
            <div className='flex flex-row items-center gap-4 mt-8'>
              <Link href='https://play.google.com/store/apps/details?id=com.fishcake' target='_blank'>
                <Image
                  className='animate-jump animate-infinite animate-duration-[5000ms] animate-ease-in-out hover:cursor-pointer'
                  src={Google1}
                  alt='Google1'
                  loading='lazy'
                />
              </Link>
              <Link href='https://play.google.com/store/apps?hl=en_US&gl=US&pli=1' target='_blank'>
                <Image
                  className='animate-jump animate-infinite animate-duration-[5000ms] animate-ease-in-out hover:cursor-pointer'
                  src={Apple1}
                  alt='Apple1'
                  loading='lazy'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 right-0 max-sm:hidden'>
        <Image src={Curve8} alt='Curve8' loading='lazy' />
      </div>
    </div>
    <div className='flex flex-col w-full px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px] pb-[100px]'>
      <div className='relative flex flex-col w-full justify-center items-center py-[80px] px-[300px] max-2xl:px-[150px] max-md:px-[20px] max-md:py-[20px] z-[100] bg-gradient-to-t from-start to-end rounded-3xl'>
        <span className='font-medium text-[48px] md:max-xl:text-[40px] max-sm:text-[18px] leading-[56px] max-sm:leading-[32px] text-white text-center font-Sc]'>
          Join Community and keep posted on earing!
        </span>
        <Link href='/#'>
          <div className='animate-shake animate-infinite animate-duration-[5000ms] animate-ease-in-out flex flex-row justify-center items-center revert bg-white mt-12 md:max-lg:mt-8 max-sm:mt-4 gap-4 py-2 pl-8 pr-6 rounded-full hover:cursor-pointer '>
            <span className='font-semibold text-[16px] leading-[22.4px] text-secondary font-SC'>Join Now</span>
            <div className='p-2 rounded-full bg-primary'>
              <Image src={Arrow} alt='Arrow' loading='lazy' />
            </div>
          </div>
        </Link>
        <div className='absolute left-0 bottom-0 max-sm:hidden -z-[10]'>
          <Image src={Curve6} alt='Curve6' loading='lazy' />
        </div>
        <div className='absolute right-0 top-0 -z-[10] max-sm:hidden'>
          <Image src={Curve7} alt='Curve7' loading='lazy' />
        </div>
      </div>
    </div>
  </>
);

const JoinMob = () => (
  <>
    <div className='px-[88px] pt-[88px] leading-[90px]'>
      <div className='font-medium text-[64px] text-[#323F4B]'>Fishcake 2023</div>
    </div>
    <div className='flex flex-col gap-[8px] mt-[112px] w-full px-[88px]'>
      <Link href='https://discord.gg/hbHBW5Jq2s' target='_blank'>
        <div className='flex flex-row bg-[#F9F9FB] p-[8px] gap-[8px] rounded-full items-center'>
          <Image className='w-[32px]' src={Discord} alt='Discord' loading='lazy' />
          <div className='flex flex-col'>
            <span className='text-[16px] leading-[24px] font-Sc text-secondary font-normal'>Discord</span>
            <span className='text-[12px] leading-[18px] font-Sc text-secondary font-normal'>
              join the community--contribute and earning
            </span>
          </div>
        </div>
      </Link>
      <Link href='https://t.me/fishcake_official' target='_blank'>
        <div className='flex flex-row bg-[#F9F9FB] p-[8px] gap-[8px] rounded-full items-center'>
          <Image className='w-[32px]' src={Tg} alt='Tg' loading='lazy' />
          <div className='flex flex-col'>
            <span className='text-[16px] leading-[24px] font-Sc text-secondary font-normal'>Telegram</span>
            <span className='text-[12px] leading-[18px] font-Sc text-secondary font-normal'>
              Join Fishcake group--Talking about events
            </span>
          </div>
        </div>
      </Link>
      <Link href='https://twitter.com/fishcake_labs' target='_blank'>
        <div className='flex flex-row bg-[#F9F9FB] p-[8px] gap-[8px] rounded-full items-center'>
          <Image className='w-[32px]' src={Twitter} alt='Twitter' loading='lazy' />
          <div className='flex flex-col'>
            <span className='text-[16px] leading-[24px] font-Sc text-secondary font-normal'>Twitter</span>
            <span className='text-[12px] leading-[18px] font-Sc text-secondary font-normal'>
              keep Posted On Fishcake News
            </span>
          </div>
        </div>
      </Link>
      <Link href='https://www.youtube.com/channel/UCwWaz6t7o00fhl8nY37Y5Ig' target='_blank'>
        <div className='flex flex-row bg-[#F9F9FB] p-[8px] gap-[8px] rounded-full items-center'>
          <Image className='w-[32px]' src={Youtube} alt='Youtube' loading='lazy' />
          <div className='flex flex-col'>
            <span className='text-[16px] leading-[24px] font-Sc text-secondary font-normal'>Youtube</span>
            <span className='text-[12px] leading-[18px] font-Sc text-secondary font-normal'>
              Learn More Of Fishcake Ecosystem
            </span>
          </div>
        </div>
      </Link>
    </div>
    <div className='flex flex-col mx-[88px] mt-[88px] py-[32px] px-[48px] rounded-[32px] bg-[#F9F9FB] z-[10]'>
      <span className='font-semibold text-[48px] leading-[56px] text-transparent bg-clip-text bg-gradient-to-r from-start to-end font-Sc'>
        Fishcake DAPP
      </span>
      <span className='font-light mt-[10px] text-[48px] leading-[56px] text-secondary font-Sc'>
        Download & Earn Early Stage User Rewards!
      </span>
      <span className='mt-[16px] text-[18px] leading-[28px] text-secondary font-Sc'>
        Our beta version APP is coming!
      </span>
      <span className=' text-[18px] leading-[28px] text-secondary font-Sc'>
        Download Fishcake APP for Android and Apple.
      </span>
      <div className='flex flex-row gap-[16px] mt-[32px]'>
        <Link href='https://play.google.com/store/apps/details?id=com.fishcake' target='_blank'>
          <Image
            className='h-[59px] w-[185px] animate-jump animate-infinite animate-duration-[5000ms] animate-ease-in-out hover:cursor-pointer'
            src={Google1}
            alt='Google1'
            loading='lazy'
          />
        </Link>
        <Link href='https://play.google.com/store/apps?hl=en_US&gl=US&pli=1' target='_blank'>
          <Image
            className='h-[59px] w-[169px] animate-jump animate-infinite animate-duration-[5000ms] animate-ease-in-out hover:cursor-pointer'
            src={Apple1}
            alt='Apple1'
            loading='lazy'
          />
        </Link>
      </div>
    </div>
    <div className='flex justify-end pr-[150px] mt-[45px] mb-[80px]'>
      <Image className='w-[110px]' src={JoinStar} alt='JoinStar' />
    </div>
    <div className='relative'>
      <Image src={JoinBg} className='z-[-1]' alt='JoinStar' />
      <div className='absolute top-[600px] w-full text-center'>
        <div className='text-white m-auto w-[608px] text-[48px] font-semibold leading-[56px]'>
          Join Community and keep posted on earing!
        </div>
        <Link href='/#'>
          <div className='w-[218px] h-[84px] m-auto animate-shake animate-infinite animate-duration-[5000ms] animate-ease-in-out flex flex-row justify-center items-center revert bg-white mt-[48px] rounded-full hover:cursor-pointer '>
            <span className='font-semibold text-[24px] text-secondary font-SC'>Join Now</span>
            <div className='p-[8px] m-[8px] rounded-full bg-primary'>
              <Image className='w-[24px]' src={Arrow} alt='Arrow' loading='lazy' />
            </div>
          </div>
        </Link>
      </div>
    </div>
  </>
);

const Join: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fishcak-Join Us</title>
        <link rel='shortcut icon' type='image/x-icon' href='./image/Fishcake.ico' />
      </Head>
      {isMobile() ? <JoinMob /> : <JoinPc />}
    </>
  );
};

export default Join;
