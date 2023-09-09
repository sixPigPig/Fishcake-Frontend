/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useContext } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';


import { LangContext } from './_app';

const Explanation: NextPage = () => {
  const { isCN } = useContext(LangContext);
  return (
    <>
      <Head>
        <title>Fishcake-Explanation</title>
        <link rel='shortcut icon' type='image/x-icon' href='./image/Fishcake.ico' />
      </Head>
      <div className='flex flex-col justify-center w-full'>
        <div className='flex flex-col justify-center items-center px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px] mt-[70px] mb-[70px] max-md:mt-[40px] max-md:mb-[40px]'>
          <span className='font-medium text-[32px] max-sm:text-[15px] leading-[40px] max-sm:leading-[28px] text-center text-Inter text-[#323F4B] text-transparent bg-clip-text bg-gradient-to-r from-start to-end'>
            {isCN ? '挖矿机制解释（活动阶段）' : 'Mining Mechanism Explanation (Campaign Stage)'}
          </span>
          <span className='font-medium text-[18px] max-sm:text-[12px] leading-[32px] max-sm:leading-[20px] text-Inter text-[#323F4B] mt-6'>
            {isCN
              ? 'Fishcake引入了一种独特的挖矿机制，允许用户通过在我们的平台上举办活动推广来赚取代币。当用户完成他们的代币释放活动后，他们有机会直接从项目的总代币池中挖取代币。以下是其工作原理：'
              : 'Fishcake introduces a unique mining mechanism that allows users to earn tokens by holding event campaigns on' +
                'our platform. When users finished their token drop event, they have the opportunity to mine tokens directly' +
                "from the project's total token pool. Here's how it works:"}
          </span>
          <div className='flex flex-col gap-4 mt-4'>
            <span className='font-medium text-[18px] max-sm:text-[12px] leading-[32px] max-sm:leading-[20px] text-Inter text-[#323F4B]'>
              1. {isCN ? '基于活动消耗或参与的挖矿：' : 'Event Consumption or Participation-Based Mining:'}
            </span>
            <span className='font-normal text-[16px] max-sm:text-[12px] leading-[32px] max-sm:leading-[20px] text-Inter text-[#323F4B]'>
              {isCN
                ? '对于在平台上举办的每个FCC释放活动，活动发起人可以基于活动消耗的总代币数量的50％，或者参与者总数乘以20的50％，以较低的值为准来挖取代币。这意味着用户可以通过积极参与平台的活跃生态系统来挖取代币。'
                : 'For each FCC dropping event hosted on the platform, event initiator can mine tokens based on either 50% of' +
                  'the total tokens consumed of the event or 50% of the total number of participants multiplied by 20,' +
                  'whichever is the lower value. This means that users can mine tokens by actively contributing to the' +
                  "platform's vibrant ecosystem."}
            </span>
          </div>
          <div className='flex flex-col gap-4 mt-4'>
            <span className='font-medium text-[18px] max-sm:text-[12px] leading-[32px] max-sm:leading-[20px] text-Inter text-[#323F4B]'>
              2. {isCN ? '挖取代币的分配： ' : 'Distribution of Mined Tokens:'}
            </span>
            <span className='font-normal text-[16px] max-sm:text-[12px] leading-[32px] max-sm:leading-[20px] text-Inter text-[#323F4B]'>
              {isCN
                ? '通过活动挖取的代币中，80％将作为奖励分配给活动的发起人或创建者。这鼓励用户提出令人兴奋和吸引人的活动，促进社区内的创造力和积极参与。其余20％的挖取代币将分配给Fishcake平台，以此方式回馈并支持平台的整体可持续性和发展。'
                : 'Of the tokens mined through the event, 80% will be rewarded to the initiator or creator of the event. This' +
                  'incentivizes users to come up with exciting and engaging activities, fostering creativity and active' +
                  'participation within the community. The remaining 20% of the mined tokens will be allocated to Fishcake' +
                  'platform as a way to give back and support the overall sustainability and development of the platform.'}
            </span>
          </div>
          <span className='font-medium text-[16px] max-sm:text-[12px] leading-[32px] max-sm:leading-[20px] text-Inter text-[#323F4B] mt-4'>
            {isCN
              ? '该挖矿机制旨在奖励和鼓励用户在平台上的参与，同时承认和支持组织和举办令人兴奋的奖励活动的人的努力。它创造了一个充满活力和有回报的环境，其中平台的成功直接与社区成员的集体努力和贡献相关联。'
              : 'The mining mechanism aims to reward and encourage user engagement on the platform while also acknowledging' +
                'and supporting the efforts of those who organize and host exciting rewarding events. It creates a dynamic' +
                'and rewarding environment where the success of the platform is directly tied to the collective efforts and' +
                'contributions of its community members.'}
          </span>
        </div>
      </div>
    </>
  );
};

export default Explanation;
