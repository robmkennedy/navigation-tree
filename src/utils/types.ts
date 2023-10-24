import { FunctionComponent } from "react";

/**
 * A string enum used to reference particular route data.
 * Using this helps to prevent hard-coding route names throughout the app.
 */
export enum RouteID {
    'MOVIE' = 'MOVIE',
    'ABOUT' = 'ABOUT',
    'SEARCH' = 'SEARCH',
    'HISTORY' = 'HISTORY',
    'RECOMMENDATIONS' = 'RECOMMENDATIONS'
};

/**
 * A type to represent an item that can be displayed in the menu.
 */
export type ListItem = {
    component: FunctionComponent;
};

/**
 * A type to represent the details for a person.
 */
export type Person = {
    firstName: string;
    lastName: string,
    image: string;
    email: string,
    company: string,
    phone: string,
    education: Education[],
    experience: Experience[]
};

/**
 * A type to represent the a single education detail for a person.
 */
export type Education = {
    institution: string,
    startYear: string,
    endYear: string,
    degree: string
};

/**
 * A type to represent the a single experience for a person.
 */
export type Experience = {
    institution: string,
    startYear: string,
    endYear: string,
    title: string
};


/**
 * Represents a movie object. Most of the data comes from the OMDB API. 
 * To simplify storing the info in local storage, the api response will be parsed 
 * and split into separate strings (e.g. separate ratings).
 */
export type Movie = {
    found: boolean;

    title: string;
    year: string;
    rated: string;
    released: string;
    runtime: string;
    genre: string[];
    director: string;
    writers: string[];
    actors: string[];
    plot: string;
    language: string;
    country: string;
    awards: string;
    poster: string;
    timeViewed: string
    imdbRating: string;
    tomatoRating: string;
    metacriticRating: string;
    imdbID: string;
}

/**
 * Represents the a single item in the table of contents returned from the API.
 */
export type ContentItem = {
    id: string,
    name: string,
    level: string,
    parent_id: string,
    content: string
}

/**
 * Represents the review object to be stored in local storage.
 * imdbID is the unique id returned from the API.
 */
export type Review = {
    imdbID: string;
    rating: string;
    comment: string;
}

/**
 * Represents the review data that the user creates. This is
 * constructed from the input form.
 */
export type ReviewResponse = {
    rating: string;
    comment: string;
}

/**
 * Represents the search string that the user types on the search page.
 * This is kept in state so that the search panel can separately react and initiate
 * the API call to the OMDB.
 */
export type MovieState = {
    searchValue: string;
};

/**
 * Represents the state stored in redux for general parts of the app.
 * For a simple app like this, a single state slice can be used for both the selected
 * person and the search string. The selected person is optional as there may not be a 
 * person selected from the list.
 */
export type AppState = {
    selectedContentItem: ContentItem | undefined;
};

/**
 * Represents the state of the viewing history that is stored in redux.
 * The keys of the object represent the unique id of the movie.
 * This is automatically persisted to the local storage.
 */
export type HistoryState = {
    historyItems: {
        [index: string]: Movie
    }
};

/**
 * Represents the state of the review items that are stored in redux.
 * The keys represent the unique id of the movie that the review is for.
 * Similar to viewing history, this is automatically persisted to the local storage.
 */
export type ReviewState = {
    reviewItems: {
        [index: string]: Review
    }
};

/**
 * Represents the state of the about information that is stored in redux.
 * The entire markdown file is parsed as a single string. Although it does not change,
 * for convenience it can be read by RTK Query.
 */
export type AboutState = {
    content: string
};