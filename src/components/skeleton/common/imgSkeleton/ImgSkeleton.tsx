import React, { useEffect, useState } from 'react';

import { Skeleton } from 'components/ui/skeleton';

interface Props {
  src: string;
  alt: string;
  className: string;
  trigger?: any;
}

const ImgSkeleton = ({ src, alt, className, trigger }: Props) => {
  const [imgIsLoading, setImgIsLoading] = useState(true);

  const handleImgLoad = () => {
    setImgIsLoading(false);
  };

  useEffect(() => {
    setImgIsLoading(true);
  }, [trigger]);

  return (
    <>
      <Skeleton className={`${className} ${imgIsLoading ? 'block' : 'hidden'}`} />
      <img
        src={src}
        alt={alt}
        onLoad={handleImgLoad}
        className={`${className} ${imgIsLoading ? 'hidden' : 'block'}`}
      />
    </>
  );
};

export default ImgSkeleton;
