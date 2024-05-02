import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate('/');
  };

  return (
    <header className="flex items-center w-full h-[48px] px-3">
      <h1 onClick={onClickLogo} className="text-xl font-bold cursor-pointer">
        RSQURE
      </h1>
    </header>
  );
};

export default Header;
