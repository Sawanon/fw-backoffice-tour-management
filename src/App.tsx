import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import LoginPage from "./page/login";
import SidebarComponent from "./components/sidebar";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Member from "./page/Member";
import Tour from "./page/Tour";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        {/* <LoginPage /> */}
        <Routes>
          {/* <Route index element={<Home />} />
        <Route path="about" element={<About />} /> */}

          {/* <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> */}

          <Route path="/" element={<MainLayout />}>
            <Route index element={<Tour />} />
            {/* <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
