import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 flex items-center w-full h-[48px] px-5 border-b bg-white z-10">
      <h1
        onClick={onClickLogo}
        className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 cursor-pointer"
      >
        RSQURE
      </h1>
    </header>
  );
};

export default Header;
