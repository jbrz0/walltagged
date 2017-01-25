import s from './nav.scss';
import React from 'react';
import cx from 'classnames';

import Logo from '../img/logo.svg';
import NewIcon from '../img/new.svg';
import BrowseIcon from '../img/browse.svg';

export default class Nav extends React.Component {
  render() {
    return (

      <div className={s.navWrap}>
        <a href="/"><img src={Logo} className={s.logoNav} /></a>

        {/* <ul className={s.menuItem}>
          <a href="#"><li><img src={NewIcon} /> <span>New</span></li></a>
          <a href="#"><li><img src={BrowseIcon} className={s.browseIcon} /> <span className={s.browseText}>Browse</span></li></a>
        </ul> */}

        <div className={s.menuBtnWrap}>
          <a href="canvas">
            <div className={s.menuBtn}>
              <span className={s.newWrap}><img src={NewIcon} /> New</span>
            </div>
          </a>

          <a href="browse">
            <div className={cx(s.menuBtn, s.menuBtnBrowse)}>
              <span className={s.browseWrap}><img src={BrowseIcon} /> Browse</span>
            </div>
          </a>
        </div>

      </div>

    )
  }
}
