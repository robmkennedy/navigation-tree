import { MouseEventHandler } from 'react';
import './TreeButton.scss';

type TreeButtonProps = {
    isOpen: boolean,
    onClick: MouseEventHandler<HTMLButtonElement>
};

/**
 * A common component used to display the collapse / expand button on the tree.
 */
const TreeButton = ({ isOpen, onClick }: TreeButtonProps) => {

    return (
        <button className={`rk-tree-button ${isOpen ? 'open' : ''}`} onClick={onClick}>
            {isOpen ? <span>&#8964;</span> : <span>&#707;</span>}
        </button>
    );
};

export default TreeButton;