import React from 'react';
import Nav from '../nav/nav.jsx';
import s from '../welcome/welcome.scss';
import cx from 'classnames';
import LogoFooter from '../img/logo-footer.svg';

import PhotoIntroPath from '../img/bg.jpg';
const PhotoIntro = {backgroundImage: 'url(' + PhotoIntroPath + ')'}

class NoMatch extends React.Component {

  render() {
    return (
      <div>
        <Nav />

        <div className={s.introSection} style={PhotoIntro}>
          <div className={s.innerContentIntro}>

          <div className={s.containerWrap}>
            <h1>Page Not Found</h1>
            <div className={s.homeBtnWrap}>
              <a href="canvas" className={cx(s.homeBtn, s.getStartedBtn)}>try it</a>
              <a href="browse" className={cx(s.homeBtn, s.browseBtn)}>browse artwork</a>
            </div>
          </div>

        </div> {/* inner content intro */}

        <div className={s.footer}>
          <a href="/"><img src={LogoFooter} className={s.footerLogo} /></a>
          <p className={s.footerTxt}>2017 - walltagged.com</p>
        </div>

      </div>
    </div>
    );
  }
}

export default NoMatch;
