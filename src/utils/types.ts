import { FunctionComponent } from "react";

/** 
 * Represents an item to be displayed in the tree. Each item can also contain
 * an array of child TreeItems. Items use generics to accept any object, but a render
 * function will need to be supplied to the tree component.
*/
export type TreeItem<T> = {
    item: T;
    childItems: TreeItem<T>[];
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
 * Represents the state stored in redux for general parts of the app.
 * For a simple app like this, a single state slice can be used for both the selected
 * person and the search string. The selected person is optional as there may not be a 
 * person selected from the list.
 */
export type AppState = {
    selectedContentItem: ContentItem | undefined;
};