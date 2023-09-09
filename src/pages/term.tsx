import React, { useContext } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';


import { LangContext } from './_app';

const Term: NextPage = () => {
  const { isCN } = useContext(LangContext);
  return (
    <>
      <Head>
        <title>Fishcake-Terms & Conditions</title>
        <link rel='shortcut icon' type='image/x-icon' href='./image/Fishcake.ico' />
      </Head>
      <div className='flex w-full'>
        <div className='flex flex-row px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px] mt-[70px] mb-[70px] max-md:mt-[40px] w-inherit'>
          <div className='flex flex-col w-full p-8 rounded-lg bg-slate-100'>
            <div className='flex flex-col items-center justify-center'>
              <span className='font-medium text-[32px] max-sm:text-[17px] leading-[40px] max-sm:leading-[24px] text-Sc text-center text-[#323F4B]'>
                {isCN ? '使用条款和条件' : 'Terms & Conditions'}
              </span>
              <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-center text-[#323F4B]'>
                {isCN
                  ? '欢迎来到Fishcake！通过访问和使用我们的应用程序，您同意遵守这些条款和条件。'
                  : 'Welcome to Fishcake! By accessing and using our app, you agree to comply with these terms and conditions.'}
              </span>
              <span className='font-normal text-[18px] max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-center text-[#323F4B]'>
                {isCN
                  ? '如果您不同意，请不要使用该应用程序。'
                  : 'If you do not agree, please refrain from using the app.'}
              </span>
            </div>
            <div className='flex flex-col mx-8 max-sm:mx-0'>
              <div className='flex flex-col justify-center mt-8'>
                <span className='font-medium text-[24px] max-sm:text-[14px] leading-[32px] max-sm:leading-[24px] text-Sc text-[#323F4B]'>
                  1. {isCN ? '应用程序的使用' : 'Use of the App'}
                </span>
                <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[18px] text-Sc text-[#323F4B]'>
                  {isCN
                    ? 'Fishcake为代币激励营销提供Web3解决方案。您必须年满18岁才能使用该应用程序'
                    : 'Fishcake provides web3 solution for token incentive marketing. You must be at least 18 years old to use the app.'}
                </span>
              </div>
              <div className='flex flex-col justify-center mt-4'>
                <span className='font-medium text-[24px] max-sm:text-[14px] leading-[32px] max-sm:leading-[24px] text-Sc text-[#323F4B]'>
                  2. {isCN ? '用户账户' : 'User Accounts'}
                </span>
                <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-[#323F4B]'>
                  {isCN
                    ? '要访问某些功能，您可能需要创建一个账户。您负责保管您的账户信息的保密性，并对在您的账户下发生的所有活动负责。'
                    : 'To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.'}
                </span>
              </div>
              <div className='flex flex-col justify-center mt-4'>
                <span className='font-medium text-[24px] max-sm:text-[14px] leading-[32px] max-sm:leading-[24px] text-Sc text-[#323F4B]'>
                  3. {isCN ? '知识产权' : 'Intellectual Property'}
                </span>
                <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-[#323F4B]'>
                  {isCN
                    ? 'Fishcake拥有该应用程序中的所有知识产权。未经许可，您不得复制、修改、分发或以其他方式使用我们的内容。'
                    : 'Fishcake owns all intellectual property rights in the app. You may not reproduce, modify, distribute, or otherwise use our content without permission.'}
                </span>
              </div>
              <div className='flex flex-col justify-center mt-4'>
                <span className='font-medium text-[24px] max-sm:text-[14px] leading-[32px] max-sm:leading-[24px] text-Sc text-[#323F4B]'>
                  4. {isCN ? '禁止的活动' : 'Prohibited Activities'}
                </span>
                <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-[#323F4B]'>
                  {isCN ? '您同意不得' : 'You agree not to'}
                </span>
                <div className='flex flex-col'>
                  <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-[#323F4B]'>
                    - {isCN ? '违反任何适用的法律或法规。' : 'Violate any applicable laws or regulations.'}
                  </span>
                  <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-[#323F4B]'>
                    - {isCN ? '冒充他人或提供虚假信息。' : 'Impersonate others or provide false information.'}
                  </span>
                  <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-[#323F4B]'>
                    - {isCN ? '从事欺诈或非法活动。' : 'Engage in fraudulent or illegal activities.'}
                  </span>
                  <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-[#323F4B]'>
                    -{' '}
                    {isCN ? '干扰应用程序的功能或安全性。' : 'Interfere with the app&apos;s functionality or security.'}
                  </span>
                </div>
              </div>
              <div className='flex flex-col justify-center mt-4'>
                <span className='font-medium text-[24px] max-sm:text-[14px] leading-[32px] max-sm:leading-[24px] text-Sc text-[#323F4B]'>
                  5. {isCN ? '责任限制' : 'Limitation of Liability'}
                </span>
                <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-[#323F4B]'>
                  {isCN
                    ? 'Fishcake按“原样”提供，并且我们不保证其可用性、准确性或可靠性。我们不对使用该应用程序产生的任何损害负责。'
                    : 'Fishcake provides web3 solution for token incentive marketing. You must be at least 18 years old to use the app.'}
                </span>
              </div>
              <div className='flex flex-col justify-center mt-4'>
                <span className='font-medium text-[24px] max-sm:text-[14px] leading-[32px] max-sm:leading-[24px] text-Sc text-[#323F4B]'>
                  6. {isCN ? '适用法律和司法管辖权' : 'Governing Law & Jurisdiction'}
                </span>
                <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-[#323F4B]'>
                  {isCN
                    ? '这些条款和条件受美国法律管辖。任何争议应在美国法院解决。'
                    : 'These terms and conditions are governed by the laws of United States. Any disputes shall be resolved in the courts of United States.'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Term;
