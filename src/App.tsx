// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Tour from "./page/Tour";
import Review from "./page/Review";
import Setting from "./page/Setting";
import Blog from "./page/Blog";
import LoginPage from "./page/login";

function App() {
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Tour />} />
            <Route path="/review" element={<Review />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/blog" element={<Blog />} />
            {/* <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
