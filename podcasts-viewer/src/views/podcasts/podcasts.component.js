import React, {Component} from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import './podcasts.component.css';

import PodcastDetails from '../podcast-details/podcast-details.component';
import {fetchPodcasts} from '../../services/api.service';
import {PodcastList} from '../../components/podcast-list/podcast-list.component';

class Podcasts extends Component {

    constructor(props) {
        super(props);
        this.state = {podcasts_original: [], podcasts_list: []};
        this.fetchPodcasts = this.fetchPodcasts.bind(this);
        this.renderPodcastList = this.renderPodcastList.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
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
                    console.log(json.feed);
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
                    <div class="toolbar-search" >
                        <div> {this.state.podcasts_list.length} </div>
                        <input type="text" value={this.state.filtervalue} onChange={this.handleFilterChange} placeholder="Search ..."/>
                    </div>
                    <div>
                        <PodcastList podcasts={this.state.podcasts_list} />
                    </div> 
                </div>             
        );

    };

    handleFilterChange(event) {
        this.setState({
            podcasts_list: this.state.podcasts_original.filter((item)=>{return ((item.title && item.title.label.toLowerCase().includes(event.target.value.toLowerCase())) || (item.author && item.author.name.label.toLowerCase().includes(event.target.value.toLowerCase())))})
        });
        console.log({value: event.target.value});
        //this.setState({value: event.target.value});
    }

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