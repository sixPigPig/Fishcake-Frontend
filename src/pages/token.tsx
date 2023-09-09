import React, { useContext } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import isMobile from 'is-mobile';

import Chart from '@/components/Chart/Chart';


import ArrowUpGrep from '~/image/ArrowUpGrep.svg';
import Avatar1 from '~/image/Avatar1.png';
import Avatar2 from '~/image/Avatar2.png';
import Avatar3 from '~/image/Avatar3.png';
import Avatar4 from '~/image/Avatar4.png';
import Plus from '~/image/plus.png';
import Curve4 from '~/image/Curve/4.png';
import Token1 from '~/image/Token/1.png';
import Token2 from '~/image/Token/2.png';
import Token3 from '~/image/Token/3.png';
import Token4 from '~/image/Token/4.png';
import Token5 from '~/image/Token/5.png';
import Token6 from '~/image/Token/6.png';
import { LangContext } from './_app';

type Texts = (string | string[])[][]

const TokenPc = ({ texts }: { texts: Texts }) => (
  <div className='relative flex flex-col items-center justify-center w-full bg-secondary'>
    <div className='flex flex-col justify-center w-full max-lg:py-[50px] px-[120px] py-[150px] sm:max-xl:px-[60px] max-sm:px-[30px] z-10'>
      <div className='flex flex-row justify-between max-md:flex-col max-md:items-center max-md:gap-8'>
        <div className='flex flex-col'>
          <div className='flex flex-row gap-4'>
            <span className='font-semibold text-[80px] max-:text-[65px] md:max-lg:text-[45px] sm:max-md:text-[40px] max-sm:text-[25px] text-[#FFCB27] leading-[103px] md:max-lg:leading-[80px] max-md:leading-[64px] font-Sc'>
              FCC Token
            </span>
            <span className='font-medium text-[80px] max-xl:text-[65px] md:max-lg:text-[45px] sm:max-md:text-[40px] max-sm:text-[25px] leading-[103px] md:max-lg:leading-[80px] max-md:leading-[64px] text-white font-Sc'>
              Vesting
            </span>
          </div>
          <span className='font-medium text-[80px] max-xl:text-[65px] md:max-lg:text-[43px] sm:max-md:text-[40px] max-sm:text-[25px] leading-[103px] md:max-lg:leading-[80px] max-md:leading-[64px] text-white font-Sc'>
            With Total Supply Up
          </span>
          <div className='flex flex-row items-center justify-center gap-8 md:max-lg:gap-4 w-fit'>
            <span className='font-medium text-[80px] max-xl:text-[65px] md:max-lg:text-[45px] sm:max-md:text-[40px] max-sm:text-[25px] leading-[103px] md:max-lg:leading-[80px] max-md:leading-[64px] text-white font-Sc'>
              To
            </span>
            <div className='px-8 py-4 rounded-full md:max-lg:px-4 max-md:px-2 md:max-lg:py-2 max-md:py-2 bg-primary'>
              <span className='font-semibold text-[56px] sm:max-lg:text-[38px] max-sm:text-[29px] leading-[64px] text-white max-md:leading-[40px] font-Sc'>
                1,000,000,000
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-[320px] animate-jump animate-infinite animate-duration-[5000ms] animate-ease-in-out max-md:w-full justify-center'>
          <div className='flex items-center -space-x-3'>
            <Image src={Avatar1} alt='Avatar1' loading='lazy' />
            <Image src={Avatar2} alt='Avatar2' loading='lazy' />
            <Image src={Avatar3} alt='Avatar3' loading='lazy' />
            <Image src={Avatar4} alt='Avatar4' loading='lazy' />
            <div className='border-[#444] border-1 bg-[#2E2E2E] h-[64px] w-[66px] rounded-full flex items-center justify-center'>
              <Image src={Plus} alt='Plus' loading='lazy' className='' />
            </div>
          </div>
          <Link href='https://discord.gg/hbHBW5Jq2s' target='_blank'>
            <span className='font-semibold text-[40px] text-primary max-sm:text-[24px] leading-[64px] max-sm:leading-[32px] mt-8 font-Sc'>
              Join Community
            </span>
          </Link>
          <span className='font-medium text-[24px] text-white leading-[32px]  font-Sc'>
            Learn more about how to claim Early Adopter's Air Drops
          </span>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mt-16'>
        <div className=''>
          <span className='font-semibold text-[24px] max-sm:text-[24px] leading-[40px] max-sm:leading-[32px] mt-8 font-Sc text-white'>
            Fishcake Coin Tokenomic Total Supply 1 Billion, No Additional Advisor
          </span>
        </div>
        <div className='mt-8'>
          <Chart
            data={[
              {
                value: 3,
                color: 'var(--color-first)',
              },
              {
                value: 2,
                color: 'var(--color-second)',
              },
              {
                value: 10,
                color: 'var(--color-third)',
              },
              {
                value: 10,
                color: 'var(--color-four)',
              },
              {
                value: 15,
                color: 'var(--color-five)',
              },
              {
                value: 30,
                color: 'var(--color-six)',
              },
              {
                value: 30,
                color: 'var(--color-seven)',
              },
            ].sort((a, b) => a.value - b.value)}
          />
        </div>
        <div className='flex flex-row justify-between w-full gap-8 mt-8 max-md:flex-col'>
          <div className='hover:animate-jump hover:animate-once hover:animate-duration-[2000ms] hover:animate-ease-in-out flex flex-col max-md:flex-row max-md:justify-center p-8 max-md:p-4 md:max-lg:p-2 bg-[#ED7D31] rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[4rem] rounded-bl-[8rem] max-md:rounded-bl-[4rem] flex-1'>
            <div className='flex flex-col'>
              <div className='flex flex-row items-center justify-center w-full'>
                <span className='font-semibold text-[80px] max-xl:text-[47px] text-white leading-[90px] font-Sc'>
                  2%
                </span>
              </div>
              <span className='font-light text-[40px] md:max-lg:text-[32px] max-sm:text-[24px] text-white leading-[56px] max-md:leading-[40px] mt-2 font-Sc'>
                20,000,000
              </span>
              <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-2 font-Sc'>
                {texts[1]?.[0]}
              </span>
              <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-6 font-Sc'>
                {texts[1]?.[1]}
              </span>
              <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-6 font-Sc'>
                Instant
              </span>
            </div>
            <div className='mt-2 max-md:hidden'>
              <Image src={Token2} alt='Token2' loading='lazy' />
            </div>
          </div>
          <div className='relative hover:animate-jump hover:animate-once hover:animate-duration-[2000ms] hover:animate-ease-in-out flex flex-col max-md:flex-row max-md:justify-center p-8 max-md:p-4 md:max-lg:p-2 bg-[#F0385F] rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[4rem] rounded-bl-[8rem] max-md:rounded-bl-[4rem] flex-1 hover:cursor-pointer'>
            <Link href="/explanation">
              <div className='flex flex-col'>
                <div className='flex flex-row items-center w-full'>
                  <span className='font-semibold text-[80px] max-xl:text-[47px] text-white leading-[90px] font-Sc'>
                    15%
                  </span>
                </div>
                <span className='font-light text-[40px] md:max-lg:text-[32px] max-sm:text-[24px] text-white leading-[56px] max-md:leading-[40px] mt-2 font-Sc'>
                  150,000,000
                </span>
                <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-2 font-Sc'>
                  {texts[4]?.[0]}
                </span>
                {(texts[4]?.[1] as string[]).map((item, index) => (
                  <span
                    key={index}
                    className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-6 font-Sc whitespace-pre-line'
                  >
                    {item}
                  </span>
                ))}
                <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-6 font-Sc'>
                  Instant
                </span>
              </div>
              <Image
                className='absolute right-[32px] top-[32px] w-[100px]'
                src={ArrowUpGrep}
                alt='ArrowUpGrep'
                loading='lazy'
              />
              <div className='mt-2 max-md:hidden'>
                <Image src={Token5} alt='Token5' loading='lazy' />
              </div>
            </Link>
          </div>
          <div className='hover:animate-jump hover:animate-once hover:animate-duration-[2000ms] hover:animate-ease-in-out flex flex-col max-md:flex-row max-md:justify-center p-8 max-md:p-4 md:max-lg:p-2 bg-[#F654C8] rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[4rem] rounded-bl-[8rem] max-md:rounded-bl-[4rem] flex-1'>
            <div className='flex flex-col'>
              <div className='flex flex-row items-center justify-center w-full'>
                <span className='font-semibold text-[80px] max-xl:text-[47px] text-white leading-[90px] font-Sc'>
                  10%
                </span>
              </div>
              <span className='font-light text-[40px] md:max-lg:text-[32px] max-sm:text-[24px] text-white leading-[56px] max-md:leading-[40px] mt-2 font-Sc'>
                100,000,000
              </span>
              <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-2 font-Sc'>
                {texts[2]?.[0]}
              </span>
              <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-6 font-Sc whitespace-pre-line'>
                {texts[2]?.[1]}
              </span>
              <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-6 font-Sc'>
                Instant
              </span>
            </div>
            <div className='mt-2 max-md:hidden'>
              <Image src={Token3} alt='Token3' loading='lazy' />
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-between w-full gap-8 mt-8 max-md:flex-col'>
          <div className='hover:animate-jump hover:animate-once hover:animate-duration-[2000ms] hover:animate-ease-in-out flex flex-col max-md:flex-row max-md:justify-center p-8 max-md:p-4 md:max-lg:p-2 bg-[#FFC000] rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[4rem] rounded-bl-[8rem] max-md:rounded-bl-[4rem] flex-1'>
            <div className='flex flex-col'>
              <div className='flex flex-row items-center justify-center w-full'>
                <span className='font-semibold text-[80px] max-xl:text-[47px] text-white leading-[90px] font-Sc'>
                  10%
                </span>
              </div>
              <span className='font-light text-[40px] md:max-lg:text-[32px] max-sm:text-[24px] text-white leading-[56px] max-md:leading-[40px] mt-2 font-Sc'>
                100,000,000
              </span>
              <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] font-Sc whitespace-pre-line'>
                {texts[3]?.[0]}
              </span>
              <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-6 font-Sc whitespace-pre-line'>
                {texts[3]?.[1]}
              </span>
              <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-6 font-Sc'>
                6-month lock
              </span>
              <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] font-Sc'>
                Linear vesting
              </span>
            </div>
            <div className='mt-2 max-md:hidden'>
              <Image src={Token4} alt='Token4' loading='lazy' />
            </div>
          </div>
          <div className='hover:animate-jump hover:animate-once hover:animate-duration-[2000ms] hover:animate-ease-in-out flex flex-col max-md:flex-row max-md:justify-center p-8 max-md:p-4 md:max-lg:p-2 bg-[#00B0F0] rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[4rem] rounded-bl-[8rem] max-md:rounded-bl-[4rem] flex-1'>
            <div className='flex flex-col'>
              <div className='flex flex-row items-center justify-center w-full'>
                <span className='font-semibold text-[80px] max-xl:text-[47px] text-white leading-[90px] font-Sc'>
                  3%
                </span>
              </div>
              <span className='font-light text-[40px] md:max-lg:text-[32px] max-sm:text-[24px] text-white leading-[56px] max-md:leading-[40px] mt-2 font-Sc'>
                30,000,000
              </span>
              <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-2 font-Sc'>
                {texts[0]?.[0]}
              </span>
              <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-6 font-Sc'>
                {texts[0]?.[1]}
              </span>
              <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-6 font-Sc'>
                12-month lock
              </span>
              <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px]  font-Sc'>
                Linear vesting
              </span>
            </div>
            <div className='mt-2 max-md:hidden'>
              <Image src={Token1} alt='Token1' loading='lazy' />
            </div>
          </div>
          <div className='hover:animate-jump hover:animate-once hover:animate-duration-[2000ms] hover:animate-ease-in-out flex flex-col max-md:flex-row max-md:justify-center p-8 max-md:p-4 md:max-lg:p-2 bg-[#92D050] rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[4rem] rounded-bl-[8rem] max-md:rounded-bl-[4rem] flex-1 z-[10]'>
            <div className='flex flex-col'>
              <div className='flex flex-row items-center justify-center w-full'>
                <span className='font-semibold text-[80px] max-xl:text-[47px] text-white leading-[90px] font-Sc'>
                  {texts[5]?.[0]}
                </span>
              </div>
              <span className='font-light text-[40px] md:max-lg:text-[32px] max-sm:text-[24px] text-white leading-[56px] max-md:leading-[40px] mt-2 font-Sc'>
                600,000,000
              </span>
              <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-2 font-Sc'>
                DAO mining pool release
              </span>
              <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-6 font-Sc whitespace-pre-line'>
                {texts[5]?.[1]}
              </span>
              <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-6 font-Sc'>
                Instant
              </span>
            </div>
            <div className='mt-2 max-md:hidden'>
              <Image src={Token6} alt='Token6' loading='lazy' />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='absolute bottom-0 right-0 max-sm:hidden'>
      <Image src={Curve4} alt='Curve4' loading='lazy' />
    </div>
  </div>
);

const TokenMob = ({ texts }: { texts: Texts }) => (
  <>
    <div className='relative flex flex-col justify-center w-full bg-secondary pl-[40px] py-[80px]'>
      <div className='text-[64px] leading-[100px] font-Sc flex flex-row'>
        <span className='text-[#FFCB27]'>
          FCC Token <span className='text-white'>Vesting With</span>
        </span>
      </div>
      <div className='text-[64px] leading-[100px] font-Sc flex flex-row'>
        <span className='text-white'>Total Supply Up To</span>
      </div>
      <div className='mt-[40px] flex items-center justify-center w-[506px] h-[96px] rounded-full bg-primary'>
        <span className='font-semibold text-[64px] text-white font-Sc'>1,000,000,000</span>
      </div>
    </div>
    <div className='flex flex-row flex-wrap justify-between w-full bg-secondary px-[40px] pb-[80px]'>
      <div className='hover:animate-jump relative hover:animate-once hover:animate-duration-[2000ms] hover:animate-ease-in-out flex flex-col w-[50%] bg-[#ED7D31] rounded-tl-[24px] rounded-br-[24px] rounded-tr-[64px] rounded-bl-[148px]'>
        <div className='flex flex-col p-[32px]'>
          <span className='text-[80px] text-white leading-[90px] font-Sc'>2%</span>
          <span className='text-[40px] text-white leading-[90px] font-Sc'>20,000,000</span>
          <span className='text-[24px] text-white leading-[32px] mt-[8px] font-Sc'>{texts[1]?.[0]}</span>
        </div>
        <Image className='w-[176px] m-[32px]' src={Token2} alt='Token2' loading='lazy' />
      </div>
      <Link
        href="/explanation"
        className='hover:animate-jump relative hover:animate-once hover:animate-duration-[2000ms] hover:animate-ease-in-out flex flex-col w-[50%] bg-[#F0385F] rounded-tl-[24px] rounded-br-[24px] rounded-tr-[64px] rounded-bl-[148px]'
      >
        <div className='flex flex-col p-[32px]'>
          <span className='text-[80px] text-white leading-[90px] font-Sc'>15%</span>
          <span className='text-[40px] text-white leading-[90px] font-Sc'>150,000,000</span>
          <span className='text-[24px] text-white leading-[32px] mt-[8px] font-Sc'>{texts[4]?.[0]}</span>
        </div>
        <Image
          className='absolute right-[10px] top-[32px] w-[120px]'
          src={ArrowUpGrep}
          alt='ArrowUpGrep'
          loading='lazy'
        />
        <Image className='w-[176px] m-[32px]' src={Token5} alt='Token5' loading='lazy' />
      </Link>

      <div className='hover:animate-jump relative hover:animate-once hover:animate-duration-[2000ms] hover:animate-ease-in-out flex flex-col w-[50%] bg-[#F654C8] rounded-tl-[24px] rounded-br-[24px] rounded-tr-[64px] rounded-bl-[148px]'>
        <div className='flex flex-col p-[32px]'>
          <span className='text-[80px] text-white leading-[90px] font-Sc'>10%</span>
          <span className='text-[40px] text-white leading-[90px] font-Sc'>100,000,000</span>
          <span className='text-[24px] text-white leading-[32px] mt-[8px] font-Sc'>{texts[2]?.[0]}</span>
        </div>
        <Image className='w-[176px] m-[32px]' src={Token3} alt='Token3' loading='lazy' />
      </div>
      <div className='hover:animate-jump relative hover:animate-once hover:animate-duration-[2000ms] hover:animate-ease-in-out flex flex-col w-[50%] bg-[#FFC000] rounded-tl-[24px] rounded-br-[24px] rounded-tr-[64px] rounded-bl-[148px]'>
        <div className='flex flex-col p-[32px]'>
          <span className='text-[80px] text-white leading-[90px] font-Sc'>10%</span>
          <span className='text-[40px] text-white leading-[90px] font-Sc'>100,000,000</span>
          <span className='text-[24px] text-white leading-[32px] mt-[8px] font-Sc whitespace-pre-line'>{texts[3]?.[0]}</span>
        </div>
        <Image className='w-[176px] m-[32px]' src={Token4} alt='Token4' loading='lazy' />
      </div>

      <div className='hover:animate-jump relative hover:animate-once hover:animate-duration-[2000ms] hover:animate-ease-in-out flex flex-col w-[50%] bg-[#00B0F0] rounded-tl-[24px] rounded-br-[24px] rounded-tr-[64px] rounded-bl-[148px]'>
        <div className='flex flex-col p-[32px]'>
          <span className='text-[80px] text-white leading-[90px] font-Sc'>3%</span>
          <span className='text-[40px] text-white leading-[90px] font-Sc'>30,000,000</span>
          <span className='text-[24px] text-white leading-[32px] mt-[8px] font-Sc'>{texts[0]?.[0]}</span>
        </div>
        <Image className='w-[176px] m-[32px]' src={Token1} alt='Token1' loading='lazy' />
      </div>

      <div className='hover:animate-jump relative hover:animate-once hover:animate-duration-[2000ms] hover:animate-ease-in-out flex flex-col w-[50%] bg-[#92D050] rounded-tl-[24px] rounded-br-[24px] rounded-tr-[64px] rounded-bl-[148px]'>
        <div className='flex flex-col p-[32px]'>
          <span className='text-[50px] text-white leading-[90px] font-Sc'>{texts[5]?.[0]}</span>
          <span className='text-[40px] text-white leading-[90px] font-Sc'>600,000,000</span>
          <span className='text-[24px] text-white leading-[32px] mt-[8px] font-Sc'>DAO mining pool release</span>
        </div>
        <Image className='w-[176px] m-[32px]' src={Token6} alt='Token6' loading='lazy' />
      </div>
    </div>
  </>
);

const Token: NextPage = () => {
  const { isCN } = useContext(LangContext);
  const texts = isCN
    ? [
        ['团队&顾问 ', '专属的开发团队成员和项目顾问，以保持项目运营。'],
        ['早期用户空投', '激励早期采用者、用户和贡献者，对于他们的参与和支持表示感激。'],
        ['生态基金', '支持早期阶段的活动。确保我们生态系统的长期可持续性，\n支持发展激励、合作伙伴关系和倡议。'],
        [
          'DEX (Uniswap) 流动性 50%\n初期投资/IDO  50%',
          '在项目的早期阶段成立并吸引战略合作伙伴加入我们的旅程。\n在Uniswap上发布初始的去中心化交易所（DEX）流动性。',
        ],
        [
          '第一阶段推广激励矿池',
          [
            '我们代币分发的核心在于促进社区内的积极参与和互动。',
            '活动发起者（商家）有资格挖掘活动奖励池的50％作为奖励！\n{Min(50%* pool, 50%*drop numberX20)}.',
          ],
        ],
        [
          '30%+30%',
          '我们代币挖掘的第二阶段，占总量的30％，将仅对通过验证用户独家开放，同时结合我们的NFT徽章验证生态系统。这种严格的方法确保了我们生态系统内活动的真实性和效果。\n对于第三阶段，另外30％的挖矿池将考虑到生态系统代币的通缩性质，从而调节释放速度。此措施旨在确保我们生态系统的长期健康和可持续性。',
        ],
      ]
    : [
        ['Teams & Advisors', 'Dedicated development team members and project advisors, Sustain project operations.'],
        [
          'Early Stages Air Drop.',
          'Incentivize early adopters, users, and contributors, appreciation to the engaement and support.',
        ],
        [
          'Ecosystem Foundation',
          'Support early stage events. Ensure long-term sustainability of our ecosystem, Support development grants, partnerships and initiatives.',
        ],
        [
          'Early-Stage\nSale/IDO 50%',
          "Found the project's early stages and attract strategic partners to join our journey. Release Initial DEX liquidity on uniswap",
        ],
        [
          'First Stage Campaign Mining',
          [
            'The heart of our token distribution lies in fostering active participation and engagement within the communityng.',
            'Event initiators (Merchant) are eligible to mine 50% of event pool as rewards! Min(50%* pool, 50%*drop numberX20).',
          ],
        ],
        [
          '30%+30%',
          'The second phase of our token mining, accounting for 30%, will be exclusively accessible to event' +
            'initiators verified through merchant validation, in conjunction with our NFT badge verification' +
            'ecosystem. This stringent approach ensures the authenticity and effectiveness of activities within our' +
            'ecosystem. For the third phase, another 30% of the mining pool will take into account the deflationary' +
            'nature of ecosystem tokens, consequently moderating the release pace. This measure is designed to ensure' +
            'the long-term health and sustainability of our ecosystem',
        ],
      ];
  return (
    <>
      <Head>
        <title>Fishcake-Tokenomics</title>
        <link rel='shortcut icon' type='image/x-icon' href='./image/Fishcake.ico' />
      </Head>
      {isMobile() ? <TokenMob texts={texts} /> : <TokenPc texts={texts} />}
    </>
  );
};

export default Token;
