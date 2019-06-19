import React from 'react';

const RunnerList = ({legs}) => (
  <ol className='runnerList'>
    {legs.map((runner, i) => {
      return (<li key={i}>{runner}</li>)
    })}
  </ol>
);


export default RunnerList;
