const URL = "https://api.themoviedb.org/3";
const IMAGEURL = "https://image.tmdb.org/t/p/";
const APIKEY = "cb226874c619dc1b1c48dc4cddf64d88";
const APISTRING = `?api_key=${APIKEY}&language=pt-BR`;
const EVENTS = {PosterCLick:'PosterClick',
ModalClose: 'ModalClose'};

export default {
    URL, IMAGEURL, APIKEY, APISTRING, EVENTS
};