import React from 'react';
import s from './welcome.scss';

// Community photos
import CommunityPathOne from '../img/bg.jpg';
const CommunityOne = {backgroundImage: 'url(' + CommunityPathOne + ')'}

export default class FromTheCommunity extends React.Component {
  render() {
    return(

      <div className={s.fromTheCommunityWrap}>
        <div className={s.communityPieceHome} style={CommunityOne}></div>
        <div className={s.communityPieceHome} style={CommunityOne}></div>
        <div className={s.communityPieceHome} style={CommunityOne}></div>
        <div className={s.communityPieceHome} style={CommunityOne}></div>
        <div className={s.communityPieceHome} style={CommunityOne}></div>
        <div className={s.communityPieceHome} style={CommunityOne}></div>
        <div className={s.communityPieceHome} style={CommunityOne}></div>
        <div className={s.communityPieceHome} style={CommunityOne}></div>

        <div className={s.fromTheCommunityText}>
          from the community
        </div>
      </div>

    )
  }
}
