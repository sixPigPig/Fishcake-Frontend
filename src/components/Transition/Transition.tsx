/* eslint-disable-next-line react/jsx-props-no-spreading */
/* eslint-disable react/jsx-props-no-spreading */

import { forwardRef, Ref } from 'react';
import { motion } from 'framer-motion';
import { variants, variantsType } from '@/utils/Setting';

interface transitionEffectProps {
  effect?: keyof variantsType;
  duration?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
  children: React.ReactNode;
  className?: string;
}

const TransitionEffect = forwardRef(
  (
    {
      effect = 'fadeIn',
      duration = 1,
      delay = 0,
      threshold = 0.25,
      once = true,
      children,
      className = '',
      ...props
    }: transitionEffectProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <motion.div
        variants={variants[effect]}
        initial='notInView'
        whileInView='inView'
        viewport={{ amount: threshold, once: once }}
        transition={{
          duration: duration,
          delay: delay,
          type: 'spring',
          bounce: 0.35,
        }}
        className={className}
        {...props}
        ref={ref}
      >
        {children}
      </motion.div>
    );
  }
);

export default TransitionEffect;