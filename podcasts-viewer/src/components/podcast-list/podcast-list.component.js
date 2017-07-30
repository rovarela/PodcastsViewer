import React from 'react';
import { Link } from 'react-router-dom';

import './podcast-list.component.css';

export function PodcastList (props) {
    const podcasts = props.podcasts;
    const listItems = podcasts.map((podcast) =>
         <li key={podcast.id.attributes['im:id']}>
             <Link to={{pathname:`/podcast/${podcast.id.attributes['im:id']}`, state:{podcasts:podcasts}}}>
                    <div className="pv-podcast-list-img">
                        <img src={podcast["im:image"] && podcast["im:image"][2].label} alt={podcast.title.label} />
                    </div>
                    <div className="pv-podcast-list-info">
                        <h3>{podcast.title && podcast.title.label}</h3>
                        <h5>Author: {podcast["im:artist"] && podcast["im:artist"].label}</h5>
                    </div>
             </Link>
         </li>
     );
                
     return (
         <ul className="pv-podcast-list">{listItems}</ul>
     );
}