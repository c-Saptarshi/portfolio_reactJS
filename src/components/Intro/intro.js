import React from 'react';
import './intro.css';
import Typed from 'typed.js';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import dwnldImg from '../../assets/download.png';
import resume from '../../components/Intro/resume.pdf';

const Intro = () => {
  const line1Ref = React.useRef(null);
  const line2Ref = React.useRef(null);
  const line3Ref = React.useRef(null);
  const interestRef = React.useRef(null);

  React.useEffect(() => {
    const typedLine1 = new Typed(line1Ref.current, {
      strings: ['Hello!'],
      typeSpeed: 50,
      showCursor: false,
      onComplete: () => {
         new Typed(line2Ref.current, {
          strings: ["I'm <b>Saptarshi Chakrabortty</b>"],
          typeSpeed: 50,
          showCursor: false,
          onComplete: () => {
             new Typed(line3Ref.current, {
              strings: [
                'I have recently completed <b>BTech</b> and now I want to get into the software domain.',
              ],
              typeSpeed: 50,
              showCursor: false,
              onComplete: () => {
                new Typed(interestRef.current, {
                  strings: [
                    'I have Proficiency in <b>C++</b> and <b>Web Development</b>',
                  ],
                  typeSpeed: 50,
                  showCursor: false,
                });
              },
            });
          },
        });
      },
    });

    return () => {
      typedLine1.destroy();
    };
  }, []);

  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='line1' ref={line1Ref}></span>
        <span className='line2' ref={line2Ref}></span>
        <span className='line3' ref={line3Ref}></span>
        <p className='interest' ref={interestRef}></p>
        <div className='buttons'>
          <Link to='contact' smooth={true} duration={500}>
            <button className='btn'>
              <img src={btnImg} alt='hire' />Hire me
            </button>
          </Link>
          <a
            href={resume}
            download='saptarshiCV.pdf'
            className='btn download-btn'
          >
            <img src={dwnldImg} alt='resume' />Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
