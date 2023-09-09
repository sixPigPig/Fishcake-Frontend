import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import TransitionEffect from '@/components/Transition/Transition';
import Jason from '~/image/Profile/Jason.jpg';
import Liang from '~/image/Profile/Liang.jpg';
import Tim from '~/image/Profile/Tim.jpg';
import Michola from '~/image/Profile/Michola.jpg';
import Joachim from '~/image/Profile/Joachim.jpg';
import Zhen from '~/image/Profile/Zhen.jpg';
import Jia from '~/image/Profile/Jia.jpg';
import Dawei from '~/image/Profile/Dawei.png';

const About : NextPage = () => { 
  return (
    <>
      <Head>
        <title>Fishcake-Team</title>
        <link rel="shortcut icon" type="image/x-icon" href="./image/Fishcake.ico" />
      </Head>
      <div className="flex flex-col justify-center w-full">
        <div className='flex flex-col justify-center items-center px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px] mt-[70px] max-md:mt-[40px]'>
          <span className='font-semibold text-[48px] max-sm:text-[32px] leading-[64px] max-sm:leading-[42px] text-Sc text-[#323F4B] animate-pulse animate-once animate-duration-[2000ms] animate-ease-in-out'>Meet the Team</span>
          <span className='font-medium text-[24px] max-sm:text-[18px] leading-[36px] max-sm:leading-[24px] max-sm:text-center text-Sc text-transparent bg-clip-text bg-gradient-to-r from-start to-end'>Blockchain Lovers and Web3 Enthusiasts</span>
          <span className='font-medium text-[16px] max-sm:text-[12px] leading-[24px] max-sm:leading-[18px] max-sm:text-center text-Sc mt-4 text-[#323F4B]'>Get to know talented individuals behind our innovative fishcake app.</span>
          <span className='font-medium text-[16px] max-sm:text-[12px] leading-[24px] max-sm:leading-[18px] text-Sc max-sm:w-full w-[65%] text-center text-[#323F4B]'>Our team is comprised of blockchain lovers and Web3 enthusiasts who share a common passion for breaking barriers in blockchain technology.</span>
        </div>
        <div className='flex flex-col px-[120px] max-sm:px-[60px] sm:max-xl:px-[60px] mt-16 pb-[70px]'>
          <div className='flex flex-row justify-between mt-16 max-sm:flex-col max-sm:mt-8 max-sm:gap-8 px-[12%]'>
            <TransitionEffect duration={2} delay={0} effect="scale" className='flex flex-col items-center justify-center flex-1 hover:animate-bounce hover:animate-infinite hover:animate-duration-[2000ms] hover:animate-ease-in-out hover:cursor-pointer'>
              <div className='flex flex-col items-center justify-center'>
                <Image src={Jason} alt='Jason' className="w-48 md:max-lg:w-32 max-lg:w-24 rounded-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.35)] border-[#323F4B] border-[1px]" loading="lazy"/>
                <span className='mt-4 font-medium text-[16px] leading-[24px] text-Sc text-center text-[#323F4B]'>Jason An</span>
                <span className='font-medium text-[14px] leading-[20px] text-Sc text-center text-transparent bg-clip-text bg-gradient-to-r from-start to-end whitespace-pre-line' dangerouslySetInnerHTML={{ __html: 'Founder\nMaster of Science'}} />
              </div>
            </TransitionEffect>
            <TransitionEffect duration={2} delay={0} effect="scale" className='flex flex-col items-center justify-center flex-1 hover:animate-bounce hover:animate-infinite hover:animate-duration-[2000ms] hover:animate-ease-in-out hover:cursor-pointer'>
              <div className='flex flex-col items-center justify-center'>
                <Image src={Michola} alt='Michola' className="w-48 md:max-lg:w-32 max-lg:w-24 rounded-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.35)] border-[#323F4B] border-[1px]" loading="lazy"/>
                <span className='mt-4 font-medium text-[16px] leading-[24px] text-Sc text-center text-[#323F4B]'>Andrew Michols</span>
                <span className='font-medium text-[14px] leading-[20px] text-Sc text-center text-transparent bg-clip-text bg-gradient-to-r from-start to-end whitespace-pre-line' dangerouslySetInnerHTML={{__html: 'CTO\nSenior Blockchain Engineer'}} />
              </div>
            </TransitionEffect>
          </div>
          <div className='flex flex-row justify-between mt-16 max-sm:flex-col max-sm:mt-8 max-sm:gap-8'>
            <TransitionEffect duration={2} delay={0} effect="scale" className='flex flex-col items-center justify-center flex-1 hover:animate-bounce hover:animate-infinite hover:animate-duration-[2000ms] hover:animate-ease-in-out hover:cursor-pointer'>
              <div className='flex flex-col items-center justify-center'>
                <Image src={Zhen} alt='Zhen' className="w-48 md:max-lg:w-32 max-lg:w-24 rounded-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.35)] border-[#323F4B] border-[1px]" loading="lazy"/>
                <span className='mt-4 font-medium text-[16px] leading-[24px] text-Sc text-center text-[#323F4B]'>Jianwei Z</span>
                <span className='font-medium text-[14px] leading-[20px] text-Sc text-center text-transparent bg-clip-text bg-gradient-to-r from-start to-end'>Solidity Engineer</span>
              </div>
            </TransitionEffect>
            <TransitionEffect duration={2} delay={0} effect="scale" className='flex flex-col items-center justify-center flex-1 hover:animate-bounce hover:animate-infinite hover:animate-duration-[2000ms] hover:animate-ease-in-out hover:cursor-pointer'>
              <div className='flex flex-col items-center justify-center'>
                <Image src={Jia} alt='Jia' className="w-48 md:max-lg:w-32 max-lg:w-24 rounded-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.35)] border-[#323F4B] border-[1px]" loading="lazy"/>
                <span className='mt-4 font-medium text-[16px] leading-[24px] text-Sc text-center text-[#323F4B]'>Jia Wang</span>
                <span className='font-medium text-[14px] leading-[20px] text-Sc text-center text-transparent bg-clip-text bg-gradient-to-r from-start to-end'>Frontend Engineer</span>
              </div> 
            </TransitionEffect>
            <TransitionEffect duration={2} delay={0} effect="scale" className='flex flex-col items-center justify-center flex-1 hover:animate-bounce hover:animate-infinite hover:animate-duration-[2000ms] hover:animate-ease-in-out hover:cursor-pointer'>
              <div className='flex flex-col items-center justify-center'>
                <Image src={Dawei} alt='Dawei' className="w-48 md:max-lg:w-32 max-lg:w-24 rounded-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.35)] border-[#323F4B] border-[1px]" loading="lazy"/>
                <span className='mt-4 font-medium text-[16px] leading-[24px] text-Sc text-center text-[#323F4B]'>Dawei A</span>
                <span className='font-medium text-[14px] leading-[20px] text-Sc text-center text-transparent bg-clip-text bg-gradient-to-r from-start to-end'>Ecosystem Advisor</span>
              </div> 
            </TransitionEffect>
          </div>
          <div className='flex flex-row justify-between mt-16 max-sm:flex-col max-sm:mt-8 max-sm:gap-8'>
            <TransitionEffect duration={2} delay={0} effect="scale" className='flex flex-col items-center justify-center flex-1 hover:animate-bounce hover:animate-infinite hover:animate-duration-[2000ms] hover:animate-ease-in-out hover:cursor-pointer'>
              <div className='flex flex-col items-center justify-center'>
                <Image src={Tim} alt='Tim' className="w-48 md:max-lg:w-32 max-lg:w-24 rounded-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.35)] border-[#323F4B] border-[1px]" loading="lazy"/>
                <span className='mt-4 font-medium text-[16px] leading-[24px] text-Sc text-center text-[#323F4B]'>Tim</span>
                <span className='font-medium text-[14px] leading-[20px] text-Sc text-center text-transparent bg-clip-text bg-gradient-to-r from-start to-end'>UX Engineer</span>
              </div>
            </TransitionEffect>
            <TransitionEffect duration={2} delay={0} effect="scale" className='flex flex-col items-center justify-center flex-1 hover:animate-bounce hover:animate-infinite hover:animate-duration-[2000ms] hover:animate-ease-in-out hover:cursor-pointer'>
              <div className='flex flex-col items-center justify-center'>
                <Image src={Joachim} alt='Joachim' className="w-48 md:max-lg:w-32 max-lg:w-24 rounded-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.35)] border-[#323F4B] border-[1px]" loading="lazy"/>
                <span className='mt-4 font-medium text-[16px] leading-[24px] text-Sc text-center text-[#323F4B]'>Joachim Zhao</span>
                <span className='font-medium text-[14px] leading-[20px] text-Sc text-center text-transparent bg-clip-text bg-gradient-to-r from-start to-end'>Community Officer</span>
              </div>
            </TransitionEffect>
            <TransitionEffect duration={2} delay={0} effect="scale" className='flex flex-col items-center justify-center flex-1 hover:animate-bounce hover:animate-infinite hover:animate-duration-[2000ms] hover:animate-ease-in-out hover:cursor-pointer'>
              <div className='flex flex-col items-center justify-center'>
                <Image src={Liang} alt='Liang' className="w-48 md:max-lg:w-32 max-lg:w-24 rounded-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.35)] border-[#323F4B] border-[1px]" loading="lazy"/>
                <span className='mt-4 font-medium text-[16px] leading-[24px] text-Sc text-center text-[#323F4B]'>Xueer Liang</span>
                <span className='font-medium text-[14px] leading-[20px] text-Sc text-center text-transparent bg-clip-text bg-gradient-to-r from-start to-end'>Graphic Designer</span>
              </div> 
            </TransitionEffect>            
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
