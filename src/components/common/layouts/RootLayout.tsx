import React from 'react';

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <main className="w-full border border-black m-3 p-1">{children}</main>
    </>
  );
};

export default RootLayout;
