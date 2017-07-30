import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './podcast-details.component.css';

import {fetchPodcastDetails, fetchEpisodesInformation} from '../../services/api.service';
import {parseEpisodesDetails} from '../../parsers/html.parser';
import EpisodeDetails from '../episode-details/episode-details.component';
import {EpisodeList} from '../../components/episode-list/episode-list.component';


class PodcastDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {podcast: {}, episodes_list:[]};
        this.renderEpisodeList = this.renderEpisodeList.bind(this);   
    }

    componentDidMount() {
        this.fetchEpisodes(this.props.match.params.podcastId);  
    }

    fetchEpisodes(podcastId){
        fetchPodcastDetails(podcastId).then(
            (response) => {
                return response.json()
            }
        ).then(
            (json) => {
                console.log('parsed json', json);
                fetchEpisodesInformation(json.results[0].collectionViewUrl).then(
                    (response) => {
                        return response.text()
                    }
                ).then(
                    (text) => {
                        this.setState({
                            episodes_list: parseEpisodesDetails(text)
                        });
                    }
                ).catch(
                    (ex) => {
                        console.log('parsing failed', ex);
                    }
                );
            }
        ).catch(
            (ex) => {
                console.log('parsing failed', ex);
            }
        );
    }


    renderEpisodeList() {

        return(
                <EpisodeList id={this.props.match.params.podcastId} podcasts={this.props.location.state.podcasts} episodes={this.state.episodes_list}/>          
        );

    };

    render(){

        const podcasts = this.props.location.state.podcasts;
        const podcastId = this.props.match.params.podcastId;
        const podcast=podcasts.filter((item) => {
           return (item.id.attributes["im:id"]===podcastId);
        })[0];
        
        
        return(
            <div>
                <div>
                    <img src={podcast["im:image"] && podcast["im:image"][0].label} />
                    <p> {podcast.title && podcast.title.label}</p>
                    <p> by {podcast["im:artist"] && podcast["im:artist"].label}</p>
                    <p> Description: </p>
                    <p>{podcast.summary && podcast.summary.label}</p>
                </div>
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