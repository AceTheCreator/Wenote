import React from "react";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

export default function loadinNotes (){
    return <SkeletonTheme color="#202020" highlightColor="#444">
        {Array(10).fill().map((index) => 
        <div style={{marginTop:"50px"}}>
            <p><Skeleton width="150px"></Skeleton></p>
            <Skeleton width="50px" style={{
                marginLeft:"5px"
            }} count="5"></Skeleton>
            <div style={{marginTop:"20px"}}>
            <Skeleton width="50px" style={{
                marginLeft:"5px"
            }} count="2"></Skeleton>
            </div>
        </div>
        )}
    </SkeletonTheme>
}