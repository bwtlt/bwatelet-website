import { React, useEffect, useState } from 'react';

const INTERVAL_PERIOD = 600;
const TEXTS = [
  'software dev',
  'music producer',
  'husband',
  'dog lover',
  'van-traveler',
];

const Home = function () {
  const [textId, setId] = useState(0);
  const [text, setText] = useState(TEXTS[0]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setId(textId + 1);
      if (textId === TEXTS.length - 1) {
        setId(0);
      }
      setText(TEXTS[textId]);
    }, INTERVAL_PERIOD);

    return () => clearInterval(intervalID);
  }, [textId]);

  return (
    <div>
      <h1 id="hi">Hi, I&apos;m Bertrand,</h1>
      <h1>
        I&apos;m a
        {' '}
        {text}
      </h1>
    </div>
  );
};

export default Home;
