import { RefObject } from "react";
import { ContentItem, TreeItem } from "./types";

/**
 * A helper function used to determine if an element is visible within it's container.
 * This is used so that the parent container doesn't scroll if you click on an item
 * you can already see.
 */
export const isVisible = (containerRef: RefObject<HTMLDivElement>, elementRef: RefObject<HTMLDivElement>) => {

    const element = elementRef.current;
    const container = containerRef.current;
    let isVisible = true;
    if (element && container) {

        const { bottom, height, top } = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        isVisible = (top <= containerRect.top ? containerRect.top - top <= height : bottom - containerRect.bottom <= height);
    }
    return isVisible;
};

/**
 * This used to build a structure of tree items from the json response of the content data.
 * We use the id and parent id attributes to build the TreeItem / children structure that the NavTree
 * requires.
 */
export const buildTreeStructure = (jsonResponse: ContentItem[]) => {
    const rootArray: TreeItem<ContentItem>[] = [];

    if (jsonResponse.length > 0) {
        let currentParent: TreeItem<ContentItem> = { item: jsonResponse[0], childItems: [] };
        rootArray.push(currentParent);

        for (let i = 1; i < jsonResponse.length; i++) {
            let contentItem = jsonResponse[i];
            if (parseInt(contentItem.level) > 2) {
                continue;
            }
            const newItem = { item: contentItem, childItems: [] };
            // A new root node
            if (contentItem.parent_id === '') {
                rootArray.push(newItem)
                currentParent = newItem;
            }
            // This node parent id matches the current parent - so just add it in to the children
            else if (contentItem.parent_id === currentParent.item.id) {
                currentParent.childItems.push(newItem);
            }
            // A new parent
            else {
                currentParent = newItem;
                currentParent.childItems.push(newItem);
            }
        }
    }

    return rootArray;
};