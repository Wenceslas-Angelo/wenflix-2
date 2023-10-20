import { Cast } from '../../types';
import React, { useState } from 'react';
import Grid from '../../components/Grid';
import Credit from './Credit';

type TopCastProps = {
  casts: Cast[];
};

const TopCast = ({ casts }: TopCastProps) => {
  const [visible, setVisible] = useState(10);
  return (
    <div>
      <Grid header="Top Cast">
        {casts
          .slice(0, visible)
          .map((cast) =>
            cast.profile_path ? (
              <Credit
                key={cast.id}
                profile_path={cast.profile_path}
                name={cast.name}
                character={cast.character}
              />
            ) : null
          )}
      </Grid>
      {visible < casts.length ? (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setVisible(casts.length)}
            className="border border-green  text-green px-10 py-3 text-xl font-semibold rounded-xl uppercase"
          >
            Load All Casts
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default TopCast;
