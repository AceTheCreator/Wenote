import React, {lazy, Suspense} from 'react';
import { SearchWrapper } from './search.style';

const SearchInput = lazy(() => import("../../components/search/search"));

export default function search() {
    return (
        <SearchWrapper>
            <Suspense fallback={<div>loading</div>}>
                <SearchInput />
            </Suspense>
        </SearchWrapper>
    )
}
