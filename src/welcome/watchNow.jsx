import React from 'react';
import s from './welcome.scss';

import PhotoWorksPath from '../img/howitworks.png';
import Gif from '../img/walltagged-video.gif';
const PhotoWorks = {backgroundImage: 'url(' + PhotoWorksPath + ')'}

export default class WatchNow extends React.Component {
  render() {
    return(

      <div className={s.watchNow} style={PhotoWorks}>
        <h1>see how it works</h1>
        <div className={s.howItWorksImg}>
          <img src={Gif} />
        </div>

        <a href="canvas" className={s.tryItBtn}>try it</a>
      </div>

    )
  }
}
