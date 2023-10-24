import React, { ReactNode } from 'react';

type GridProps = {
  header?: string;
  children: ReactNode;
};

const Grid = ({ children }: GridProps) => {
  return (
    <div className="max-w-6xl mx-auto py-5 px-5 xl:px-0">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8">
        {children}
      </div>
    </div>
  );
};

export default Grid;
