'use client';

import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

interface ReCaptchaProviderProps {
  children: React.ReactNode;
}

const ReCaptchaProvider: React.FC<ReCaptchaProviderProps> = ({ children }) => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';
  
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default ReCaptchaProvider;