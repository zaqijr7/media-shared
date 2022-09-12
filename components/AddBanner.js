import React, { useEffect } from 'react';

function AdBanner() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle adbanner-customize"
      style={{
        display: 'block',
      }}
      data-ad-client="ca-pub-5747637351574898"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

export default AdBanner;
