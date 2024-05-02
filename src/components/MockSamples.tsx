import { useEffect } from 'react';

const MockSamples = () => {
  useEffect(() => {
    fetch('/buildings')
      .then((res) => res.json())
      .then(console.log);
    fetch('/building/KR0001')
      .then((res) => res.json())
      .then(console.log);
    fetch('/chart/KR0001')
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return null;
};

export default MockSamples;
