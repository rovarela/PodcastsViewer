import React, {Component} from 'react';

import './episode-details.component.css';

import {isExpired, getInformation} from '../../services/localstorage.service';

class EpisodeDetails extends Component {
    render(){
        let episodes=[];
        if (isExpired()) episodes = this.props.location.state.episodes;
        else episodes = getInformation("episodes");
        const episodeId = this.props.match.params.episodeId;
        const episode=episodes.filter((item) => {
            return (item.id===episodeId);
        })[0];
        return(
            <div className="episode-detail pv-container">
                <h2> {episode.title} </h2>
                <p> {episode.summary}</p>
                <audio src={episode.audioUrl} controls></audio>
            </div>
        );
    }
}

export default EpisodeDetails