import React from 'react';

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return <main className="w-full min-h-screen pt-14 px-5">{children}</main>;
};

export default RootLayout;
