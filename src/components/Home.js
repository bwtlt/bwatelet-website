import { React, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const INTERVAL_PERIOD = 120;
const TEXTS = [
  'développeur logiciel',
  'musicien',
  'mari',
  'papa',
  'voyageur en van',
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
      <div>Bonjour, je suis Bertrand,</div>
      <div>
        je suis un
        {' '}
        <span className="typewriter">
          {text}
        </span>
      </div>
      <p className="intro">
        Un site web, une appli ou un logiciel à créer ?
        <br />
        Entrons en contact !
      </p>
      <div className="contact">
        <Button className="contact-me" href="mailto:contact@bwatelet.fr">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Contactez-moi</span>
        </Button>
      </div>
    </div>
  );
};

export default Home;
