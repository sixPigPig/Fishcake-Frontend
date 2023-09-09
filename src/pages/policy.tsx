import React, { useContext } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';


import { LangContext } from './_app';

const Policy: NextPage = () => {
  const { isCN } = useContext(LangContext);
  return (
    <>
      <Head>
        <title>Fishcake-Policy</title>
        <link rel='shortcut icon' type='image/x-icon' href='./image/Fishcake.ico' />
      </Head>
      <div className='flex w-full'>
        <div className='flex flex-row px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px] mt-[70px] mb-[70px] max-md:mt-[40px] w-inherit'>
          <div className='flex flex-col w-full p-8 rounded-lg bg-slate-100'>
            <div className='flex flex-col items-center justify-center'>
              <span className='font-medium text-[32px] max-sm:text-[17px] leading-[40px] max-sm:leading-[24px] text-Sc text-center text-[#323F4B]'>
                {isCN ? '隐私政策' : 'Privacy Policy'}
              </span>
              <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[28px] max-sm:leading-[20px] text-Sc text-center text-[#323F4B]'>
                {isCN
                  ? 'Fishcake致力于保护您的个人信息的隐私和安全。'
                  : 'Fishcake is committed to protecting the privacy and security of your personal information.'}
              </span>
              <span className='font-normal text-[18px] max-sm:text-[12px] leading-[28px] max-sm:leading-[20px] text-Sc text-center text-[#323F4B]'>
                {isCN
                  ? '本隐私政策概述了我们在您使用我们的基于Web3的地图营销应用程序（“应用程序”）时如何收集、使用和保护您的数据。'
                  : 'This Privacy Policy outlines how we collect, use, and safeguard your data when you use our Web3-based, map-based marketing application.'}
              </span>
              <span className='font-normal text-[18px] max-sm:text-[12px] leading-[28px] max-sm:leading-[20px] text-Sc text-center text-[#323F4B]'>
                {isCN
                  ? '通过使用应用程序，您同意本隐私政策所述的做法。'
                  : 'By using the App, you consent to the practices described in this Privacy Policy.'}
              </span>
            </div>
            <div className='flex flex-col mx-8 max-sm:mx-0'>
              <div className='flex flex-col justify-center mt-8'>
                <span className='font-medium text-[24px] max-sm:text-[14px] leading-[32px] max-sm:leading-[24px] text-Sc text-[#323F4B]'>
                  1. {isCN ? '信息收集' : 'Information Collection'}
                </span>
                <div className='flex flex-col'>
                  <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-[#323F4B]'>
                    -{' '}
                    {isCN
                      ? '用户位置数据：应用程序收集您的位置数据，以向您提供来自当地企业的基于位置的活动促销。'
                      : 'User Location Data: The App collects your location data to provide you with location-based event promotions from local businesses.'}
                  </span>
                  <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-[#323F4B]'>
                    -{' '}
                    {isCN
                      ? '用户账户信息：当您在应用程序上创建账户时，我们会收集您的钱包地址和您提供的任何其他信息，以验证您的身份并提升您的用户体验。'
                      : 'User Account Information: When you create an account with the App, we collect your wallet address and any other information you provide to authenticate your identity and enhance your user experience.'}
                  </span>
                </div>
              </div>
              <div className='flex flex-col justify-center mt-4'>
                <span className='font-medium text-[24px] max-sm:text-[14px] leading-[32px] max-sm:leading-[24px] text-Sc text-[#323F4B]'>
                  2. {isCN ? '信息使用' : 'Use of Information'}
                </span>
                <div className='flex flex-col'>
                  <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-[#323F4B]'>
                    -{' '}
                    {isCN
                      ? '个性化促销：我们使用您的位置数据向您提供来自附近企业的个性化促销，以匹配您的偏好。您的数据将匿名化，以确保隐私和数据安全。'
                      : 'Personalized Promotions: We use your location data to deliver personalized promotions from nearby businesses that match your preferences. Your data is anonymized to ensure privacy and data security.'}
                  </span>
                  <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-[#323F4B]'>
                    -{' '}
                    {isCN
                      ? '用户奖励：企业可能会为您参与其营销活动提供代币奖励。您的账户信息可能会用于促进这些奖励的分发。'
                      : 'User Rewards: Businesses may offer token rewards for your participation in their marketing campaigns. Your account information may be used to facilitate the distribution of these rewards.'}
                  </span>
                </div>
              </div>
              <div className='flex flex-col justify-center mt-4'>
                <span className='font-medium text-[24px] max-sm:text-[14px] leading-[32px] max-sm:leading-[24px] text-Sc text-[#323F4B]'>
                  3. {isCN ? '数据安全' : 'Data Security'}
                </span>
                <div className='flex flex-col'>
                  <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-[#323F4B]'>
                    {isCN
                      ? '我们采用行业标准的安全措施，以保护您的数据免受未经授权的访问、披露或更改。然而，请注意，互联网上的数据传输不能保证百分之百安全，我们无法保证您提供给我们的任何信息的安全性。'
                      : 'We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or alteration. However, please note that no data transmission over the internet can be guaranteed to be 100% secure, and we cannot guarantee the security of any information you provide to us.'}
                  </span>
                </div>
              </div>
              <div className='flex flex-col justify-center mt-4'>
                <span className='font-medium text-[24px] max-sm:text-[14px] leading-[32px] max-sm:leading-[24px] text-Sc text-[#323F4B]'>
                  4. {isCN ? '数据共享' : 'Data Sharing'}
                </span>
                <div className='flex flex-col'>
                  <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-[#323F4B]'>
                    {isCN
                      ? '仅当您选择参与其促销活动时，您的数据才会与当地企业共享。我们不会与任何第三方共享您的精确位置坐标'
                      : 'Your data is shared with local businesses only when you choose to participate in their promotions. We do not share your precise location coordinates with any third parties.'}
                  </span>
                </div>
              </div>
              <div className='flex flex-col justify-center mt-4'>
                <span className='font-medium text-[24px] max-sm:text-[14px] leading-[32px] max-sm:leading-[24px] text-Sc text-[#323F4B]'>
                  5. {isCN ? '数据保留' : 'Data Retention'}
                </span>
                <div className='flex flex-col'>
                  <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-[#323F4B]'>
                    {isCN
                      ? '我们将保留您的位置数据和账户信息，只要这是为了向您提供我们的服务所必需的。您有权随时要求删除您的数据。'
                      : 'We retain your location data and account information for as long as it is necessary to provide you with our services. You have the right to request the deletion of your data at any time.'}
                  </span>
                </div>
              </div>
              <div className='flex flex-col justify-center mt-4'>
                <span className='font-medium text-[24px] max-sm:text-[14px] leading-[32px] max-sm:leading-[24px] text-Sc text-[#323F4B]'>
                  6. {isCN ? '儿童隐私' : 'Children&apos;s Privacy'}
                </span>
                <div className='flex flex-col'>
                  <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-[#323F4B]'>
                    {isCN
                      ? '该应用程序不适用于18岁以下的个人使用。我们不会有意收集儿童的个人信息。如果您是父母或监护人，并认为您的孩子向我们提供了个人信息，请与我们联系，我们将从我们的系统中删除该信息。'
                      : 'The App is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will delete the information from our systems.'}
                  </span>
                </div>
              </div>
              <div className='flex flex-col justify-center mt-4'>
                <span className='font-medium text-[24px] max-sm:text-[14px] leading-[32px] max-sm:leading-[24px] text-Sc text-[#323F4B]'>
                  7. {isCN ? '隐私政策变更' : 'Changes to Privacy Policy'}
                </span>
                <div className='flex flex-col'>
                  <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-[#323F4B]'>
                    {isCN
                      ? '我们可能会不时更新本隐私政策，以反映我们的数据实践的变化。请定期查阅本政策。'
                      : 'We may update this Privacy Policy from time to time to reflect changes in our data practices. Please review this Policy periodically.'}
                  </span>
                </div>
              </div>
              <div className='flex flex-col justify-center mt-4'>
                <span className='font-normal text-[18px] mt-4 max-sm:text-[12px] leading-[24px] max-sm:leading-[20px] text-Sc text-[#323F4B] underline'>
                  {isCN
                    ? '如果您对我们的隐私政策或应用程序的数据实践有任何疑问或顾虑，请通过info@fishcake.io与我们联系。'
                    : 'If you have any questions or concerns about our Privacy Policy or the App&apos;s data practices, please contact us at info@fishcake.io.'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policy;
