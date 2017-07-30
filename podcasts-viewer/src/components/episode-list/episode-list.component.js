import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export function EpisodeList (props) {
            
    const episodes = props.episodes;
    const podcastId = props.id;
    const listEpisodes = episodes.map((episode) =>
        <div key={episode.id}>
            <Link to={{pathname:`/podcast/${podcastId}/episode/${episode.id}`, state:{episodes:episodes, podcasts:props.podcasts}}}>
                <div>
                    <p>{episode.title}</p>
                </div>
            </Link>
            <div>
                <p>{episode.releaseDate}</p>
            </div>
            <div>
                <p>{episode.duration}</p>
            </div>
        </div>
    );
                
    return (
                    
        <div>
            <div>
                <p>Episodes {episodes.length}</p>
            </div>
            <div>
                <div class="table-header">
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
                <div class="table-body">
                    {listEpisodes}
                </div>
            </div>
        </div>
    );
}