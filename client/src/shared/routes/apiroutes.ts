const ROOT = '/';
const ALL = '/all';
const MOVIES = '/movies';
const CREATE = '/create';
const LIST = '/list';
const SEARCH = '/search';
const ADD_ACTOR = '/add-actor';
const DETAILS = '/details';
const COUNT = '/count';

const BASE_URL = process.env.API_URL || 'http://localhost:4000/api/v1';
export const API_ROUTES = {
    MOVIES:{
        CREATE: BASE_URL+MOVIES+CREATE,
        LIST: BASE_URL+MOVIES+LIST,
        SEARCH: BASE_URL+MOVIES+SEARCH,
        ADD_ACTOR: BASE_URL+MOVIES+ADD_ACTOR,
        DETAILS: BASE_URL+MOVIES+DETAILS,
        COUNT: BASE_URL+MOVIES+COUNT
    }
};