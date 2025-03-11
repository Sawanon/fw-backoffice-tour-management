import SidebarComponent from '../components/sidebar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className={`flex h-screen`}>
      <SidebarComponent />
      <Outlet />
    </div>
  )
}

export default MainLayout