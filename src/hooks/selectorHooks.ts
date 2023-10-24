import { useAppSelector } from 'hooks/stateHooks';

/** 
 * Select the selected item from the app state slice
 */
export const useSelectedContentItemSelector = () => {
    return useAppSelector((state) => state.app.selectedContentItem);
};