//@ts-nocheck
import React, { FC } from 'react'
import { HashRouter, Route , Switch,} from 'react-router-dom'
import frontCover from './index.tsx';
import './asset/css/common.scss';
import './asset/css/style-blue.scss';

let route = [{
  path:'/',
  source:frontCover
}];

//向路由中增加配置文件中的路由
function addRoute(page) {
  const { name, source } = page;
  route.push({
    path: `/${name}`,
    source,
  });
}


function renderRouter(data) {
  const { source,path } = data;
  return <Route key={`route-${path}`} exact component={source} path={path}/>;
}

const RouteMap = ()=>{
  return (
    <HashRouter>
      <Switch>{route.map(renderRouter)}</Switch>
    </HashRouter>
    )
}
export default RouteMap;