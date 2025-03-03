import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import LoginPage from './page/login'
import SidebarComponent from './components/sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <LoginPage /> */}
    <div className={`bg-gray-200`}>
      <SidebarComponent />
    </div>
    </>
  )
}

export default App
