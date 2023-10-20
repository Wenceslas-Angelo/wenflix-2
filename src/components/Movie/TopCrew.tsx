import React, { useState } from 'react';
import Grid from '../Grid';
import Credit from './Credit';
import { Crew } from '../../types';

type TopCrewProps = {
  crews: Crew[];
};

const TopCrew = ({ crews }: TopCrewProps) => {
  const initialVisible = crews.length > 10 ? 10 : crews.length;
  const [visible, setVisible] = useState(initialVisible);
  return (
    <div>
      <Grid header="Top Crew">
        {crews
          .slice(0, visible)
          .map((crew) =>
            crew.profile_path ? (
              <Credit
                key={`${crew.id}-${crew.job}`}
                profile_path={crew.profile_path}
                name={crew.name}
                character={crew.job}
              />
            ) : null
          )}
      </Grid>

      {visible < crews.length ? (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setVisible(crews.length)}
            className="border border-green  text-green px-10 py-3 text-xl font-semibold rounded-xl uppercase"
          >
            Load All Crews
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default TopCrew;
