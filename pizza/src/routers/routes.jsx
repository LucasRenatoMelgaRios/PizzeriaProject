import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LatestDeals } from '../pages/LatestDeals'
import { LatestOrders } from '../pages/LatestOrders'
import { Sidebar } from '../components/SideBar'

export function MyRouters (){
    return(
        <BrowserRouter>
        <Sidebar>
        <Routes>
          <Route path='/' element={<LatestDeals/>}/>
          <Route path='/latestOrders' element={<LatestOrders/>}/>
        </Routes>
        </Sidebar>
        </BrowserRouter>
        
    )
}

