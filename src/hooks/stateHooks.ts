import { AppDispatch, RootState } from 'state/store';
import { useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';

/**
 * A wrapper hook used to return the typed version of the redux useDispatch hook.
 */
export const useAppDispatch = (): AppDispatch => {
    return useDispatch();
};

/**
 * A wrapper hook used to return the typed version of the redux useSelector. It is based
 * on the RootState, which itself is inferred from the store after it is created.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
