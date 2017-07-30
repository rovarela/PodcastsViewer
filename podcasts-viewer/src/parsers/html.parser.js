export function parseEpisodesDetails(text) {
    //console.log(text);
    var episodes=[];
    const dom=(new DOMParser()).parseFromString(text, 'text/html');
    Array.from(dom.querySelectorAll('.podcast-episode')).map(
        (p) => {
            let episode_details={};
            episode_details.id=p.getAttribute('row-number');
            episode_details.audioUrl=p.getAttribute('audio-preview-url');
            episode_details.duration=p.getAttribute('preview-duration');
            Array.from(p.querySelectorAll('.name .text')).map(
                value=> episode_details.title=value.innerText.trim()
            );
            Array.from(p.querySelectorAll('.description .text')).map(
                value=> episode_details.summary=value.innerText.trim()
            );
            Array.from(p.querySelectorAll('.release-date')).map(
                value=> episode_details.releaseDate=value.innerText.trim()
            );
            episodes.push(episode_details);
        }
    )
    return (episodes);
}