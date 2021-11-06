import { useEffect, useState } from "react";

const INTERVAL_PERIOD = 600;
const TEXTS = [
  "software dev",
  "music producer",
  "husband",
  "dog lover",
  "van-traveler",
];

function Home(props) {
  const [text_id, setId] = useState(0);
  const [text, setText] = useState(TEXTS[0]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setId(text_id + 1);
      if (text_id === TEXTS.length - 1) {
        setId(0);
      }
      setText(TEXTS[text_id]);
    }, INTERVAL_PERIOD);

    return () => clearInterval(intervalID);
  }, [text_id]);

  return (
    <div>
      <h1 id="hi">Hi, I'm Bertrand,</h1>
      <h1>I'm a {text}</h1>
    </div>
  );
}

export default Home;
