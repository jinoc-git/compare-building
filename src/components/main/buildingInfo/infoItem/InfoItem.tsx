import React from 'react';

interface Props {
  title: string;
  content: string;
}

const InfoItem = ({ title, content }: Props) => {
  return (
    <div className="flex justify-between items-center w-full min-w-[300px] h-8 border-b-2">
      <p>{title}</p>
      <p className=" font-semibold">{content}</p>
    </div>
  );
};

export default InfoItem;
