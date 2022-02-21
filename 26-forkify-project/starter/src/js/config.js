/*
The goal of having this file with all these variables is that it will allow us to easily configure
our project by simply changing some of the data that is here in this configuration file, we will not 
want to put all the variables here in this file the only variables that we do want here are the ones
are responsible for kind of defining some important data about the application itself.

One example of that is the API URL , This URL reuse in multiple places across this project: 
for getting search data and also for uploading a recipe to the server and etc.. but at some point 
the URL needs to change, because there might be a version 3 at some point and we don't want to change
that everywhere and simply have a variable which contains this URL which we can then reuse.
*/

export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
export const TIMEOUT_SEC = 10;
export const RES_PER_PAGE = 10;
export const KEY = `c5c78558-9c10-4aa0-90ca-2c34660ca84c`;
export const MODAL_CLOSE_SEC = 2.5;
