import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './podcasts.component.css';

import PodcastDetails from '../podcast-details/podcast-details.component';
import {fetchPodcasts} from '../../services/api.service';
import {isExpired, saveInformation, getInformation} from '../../services/localstorage.service';
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
        if (isExpired()){
            fetchPodcasts().then(
                    (response) => {
                        return response.json()
                    }
            ).then(
                    (json) => {
                        console.log(json.feed);
                        this.setState({
                            podcasts_original: json.feed.entry,
                            podcasts_list: json.feed.entry,
                        });
                        saveInformation("podcasts",json.feed.entry);
                    }
            ).catch(
                    (ex) => {
                        console.log('parsing failed', ex);
            }
            );
        }else{
            this.setState({
                podcasts_original: getInformation("podcasts"),
                podcasts_list: getInformation("podcasts"),
            });
        }
    }



    renderPodcastList() {

        return(
                 <div>
                    <div className="toolbar-search" >
                        <div className="pv-primary-badge"> {this.state.podcasts_list.length} </div>
                        <input type="text" value={this.state.filtervalue} onChange={this.handleFilterChange} placeholder="Filter podcasts..." className="pv-input-filter"  />
                    </div>
                    <div>
                        <PodcastList podcasts={this.state.podcasts_list} />
                    </div> 
                </div>             
        );

    };

    handleFilterChange(event) {
        this.setState({
            podcasts_list: this.state.podcasts_original.filter((item)=>{return ((item.title && item.title.label.toLowerCase().includes(event.target.value.toLowerCase())) || (item["im:artist"] && item["im:artist"].label.toLowerCase().includes(event.target.value.toLowerCase())))})
        });
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