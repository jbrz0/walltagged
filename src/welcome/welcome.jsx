import React from 'react';
import Nav from '../nav/nav.jsx';
import s from './welcome.scss';
import cx from 'classnames';

import WatchNow from './watchNow.jsx';
// import FromTheCommunity from './fromTheCommunity';
import PopularTags from './popularTags.jsx';
import LogoFooter from '../img/logo-footer.svg';
import PhotoIntroPath from '../img/bg.jpg';
const PhotoIntro = {backgroundImage: 'url(' + PhotoIntroPath + ')'}
const materialIcons = "material-icons";

class App extends React.Component {

  render() {
    return (
      <div>
        <Nav />

        <div className={s.introSection} style={PhotoIntro}>
          <div className={s.innerContentIntro}>

          <div className={s.containerWrap}>
            <h1>create, draw & share</h1>
            <div className={s.homeBtnWrap}>
              <a href="canvas" className={cx(s.homeBtn, s.getStartedBtn)}>try it</a>
              <a href="browse" className={cx(s.homeBtn, s.browseBtn)}>browse artwork</a>
            </div>
          </div>

            <div className={s.containerWrap}>
              <div className={s.introThird}>
                <h4>
                  <i className={materialIcons}>brush</i>
                  choose a tool</h4>
                <p>brush, shapes, line, and selection</p>
              </div>

              <div className={s.introThird}>
                <h4>
                  <i className={materialIcons}>image</i>
                  Save your work</h4>
                <p>save your work to as an image file</p>
              </div>

              <div className={s.introThird}>
                <h4>
                  <i className={materialIcons}>tablet_mac</i>
                  mobile or desktop</h4>
                <p>draw in any browser or device</p>
              </div>

          </div> {/* container wrap */}
        </div> {/* inner content intro */}


        <WatchNow />
        {/* <FromTheCommunity /> */}
        <PopularTags />

        <div className={s.footer}>
          <a href="/"><img src={LogoFooter} className={s.footerLogo} /></a>

          {/* <ul className={s.footerMenu}>
            <a href="#"><li>contact</li></a>
            <a href="#"><li>privacy</li></a>
            <a href="#"><li>about</li></a>
            <a href="#"><li>browse</li></a>
          </ul> */}

          <p className={s.footerTxt}>2017 - walltagged.com</p>

        </div>

      </div> {/* Intro section */}
    </div>
    );
  }
}

export default App;
