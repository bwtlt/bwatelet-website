import { React, useEffect, useState } from 'react';

const INTERVAL_PERIOD = 120;
const TEXTS = [
  'software dev',
  'music producer',
  'husband',
  'dog lover',
  'van-traveler',
];

const Home = function () {
  const [textId, setId] = useState(0);
  const [charId, setCharId] = useState(0);
  const [text, setText] = useState(TEXTS[0]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCharId(charId + 1);
      if (charId === TEXTS[textId].length + 1) {
        setCharId(0);
        setId(textId + 1);
        if (textId === TEXTS.length - 1) {
          setId(0);
        }
        setText(`${TEXTS[textId]}.`);
      } else {
        setText(TEXTS[textId].substring(0, charId));
      }
    }, INTERVAL_PERIOD);

    return () => clearInterval(intervalID);
  }, [textId, charId]);

  return (
    <div id="hi">
      <h1>Hi, I&apos;m Bertrand,</h1>
      <h1>
        I&apos;m a
        {' '}
        <span className="typewriter">
          {text}
        </span>
      </h1>
    </div>
  );
};

export default Home;
