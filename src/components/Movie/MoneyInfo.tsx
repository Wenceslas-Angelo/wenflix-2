import React from 'react';
import calcTime from '../../utils/calcTime';
import convertMoney from '../../utils/convertMoney';

type MoneyInfoProps = {
  time: number;
  budget: number;
  revenue: number;
};

const MoneyInfo = ({ time, budget, revenue }: MoneyInfoProps) => {
  return (
    <div className="flex items-center flex-wrap justify-between md:justify-normal mt-10 font-medium">
      <span className="text-xl">Running time: {calcTime(time)}</span>
      <div className="hidden md:block w-[2px] mx-5 h-10 bg-primary" />
      <span className="text-xl">Budget: {convertMoney(budget)}</span>
      <div className="hidden md:block w-[2px] mx-5 h-10 bg-primary" />
      <span className="text-xl">Revenue: {convertMoney(revenue)}</span>
    </div>
  );
};

export default MoneyInfo;
