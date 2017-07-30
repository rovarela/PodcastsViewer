import React, {Component} from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import './podcasts.component.css';

import PodcastDetails from '../podcast-details/podcast-details.component';
import {fetchPodcasts} from '../../services/api.service'

class Podcasts extends Component {

    constructor(props) {
        super(props);
        this.state = {podcasts_original: [], podcasts_list: []};
        this.fetchPodcasts = this.fetchPodcasts.bind(this);
    }

    componentDidMount() {
        this.fetchPodcasts();  
    }

    fetchPodcasts(){
        fetchPodcasts().then(
                (response) => {
                    return response.json()
                }
        ).then(
                (json) => {
                    console.log('parsed json', json);
                    this.setState({
                        podcasts_original: json.feed.entry,
                        podcasts_list: json.feed.entry
                    });
                }
        ).catch(
                (ex) => {
                    console.log('parsing failed', ex);
        }
        );
    }



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