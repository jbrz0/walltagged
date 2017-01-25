// import ReactDOM from 'react-dom'; - if needed
import React from 'react';
import Nav from '../nav/nav.jsx';
import s from './browse.scss';
import cx from 'classnames';


import PopularTags from '../welcome/popularTags.jsx';
import LogoFooter from '../img/logo-footer.svg';


import PhotoBrowsePath from '../img/browse.jpg';
import BoxOnePhotoPath from '../img/template/template1.jpg';
import BoxTwoPhotoPath from '../img/template/template2.jpg';
import BoxThreePhotoPath from '../img/template/template3.jpg';
import BoxFourPhotoPath from '../img/template/template4.jpg';
import BoxFivePhotoPath from '../img/template/template5.jpg';
import BoxSixPhotoPath from '../img/template/template6.jpg';
import BoxSevenPhotoPath from '../img/template/template7.jpg';
import BoxEightPhotoPath from '../img/template/template8.jpg';

const PhotoBrowse = {backgroundImage: 'url(' + PhotoBrowsePath + ')'}
const BoxOnePhoto = {backgroundImage: 'url(' + BoxOnePhotoPath + ')'}
const BoxTwoPhoto = {backgroundImage: 'url(' + BoxTwoPhotoPath + ')'}
const BoxThreePhoto = {backgroundImage: 'url(' + BoxThreePhotoPath + ')'}
const BoxFourPhoto = {backgroundImage: 'url(' + BoxFourPhotoPath + ')'}
const BoxFivePhoto = {backgroundImage: 'url(' + BoxFivePhotoPath + ')'}
const BoxSixPhoto = {backgroundImage: 'url(' + BoxSixPhotoPath + ')'}
const BoxSevenPhoto = {backgroundImage: 'url(' + BoxSevenPhotoPath + ')'}
const BoxEightPhoto = {backgroundImage: 'url(' + BoxEightPhotoPath + ')'}

const materialIcons = "material-icons";

class Browse extends React.Component {

  render() {
    return (
      <div className={s.browseWrap}>
        <Nav />

        <div className={s.browseSection} style={PhotoBrowse}>


          <h1>browse templates</h1>

          <div className={cx(s.boxRow, s.boxRowTop)}>
            <a href="template1"><div className={cx(s.box, s.boxOne)} style={BoxOnePhoto}><h4>&nbsp;</h4></div></a>
            <a href="template2"><div className={cx(s.box, s.boxTwo)} style={BoxTwoPhoto}><h4>&nbsp;</h4></div></a>
            <a href="template3"><div className={cx(s.box, s.boxThree)} style={BoxThreePhoto}><h4>&nbsp;</h4></div></a>
            <a href="template4"><div className={cx(s.box, s.boxFour)} style={BoxFourPhoto}><h4>&nbsp;</h4></div></a>
          </div>

          <div className={s.boxRow}>
            <a href="template5"><div className={cx(s.box, s.boxFive)} style={BoxFivePhoto}><h4>&nbsp;</h4></div></a>
            <a href="template6"><div className={cx(s.box, s.boxSix)} style={BoxSixPhoto}><h4>&nbsp;</h4></div></a>
            <a href="template7"><div className={cx(s.box, s.boxSeven)} style={BoxSevenPhoto}><h4>&nbsp;</h4></div></a>
            <a href="template8"><div className={cx(s.box, s.boxEight)} style={BoxEightPhoto}><h4>&nbsp;</h4></div></a>
          </div>

        <div className={s.browsePopularTags}>
          <PopularTags />
        </div>


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

     </div>  {/* Intro section */}
    </div>
    );
  }
}

export default Browse;
