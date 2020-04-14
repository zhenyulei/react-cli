//@ts-nocheck
import React, { FC } from 'react'
import { HashRouter, Route , Switch,} from 'react-router-dom'
import config  from '@/config.tsx';
import DocLoadable from './routers/loadable'
import MainNav from './view/index'
import DemoNav from './view/demoNav'
import './asset/css/demo-common.scss'
const packages = config.packages;
let route = [{
  path:'/',
  source:MainNav
}];

//向路由中增加配置文件中的路由
function addRoute(page) {
  const { name, source } = page;
  route.push({
    path: `/${name}`,
    source,
  });
}

packages.map((item)=>{
  item.source = DocLoadable({ loader: () => import(`@/packages/${item.name}/demo`) });
  addRoute(item);
})

function renderRouter(data) {
  const { source,path } = data;
  return <Route key={`route-${path}`} exact component={source} path={path} />;
}

const RouteMap = ()=>{
  return (
    <HashRouter>
      <div className="demo-wrapper">
      <DemoNav/>
      <Switch>{route.map(renderRouter)}</Switch>
      </div>
    </HashRouter>
    )
}
export default RouteMap;