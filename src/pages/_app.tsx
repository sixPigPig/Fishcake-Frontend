import React, { createContext, useEffect, useRef, useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import isMobile from 'is-mobile';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import HeaderMob from '@/components/Header/HeaderMob';
import { headers } from '@/components/Header/menus';

interface Context {
  isCN: number,
  setIsCN: Function
}

export const LangContext = createContext<Context>({
  isCN: 0,
  setIsCN: () => {}
});

const App = ({ Component, pageProps }: AppProps) => {
  const [isInit, setIsInit] = useState(false);
  const [isMobilePage, setIsMobile] = useState(false);
  const [isCN, setIsCN] = useState(0);
  useEffect(() => {
    setIsCN(Number(localStorage.getItem('isCN')));
  }, []);
  const isMobLastStatus = useRef<Boolean | null>(null);
  const router = useRouter();
  useEffect(() => {
    setIsInit(false);
    const isMob = isMobile();
    const header = headers.find((item) => item.Link === router.pathname);
    if (isMob) {
      if (header && header.convertToMob) {
        if (isMobLastStatus.current !== null && isMobLastStatus.current === false) location.reload();
        setIsMobile(true);
        Promise.all([import('amfe-flexible'), import('@/styles/tailwind-mob.css')]).finally(() => {
          setIsInit(true);
          isMobLastStatus.current = true;
        });
        return;
      }
    }
    if (isMobLastStatus.current !== null && isMobLastStatus.current === true) location.reload();
    setIsMobile(false);
    import('@/styles/tailwind.css').finally(() => {
      setIsInit(true);
      isMobLastStatus.current = false;
    });
  }, [router.pathname]);
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
         />
      </Head>
      <LangContext.Provider value={{ isCN, setIsCN }}>
        {isInit && (isMobilePage ? (
          <>
            <HeaderMob />
            <Component {...pageProps} />
          </>
      ) : (
        <>
          <Header />
          <Component {...pageProps} />
          {!isMobile() && <Footer />}
        </>
      ))}
      </LangContext.Provider>
      
    </>
  );
};

export default App;
