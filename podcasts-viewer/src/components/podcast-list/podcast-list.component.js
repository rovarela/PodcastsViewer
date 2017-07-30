import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export function PodcastList (props) {
    const podcasts = props.podcasts;
    const listItems = podcasts.map((podcast) =>
         <li key={podcast.id.attributes['im:id']}>
             <img src={podcast["im:image"] && podcast["im:image"][0].label} />
             <Link to={{pathname:`/podcast/${podcast.id.attributes['im:id']}`, state:{podcasts:podcasts}}}><h3>{podcast.title && podcast.title.label}</h3></Link>
             <h5>Author: {podcast["im:artist"] && podcast["im:artist"].label}</h5>
         </li>
     );
                
     return (
         <ul>{listItems}</ul>
     );
}