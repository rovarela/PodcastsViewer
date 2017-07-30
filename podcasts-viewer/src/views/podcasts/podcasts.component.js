import React, {Component} from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import './podcasts.component.css';

import PodcastDetails from '../podcast-details/podcast-details.component';

class Podcasts extends Component {


    renderPodcastList() {

        return(
                <div>
                    this is the podcast list
                </div>           
        );

    };

    render(){
        return(
            <Switch>
                <Route exact path='/' render={this.renderPodcastList}/>
                <Route path='/podcast/:podcastId' component={PodcastDetails}/>
                <Redirect from="/podcast" to="/"/>
            </Switch>
        );
    }
}

export default Podcasts;