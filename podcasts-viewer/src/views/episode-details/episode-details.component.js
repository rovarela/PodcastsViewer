import React, {Component} from 'react';

import './episode-details.component.css';

class EpisodeDetails extends Component {
    render(){
        const episodeId = this.props.match.params.episodeId;
        const episodes = this.props.location.state.episodes;
        const episode=episodes.filter((item) => {
            return (item.id===episodeId);
        })[0];
        return(
            <div>
                <h2> {episode.title} </h2>
                <p> {episode.summary}</p>
                <audio src={episode.audioUrl} controls></audio>
            </div>
        );
    }
}

export default EpisodeDetails