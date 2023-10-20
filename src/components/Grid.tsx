import React, { ReactNode } from 'react';

type GridProps = {
  header?: string;
  children: ReactNode;
};

const Grid = ({ header, children }: GridProps) => {
  return (
    <div className="max-w-6xl mx-auto py-5 px-5 xl:px-0">
      <h1 className="py-5 font-bold text-4xl">{header}</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8">
        {children}
      </div>
    </div>
  );
};

export default Grid;
