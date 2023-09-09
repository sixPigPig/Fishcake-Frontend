/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useContext, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Guide1 from '~/image/Guide/1.png';
import Guide2 from '~/image/Guide/2.png';
import Guide3 from '~/image/Guide/3.png';
import Guide4 from '~/image/Guide/4.png';
import Guide5 from '~/image/Guide/5.png';
import Guide6 from '~/image/Guide/6.png';
import Guide7 from '~/image/Guide/7.png';
import Guide8 from '~/image/Guide/8.png';
import Guide9 from '~/image/Guide/9.png';
import Guide10 from '~/image/Guide/10.png';
import Guide11 from '~/image/Guide/11.png';
import Guide12 from '~/image/Guide/12.png';
import Guide13 from '~/image/Guide/13.png';
import Guide14 from '~/image/Guide/14.png';
import Guide15 from '~/image/Guide/15.png';
import Guide16 from '~/image/Guide/16.png';
import Guide17 from '~/image/Guide/17.png';
import Guide18 from '~/image/Guide/18.png';
import Guide19 from '~/image/Guide/19.png';
import Guide20 from '~/image/Guide/20.png';
import Guide21 from '~/image/Guide/21.png';
import Guide22 from '~/image/Guide/22.png';
import Guide23 from '~/image/Guide/23.png';
import Guide24 from '~/image/Guide/24.png';
import Guide25 from '~/image/Guide/25.png';
import Guide26 from '~/image/Guide/26.png';
import Guide27 from '~/image/Guide/27.png';
import { LangContext } from './_app';
import Accordian from '@/components/Accordian/Accordian';
import Tab from '@/components/Tab/Tab';
import AccordianHeader from '@/components/AccordianHeader/AccordianHeader';

const Guide: NextPage = () => {
  const [isActive, setIsActive] = useState(0);
  const [active, setActive] = useState(1);
  const onAccordianClick = (index: any) => {
    setIsActive(index);
  };
  const showTab = (index: any) => {
    setActive(index);
  };
  const { isCN } = useContext(LangContext);
  const texts = isCN
    ? [
        '让Fishcake带您踏上Web3之旅！开始探索并赚取您的第一个Token 奖励！',
        '安装 Metamask',
        '我们支持大多数拥有市场信誉的钱包服务。',
        '让我们以受欢迎的的自托管钱包Metamask为例。',
        '创建一个新钱包',
        '点击“创建钱包”以创建一个新的以太坊钱包。',
        '为您的钱包创建一个密码并保存好。',
        '安全保存您的助记词',
        '点击灰色区域以解锁您的助记词。务必安全地妥善保存这个助记词。任何知道它的人都能够访问您的以太坊钱包，如果没有它，您将无法恢复您的钱包。',
        '按照正确的顺序点击助记词的单词（1）以证明您已正确地将它们写下来。然后，点击“确认”（2）。您的Metamask钱包已经准备好用于交易。',
        '添加并切换到Polygon网络',
        '添加Fishcake coin 到您的资产!',
        'FCC 代币地址: 0x67AAFdb3aD974A6797D973F00556c603485F7158',
        'Fishcake coin 代码: FCC',
        '打开APP，阅读使用协议和隐私条款 开始浏览和赢取Fishcake coin',
        '链接钱包地址， 在您的钱包中授权地址连接.现在您可以浏览和赢取Fishcake 生态上的奖励了！ ',
        '默认情况下，您将使用“用户版”模式的应用程序。现在，您可以浏览并参与附近正在进行的代币奖励活动！在前往活动地点领取奖励之前，请确保活动组织者已提供足够的信息供您验证促销的有效性。',
        '要参加代币释放活动，您需要与活动发起者进行实际互动，可能需要访问商店、消费一定金额等。一旦您在Fishcake上“领取奖励”，活动发起者（商家）可以通过扫描您的QR码来确认这个奖励。（商家也可以根据双方协议在线验证奖励。尽管我们不建议此类操作，但我们很高兴见证通过Fishcake增强人们的参与和信任的任何互动！）',
        '在手机上安装Fishcake应用程序并连接钱包',
        '打开APP，阅读使用协议和隐私条款 开始浏览和赢取Fishcake coin',
        '连接您的钱包，授权从您的钱包连接，切换到商家版。现在，您已准备好创建自己的Fishcake活动推广！ ',
        '在APP中的Dropping界面发起您自己的推广建立活动，填写活动的详情和奖励。',
        '创建奖励活动，它将引导您前往钱包进行授权：批准FCC奖励金额，并确认活动合约。您的Fishcake活动推广将在我们的应用程序上发布，而整个活动将由我们的Fishcake_Controller智能合约操作。',
        '在Dropping 界面可以浏览和管理您正在进行中的活动，扫描活动参与者的活动二维码来验证分发奖励。 ',
        '在活动结束后您可以点击“End The Event” , 活动未分发完的奖励将会从活动奖池合约中返回给您的钱包地址。',
        '作为活动发起者（商家）和生态系统贡献者，涉及到Fishcake挖矿机制，您将在完成活动时自动获得相应的FCC生态奖励。请关注我们的社交账号和社群动态，随时了解我们的挖矿奖励更新。',
        '我们创新的挖矿机制致力于奖励和激励生态系统活动，确保去中心化的代币分配，打造一个健康、可持续和公平的Web3生态系统。',
        '安装注册MetaMask钱包来管理你的数字资产。',
        '在Fishcake上链接你的钱包，开始浏览‘、参与本地的营销活动来赢取代币奖励！',
        '商家/发起者模式： 学习如何在Fishcake上开展自己的营销奖励推广活动，消除中间商。通过智能合约管理和运营，实现100%的推广有效性。在Fishcake上推广您的业务，扩展您的影响力，奖励您的客户，培养更强的互动 - 一切都在Fishcake上实现！'
      ]
    : [
        'Let Fishcake take you on the Web3 journey!',
        'Install Metamask',
        'We support most reputable wallet services in the market.',
        'Let’s use the most popular self-custodial wallet: MetaMask as Illustration',
        'Setup a new wallet',
        'Click on “Create a Wallet” to make a new Ethereum wallet.',
        'Create a password for your wallet and save it.',
        'Safely store your seed phrase',
        'Click on the grey area to unlock your seed phrase. Be sure to store this seed phrase safely. Anyone who knows it will be able to access your Ethereum wallet, and you will not be able to recover your wallet without it.',
        'Click on your seed phrase’s words in the right order (1) to prove that you have written them down correctly. Then, click “Confirm” (2). Your Metamask wallet is ready for use in transactions.',
        'Add & Switch to Polygon network',
        'Add Fishcake coin to your asset',
        'Token Address: 0x67AAFdb3aD974A6797D973F00556c603485F7158',
        'Token symbol: FCC',
        'Read and agree the Terms& Condition and Privacy Policy. Now you are ready to start browsing and earning on Fishcake.',
        'Connect your wallet， authorize connection from your wallet. Now your are ready to start browsing and earning on Fishcake!',
        'You will be using the app in “user edition” mode by default. (Switch to “merchant edition” guidance to create your own Fishcake campaign!) Now, you can browse and participate nearby ongoing token reward events! Before proceeding to the event location to claim rewards, please ensure that the event organizer has provided sufficient information for you to verify the validity of the promotion. ',
        "To participate the token dropping event, you’ll need to physically interact with the event organizer, it could be visiting the store, spend certain amount of money etc., Once you “Claim reward” on Fishcake, the event initiator (merchant) can confirm this reward by scanning your QR code. (Merchant can also verify rewards online, based on mutual agreements. While we do not recommend such operations, we are delighted to witness any interactions that enhance people's engagement and trust through Fishcake!)",
        'Install Fishcake APP on your phone and connect your wallet.',
        'Read and agree the Terms& Condition and Privacy Policy. Now you are ready to start browsing and earning on Fishcake.',
        'Connect your wallet， authorize connection from your wallet, Switch to Merchant Edition. Now your are ready to create your own Fishcake campaign event!',
        'Initiate new rewarding event in DROPPING section, fill up event details!',
        'Create Rewarding Event, it will direct you to the wallet for authorization: approve the FCC rewarding amount, and confirm event contract. Your Fishcake campaign event will be published on our App, the the full event will be operated by our Fishcake_Controller smart contract.',
        "You can view and manage your events at DROPPING section, scan participator's event QR code to verify the rewards.",
        'You will be able to “End The Event” once event expired, the remaining rewarding token will be refunded to you from event rewarding pool .',
        'As event initiator (Merchant) and ecosystem contributor, refers to Fishcake Mining Mechanism, you will earn corresponding FCC as ecosystem rewards automatically while finishing the event. Follow our social accounts and community updates to stay informed about our mining reward updates in real-time.',
        'Our innovative mining mechanism is dedicated to rewarding and incentivizing ecosystem activity, ensuring decentralized token allocation, and creating a healthy, sustainable, and fair web3 ecosystem.',
        'How to install and register a wallet to manage your digital assets with MetaMask!',
        'Connect your wallet on Fishcake , begin browsing and earning by participating local rewarding events!',
        'Merchant/Initiator Edition: Learn how to launch campaigns for your own business or events on Fishcake. Eliminating intermediaries. Achieve 100% effectiveness with tokenized marketing and incentivization managed and operated by smart contracts. Promote your business, expand your reach, reward your audience, and cultivate stronger engagements – all on Fishcake!'
      ];
  return (
    <>
      <Head>
        <title>Fishcake-Guide</title>
        <link rel='shortcut icon' type='image/x-icon' href='./image/Fishcake.ico' />
      </Head>
      <div className='flex flex-col justify-center w-full'>
        <div className='flex flex-col justify-center items-center px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px] mt-[70px] max-md:mt-[40px] gap-4'>
          <span className='font-medium text-[32px] max-sm:text-[15px] leading-[40px] max-sm:leading-[28px] text-center text-Inter text-[#323F4B] text-transparent bg-clip-text bg-gradient-to-r from-start to-end'>
            {texts[0]}
          </span>
          <div>
            <ul className='flex flex-row justify-between mt-6 gap-y-2'>
              <Tab index={1} active={active} text="Metamask" showTab={() =>showTab(1)} />
              <Tab index={2} active={active} text="User Edition" showTab={() =>showTab(2)} />
              <Tab index={3} active={active} text="Initiator Edition" showTab={() =>showTab(3)} />
            </ul>
          </div>
        </div>
        {active === 1 && (
          <div className='flex flex-col px-[120px] max-sm:px-[30px] sm:max-xl:px-[60px] mt-8 pb-[70px] gap-1'>
            <span className='font-medium text-[18px] max-sm:text-[12px] leading-[24px] max-sm:leading-[18px] text-center text-Inter text-[#323F4B]'>{texts[27]}</span>
            <div className='mt-4'>
              <AccordianHeader index={1} active={isActive} text={texts[1]} onAccordianClick={() => onAccordianClick(1)} />
              <Accordian index={1} isActive={isActive}>
                <div className='flex flex-col justify-center items-center bg-[#F1F3F5] mx-4 px-8 pt-4 pb-8 rounded-b-2xl'>
                  <div className='flex flex-col items-center justify-center'>
                    <span className='font-medium text-[18px] max-sm:text-[12px] leading-[32px] max-sm:leading-[20px] text-Inter text-center text-[#323F4B]'>
                      {texts[2]}
                    </span>
                    <span className='font-medium text-[18px] max-sm:text-[12px] leading-[32px] max-sm:leading-[20px] text-Inter text-center text-[#323F4B]'>
                      {texts[3]}
                    </span>
                  </div>
                  <div className='flex flex-row justify-between w-full gap-4 mt-4 max-sm:flex-col max-sm:gap-8'>
                    <div className='flex flex-col items-center justify-center flex-1'>
                      <span className='font-medium text-[18px] max-sm:text-[12px] leading-[24px] max-sm:leading-[18px] text-center text-Inter text-[#323F4B] underline'>
                        iOS
                      </span>
                      <Image src={Guide1} alt='Guide1' className='mt-4  rounded-lg w-[65%]' loading='lazy' />
                    </div>
                    <div className='flex flex-col items-center justify-center flex-1'>
                      <span className='font-medium text-[18px] max-sm:text-[12px] leading-[24px] max-sm:leading-[18px] text-center text-Inter text-[#323F4B] underline'>
                        Android
                      </span>
                      <Image src={Guide2} alt='Guide2' className='mt-4  rounded-lg w-[65%]' loading='lazy' />
                    </div>
                  </div>
                </div>
              </Accordian>
            </div>
            <div>
              <AccordianHeader index={2} active={isActive} text={texts[4]} onAccordianClick={() => onAccordianClick(2)} />
              <Accordian index={2} isActive={isActive}>
                <div className='flex flex-col justify-center items-center bg-[#F1F3F5] mx-4 px-8 pt-4 pb-8 rounded-b-2xl'>
                  <div className='flex flex-row justify-between w-full gap-4 mt-4 max-sm:flex-col max-sm:gap-8'>
                    <div className='flex flex-col items-center justify-center flex-1'>
                      <span className='font-medium text-[18px] max-sm:text-[12px] leading-[24px] max-sm:leading-[18px] text-center text-Inter text-[#323F4B] underline'>
                        {texts[5]}
                      </span>
                      <Image src={Guide3} alt='Guide3' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                    <div className='flex flex-col items-center justify-center flex-1'>
                      <span className='font-medium text-[18px] max-sm:text-[12px] leading-[24px] max-sm:leading-[18px] text-center text-Inter text-[#323F4B] underline'>
                        {texts[6]}
                      </span>
                      <Image src={Guide4} alt='Guide4' className='mt-4 rounded-lg w-[50%]' />
                    </div>
                  </div>
                </div>
              </Accordian>
            </div>
            <div>
              <AccordianHeader index={3} active={isActive} text={texts[7]} onAccordianClick={() => onAccordianClick(3)} />
              <Accordian index={3} isActive={isActive}>
                <div className='flex flex-col items-center bg-[#F1F3F5] mx-4 px-8 pt-4 pb-8 rounded-b-2xl'>
                  <div className='flex flex-row justify-between w-full gap-4 mt-4 max-sm:flex-col max-sm:gap-8'>
                    <div className='flex flex-col items-center justify-center flex-1'>
                      <span className='font-medium text-[18px] max-sm:text-[12px] leading-[24px] max-sm:leading-[18px] text-center text-Inter text-[#323F4B] underline'>
                        {texts[8]}
                      </span>
                      <Image src={Guide5} alt='Guide5' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                    <div className='flex flex-col items-center justify-center flex-1'>
                      <span className='font-medium text-[18px] max-sm:text-[12px] leading-[24px] max-sm:leading-[18px] text-center text-Inter text-[#323F4B] underline'>
                        {texts[9]}
                      </span>
                      <Image src={Guide6} alt='Guide6' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                  </div>
                </div>
              </Accordian>
            </div>
            <div>
              <AccordianHeader index={4} active={isActive} text={texts[10]} onAccordianClick={() => onAccordianClick(4)} />
              <Accordian index={4} isActive={isActive}>
                <div className='flex flex-col items-center bg-[#F1F3F5] mx-4 px-8 pt-4 pb-8 rounded-b-2xl'>
                  <div className='flex flex-row justify-between w-full gap-4 mt-4 max-sm:flex-col max-sm:gap-8'>
                    <div className='flex flex-col items-center justify-center flex-1'>
                      <Image src={Guide7} alt='Guide7' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                    <div className='flex flex-col items-center justify-center flex-1'>
                      <Image src={Guide8} alt='Guide8' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                  </div>
                </div>
              </Accordian>
            </div>
            <div>
              <AccordianHeader index={5} active={isActive} text={texts[11]} onAccordianClick={() => onAccordianClick(5)} />
              <Accordian index={5} isActive={isActive}>
                <div className='flex flex-col justify-center items-center bg-[#F1F3F5] mx-4 px-8 pt-4 pb-8 rounded-b-2xl'>
                  <div className='flex flex-row justify-between w-full gap-4 mt-4 max-sm:flex-col max-sm:gap-8'>
                    <div className='flex flex-col items-center justify-center flex-1'>
                      <Image src={Guide9} alt='Guide9' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                    <div className='flex flex-col items-center justify-center flex-1'>
                      <span className='font-medium text-[18px] max-sm:text-[12px] leading-[24px] max-sm:leading-[18px] text-center text-Inter text-[#323F4B] underline'>
                        {texts[12]}
                      </span>
                      <span className='font-medium text-[18px] max-sm:text-[12px] leading-[24px] max-sm:leading-[18px] text-center text-Inter text-[#323F4B] underline'>
                        {texts[13]}
                      </span>
                      <Image src={Guide10} alt='Guide10' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                  </div>
                </div>
              </Accordian>
            </div>
          </div>
        )}
        {active === 2 && (
          <div className='flex flex-col px-[120px] max-sm:px-[30px] sm:max-xl:px-[60px] mt-8 pb-[70px] gap-1'>
            <span className='font-medium text-[18px] max-sm:text-[12px] leading-[24px] max-sm:leading-[18px] text-center text-Inter text-[#323F4B]'>{texts[28]}</span>
            <div className='mt-4'>
              <AccordianHeader index={6} active={isActive} text="Install" onAccordianClick={() => onAccordianClick(6)} />
              <Accordian index={6} isActive={isActive}>
                <div className='flex flex-col justify-center items-center bg-[#F1F3F5] mx-4 px-8 pt-4 pb-8 rounded-b-2xl'>
                  <div className='flex flex-row justify-between w-full gap-4 mt-4 max-sm:flex-col max-sm:gap-8'>
                    <div className='flex flex-col items-center justify-end flex-1'>
                      <Image src={Guide11} alt='Guide11' className='mt-4 rounded-lg w-[40%]' loading='lazy' />
                    </div>
                    <div className='flex flex-col items-center justify-center flex-1'>
                      <span className='font-medium text-[18px] max-sm:text-[12px] leading-[24px] max-sm:leading-[18px] text-center text-Inter text-[#323F4B] underline'>
                        {texts[14]}
                      </span>
                      <Image
                        src={Guide12}
                        alt='Guide12'
                        className='mt-4 rounded-lg w-[40%] bg-white'
                        loading='lazy'
                      />
                    </div>
                  </div>
                </div>
              </Accordian>
            </div>
            <div>
              <AccordianHeader index={7} active={isActive} text="Connect" onAccordianClick={() => onAccordianClick(7)} />
              <Accordian index={7} isActive={isActive}>
                <div className='flex flex-col justify-center items-center bg-[#F1F3F5] mx-4 px-8 pt-4 pb-8 rounded-b-2xl'>
                  <div className='flex flex-col items-center justify-center mt-8'>
                    <span className='font-medium text-[18px] max-sm:text-[12px] leading-[32px] max-sm:leading-[20px] text-Inter text-center text-[#323F4B]'>
                      {texts[15]}
                    </span>
                  </div>
                  <div className='flex flex-row justify-between w-full gap-4 mt-4 max-sm:flex-col max-sm:gap-8'>
                    <div className='flex flex-col items-center flex-1'>
                      <Image src={Guide13} alt='Guide13' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                    <div className='flex flex-col items-center flex-1'>
                      <Image src={Guide14} alt='Guide14' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                    <div className='flex flex-col items-center flex-1'>
                      <Image
                        src={Guide15}
                        alt='Guide15'
                        className='mt-4 rounded-lg w-[50%] bg-white'
                        loading='lazy'
                      />
                    </div>
                  </div>
                </div>
              </Accordian>
            </div>
            <div>
              <AccordianHeader index={8} active={isActive} text="Browse" onAccordianClick={() => onAccordianClick(8)} /> 
              <Accordian index={8} isActive={isActive}>
                <div className='flex flex-col justify-center items-center bg-[#F1F3F5] mx-4 px-8 pt-4 pb-8 rounded-b-2xl'>
                  <div className='flex flex-col items-center justify-center mt-8'>
                    <span className='font-medium text-[18px] max-sm:text-[12px] leading-[32px] max-sm:leading-[20px] text-Inter text-center text-[#323F4B]'>
                      {texts[16]}
                    </span>
                  </div>
                  <div className='flex flex-row justify-between w-full gap-4 mt-4 max-sm:flex-col max-sm:gap-8'>
                    <div className='flex flex-col items-center flex-1'>
                      <Image src={Guide16} alt='Guide16' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                    <div className='flex flex-col items-center flex-1'>
                      <Image src={Guide17} alt='Guide17' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                    <div className='flex flex-col items-center flex-1'>
                      <Image src={Guide18} alt='Guide18' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                  </div>
                </div>
              </Accordian>
            </div>
            <div>
              <AccordianHeader index={9} active={isActive} text="Event" onAccordianClick={() => onAccordianClick(9)} />
              <Accordian index={9} isActive={isActive}>
                <div className='flex flex-col justify-center items-center bg-[#F1F3F5] mx-4 px-8 pt-4 pb-8 rounded-b-2xl'>
                  <div className='flex flex-col items-center justify-center mt-8'>
                    <span className='font-medium text-[18px] max-sm:text-[12px] leading-[32px] max-sm:leading-[20px] text-Inter text-center text-[#323F4B]'>
                      {texts[17]}
                    </span>
                  </div>
                  <div className='flex flex-row justify-between w-full gap-4 mt-4 max-sm:flex-col max-sm:gap-8'>
                    <div className='flex flex-col items-center flex-1'>
                      <Image src={Guide19} alt='Guide19' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                    <div className='flex flex-col items-center flex-1'>
                      <Image src={Guide20} alt='Guide20' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                    <div className='flex flex-col items-center flex-1'>
                      <Image src={Guide21} alt='Guide21' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                  </div>
                </div>
              </Accordian>
            </div>
          </div>
        )}
        {active === 3 && (
          <div className='flex flex-col px-[120px] max-sm:px-[30px] sm:max-xl:px-[60px] mt-8 pb-[70px] gap-1'>
            <span className='font-medium text-[18px] max-sm:text-[12px] leading-[24px] max-sm:leading-[18px] text-center text-Inter text-[#323F4B]'>{texts[29]}</span>
            <div className='mt-4'>
              <AccordianHeader index={10} active={isActive} text="Install" onAccordianClick={() => onAccordianClick(10)} />
              <Accordian index={10} isActive={isActive}>
                <div className='flex flex-col justify-center items-center bg-[#F1F3F5] mx-4 px-8 pt-4 pb-8 rounded-b-2xl'>
                  <div className='flex flex-row justify-between w-full gap-4 mt-4 max-sm:flex-col max-sm:gap-8'>
                    <div className='flex flex-col items-center justify-center flex-1'>
                      <span className='font-medium text-[18px] max-sm:text-[12px] leading-[24px] max-sm:leading-[18px] text-center text-Inter text-[#323F4B] underline'>
                        {texts[18]}
                      </span>
                      <Image src={Guide11} alt='Guide11' className='mt-4  rounded-lg w-[50%]' loading='lazy' />
                    </div>
                    <div className='flex flex-col items-center justify-center flex-1'>
                      <span className='font-medium text-[18px] max-sm:text-[12px] leading-[24px] max-sm:leading-[18px] text-center text-Inter text-[#323F4B] underline'>
                        {texts[19]}
                      </span>
                      <Image
                        src={Guide12}
                        alt='Guide12'
                        className='mt-4 rounded-lg w-[50%] bg-white'
                        loading='lazy'
                      />
                    </div>
                  </div>
                </div>
              </Accordian>
            </div>
            <div>
              <AccordianHeader index={11} active={isActive} text="Connect" onAccordianClick={() => onAccordianClick(11)} />
              <Accordian index={11} isActive={isActive}>
                <div className='flex flex-col justify-center items-center bg-[#F1F3F5] mx-4 px-8 pt-4 pb-8 rounded-b-2xl'>
                  <div className='flex flex-col items-center justify-center mt-8'>
                    <span className='font-medium text-[18px] max-sm:text-[12px] leading-[32px] max-sm:leading-[20px] text-Inter text-center text-[#323F4B]'>
                      {texts[20]}
                    </span>
                  </div>
                  <div className='flex flex-row justify-between w-full gap-4 mt-4 max-sm:flex-col max-sm:gap-8'>
                    <div className='flex flex-col items-center flex-1'>
                      <Image src={Guide13} alt='Guide13' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                    <div className='flex flex-col items-center flex-1'>
                      <Image src={Guide14} alt='Guide14' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                    <div className='flex flex-col items-center flex-1'>
                      <Image src={Guide15} alt='Guide15' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                  </div>
                </div>
              </Accordian>
            </div>
            <div>
              <AccordianHeader index={12} active={isActive} text="Initiate" onAccordianClick={() => onAccordianClick(12)} />
              <Accordian index={12} isActive={isActive}>
                <div className='flex flex-col justify-center items-center bg-[#F1F3F5] mx-4 px-8 pt-4 pb-8 rounded-b-2xl'>
                  <div className='flex flex-col items-center justify-center mt-8'>
                    <span className='font-medium text-[18px] max-sm:text-[12px] leading-[32px] max-sm:leading-[20px] text-Inter text-center text-[#323F4B]'>
                      {texts[21]}
                    </span>
                  </div>
                  <div className='flex flex-row justify-center w-[50%] gap-4 mt-4 max-sm:flex-col max-sm:gap-8'>
                    <Image src={Guide22} alt='Guide22' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                  </div>
                </div>
              </Accordian>
            </div>
            <div>
              <AccordianHeader index={13} active={isActive} text="Create Event" onAccordianClick={() => onAccordianClick(13)} />
              <Accordian index={13} isActive={isActive}>
                <div className='flex flex-col justify-center items-center bg-[#F1F3F5] mx-4 px-8 pt-4 pb-8 rounded-b-2xl'>
                  <div className='flex flex-col items-center justify-center mt-8'>
                    <span className='font-medium text-[18px] max-sm:text-[12px] leading-[32px] max-sm:leading-[20px] text-Inter text-center text-[#323F4B]'>
                      {texts[22]}
                    </span>
                  </div>
                  <div className='flex flex-row justify-between w-full gap-4 mt-4 max-sm:flex-col max-sm:gap-8'>
                    <div className='flex flex-col items-center flex-1'>
                      <Image src={Guide23} alt='Guide23' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                    <div className='flex flex-col items-center flex-1'>
                      <Image src={Guide24} alt='Guide24' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                  </div>
                </div>
              </Accordian>
            </div>
            <div>
              <AccordianHeader index={14} active={isActive} text="Manage Event" onAccordianClick={() => onAccordianClick(14)} />
              <Accordian index={14} isActive={isActive}>
                <div className='flex flex-col justify-center items-center bg-[#F1F3F5] mx-4 px-8 pt-4 pb-8 rounded-b-2xl'>
                  <div className='flex flex-col items-center justify-center mt-8'>
                    <span className='font-medium text-[18px] max-sm:text-[12px] leading-[32px] max-sm:leading-[20px] text-Inter text-center text-[#323F4B]'>
                      {texts[23]}
                    </span>
                  </div>
                  <div className='flex flex-row justify-between w-full gap-4 mt-4 max-sm:flex-col max-sm:gap-8'>
                    <div className='flex flex-col items-center flex-1'>
                      <Image src={Guide25} alt='Guide25' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                    <div className='flex flex-col items-center flex-1'>
                      <Image src={Guide21} alt='Guide21' className='mt-4 rounded-lg w-[50%]' loading='lazy' />
                    </div>
                  </div>
                </div>
              </Accordian>
            </div>
            <div>
              <AccordianHeader index={15} active={isActive} text="Finishing Event" onAccordianClick={() => onAccordianClick(15)} />
              <Accordian index={15} isActive={isActive}>
                <div className='flex flex-col justify-center items-center bg-[#F1F3F5] mx-4 px-8 pt-4 pb-8 rounded-b-2xl'>
                  <div className='flex flex-col items-center justify-center mt-8'>
                    <span className='font-medium text-[18px] max-sm:text-[12px] leading-[32px] max-sm:leading-[20px] text-Inter text-center text-[#323F4B]'>
                      {texts[24]}
                    </span>
                  </div>
                  <div className='flex flex-row justify-between w-full gap-4 mt-4 max-sm:flex-col max-sm:gap-8'>
                    <div className='flex flex-col items-center flex-1'>
                      <Image src={Guide26} alt='Guide26' className='mt-4 rounded-lg w-[25%]' loading='lazy' />
                    </div>
                  </div>
                </div>
              </Accordian>
            </div>
            <div>
              <AccordianHeader index={16} active={isActive} text="Profile" onAccordianClick={() => onAccordianClick(16)} />
              <Accordian index={16} isActive={isActive}>
                <div className='flex flex-col justify-center items-center bg-[#F1F3F5] mx-4 px-8 pt-4 pb-8 rounded-b-2xl'>
                  <div className='flex flex-col items-center justify-center mt-8'>
                    <span className='font-medium text-[18px] max-sm:text-[12px] leading-[32px] max-sm:leading-[20px] text-Inter text-center text-[#323F4B]'>
                      {texts[25]}
                    </span>
                  </div>
                  <div className='flex flex-row justify-between w-full gap-4 mt-4 max-sm:flex-col max-sm:gap-8'>
                    <div className='flex flex-col items-center flex-1'>
                      <Image src={Guide27} alt='Guide27' className='mt-4 rounded-lg w-[25%]' loading='lazy' />
                    </div>
                  </div>
                </div>
              </Accordian>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Guide;
