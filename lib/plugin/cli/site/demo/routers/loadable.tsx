import Loadable from 'react-loadable';
import React , {FC} from 'react';
const loadingComponent:FC = ()=>{
    return (
        <div>loading......</div>
    )
}
export default function DocLoadable(opts:any):object{
    return Loadable(
        Object.assign(
            {
                loading:loadingComponent,
                delay:200,
                timeout:5000,
            },
            opts
        )
    )
}