import {Fetch} from 'whatwg-fetch';

export function fetchPodcasts() {
    return fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
}
export function fetchPodcastDetails(podcastId) {
    return fetch(`https://itunes.apple.com/lookup?id=${podcastId}`);
}
export function fetchEpisodesInformation(feedUrl) {
    return fetch(`https://crossorigin.me/${feedUrl}`);
}