import React from 'react';
import Category from './Category';
import GridSkeleton from '@/components/skeletons/GridSkeleton';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { Movies } from '@/types';

type CategoryPageProps = {
  movies: {
    data: InfiniteData<Movies> | undefined;
    fetchNextPage: (
      options?: FetchNextPageOptions | undefined
    ) => Promise<InfiniteQueryObserverResult<Movies, unknown>>;
    hasNextPage: boolean | undefined;
    isFetchingNextPage: boolean;
  };
};

const CategoryPage = ({ movies }: CategoryPageProps) => {
  return (
    <div>
      <InfiniteScroll
        dataLength={
          movies.data?.pages.flatMap((page) => page.results).length || 0
        }
        next={movies.fetchNextPage}
        hasMore={!!movies.hasNextPage}
        loader={<h4>Loading...</h4>}
      >
        {movies.data ? (
          <Category
            movies={movies.data.pages.flatMap((page) => page.results)}
            category="Popular"
          />
        ) : (
          <GridSkeleton />
        )}
      </InfiniteScroll>
    </div>
  );
};

export default CategoryPage;
