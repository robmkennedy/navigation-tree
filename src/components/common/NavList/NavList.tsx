import { ReactNode } from 'react';
import './NavList.scss';

type NavListProps<T> = {
    items: T[],
    selectedItem: T | undefined,
    render: (item: T) => ReactNode,
    onSelect: (item: T) => void,
    emptyText?: string
};

/**
 * A common component used to display a list of items.
 * This will be a reusable component. We use generics to allow it to accept a list of items 
 * of any type. However, this still needs to understand how to render each item in the list. 
 * Therefore we use a render property function that will return the react component to display.
 * We allow an optional onSelect function prop which will return the object type when it is clicked.
 * If no items are supplied, a default message is displayed to the user.
 */
export default function NavList<T>(props: NavListProps<T>) {
    const { items, selectedItem, render, onSelect, emptyText } = props;

    let content = null;
    if (items.length === 0) {
        content = (
            <div>{emptyText || ''}</div>
        );
    }
    else {
        content = items.map((item, index) => {
            return <div className='rk-nav-list-item' key={index} onClick={() => onSelect(item)}>{render(item)}</div>
        });
    }

    return (
        <div className='rk-nav-list'>
            {content}
        </div>
    );
}