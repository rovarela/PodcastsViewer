import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './podcast-details.component.css';

import EpisodeDetails from '../episode-details/episode-details.component';


class PodcastDetails extends Component {

    renderPodcastList() {

        return(
                <div>
                    this is the episode list
                </div>           
        );

    };

    render(){
        
        return(
            <div>
                <div>Welcome to podcast details</div>
                <Switch>
                    <Route path='/podcast/:podcastId/episode/:episodeId' component={EpisodeDetails}/>
                    <Redirect from="/podcast/:podcastId/episode" to="/" />
                    <Route path='/podcast/:podcastId' render={this.renderEpisodeList}/>
                </Switch>
            </div>
        );
    }
}

export default PodcastDetails