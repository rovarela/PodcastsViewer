export function isExpired(){
    return !localStorage.getItem("lastUpdate") || (new Date(localStorage.getItem("lastUpdate")).getDate()>((new Date(localStorage.getItem("lastUpdate")).getDate()) + 1));
}
export function saveInformation(key,podcasts){
    localStorage.setItem("lastUpdate", (new Date()).toUTCString());
    localStorage.setItem(key, JSON.stringify(podcasts));
}
export function getInformation(key){
    return JSON.parse(localStorage.getItem(key));
}