import React from 'react'
import SidebarComponent from '../components/sidebar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className={`flex`}>
      <SidebarComponent />
      <Outlet />
    </div>
  )
}

export default MainLayout