import { RootState } from './../redux/store/index';
import { useSelector, TypedUseSelectorHook } from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector