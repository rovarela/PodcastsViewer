import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './episode-list.component.css';

export function EpisodeList (props) {
            
    const episodes = props.episodes;
    const podcastId = props.id;
    const listEpisodes = episodes.map((episode) =>
        <div key={episode.id} className="pv-table-row">
            <div>
                <Link to={{pathname:`/podcast/${podcastId}/episode/${episode.id}`, state:{episodes:episodes, podcasts:props.podcasts}}}>
                    <p>{episode.title}</p>
                </Link>
            </div>
            <div>
                <p>{episode.releaseDate}</p>
            </div>
            <div>
                <p>{episode.duration}</p>
            </div>
        </div>
    );
                
    return (
                    
        <div className="pv-episodes-list-container">
            <div className="pv-episodes-list-heading">
                <p>Episodes {episodes.length}</p>
            </div>
            <div className="pv-episodes-list-table">
                <div className="pv-table-header">
                    <div>
                        <label>Title</label>
                    </div>
                    <div>
                        <label>Date</label>
                    </div>
                    <div>
                        <label>Duration</label>
                    </div>
                </div>
                <div className="pv-table-body">
                    {listEpisodes}
                </div>
            </div>
        </div>
    );
}