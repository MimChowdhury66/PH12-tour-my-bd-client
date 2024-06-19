import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Root from './layout/Root.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Community from './pages/Community/Community.jsx';
import Blogs from './pages/Blogs/Blogs.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Home from './pages/Home/Home.jsx';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute.jsx';
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query';
import AllPackages from './pages/AllPackages/AllPackages.jsx';
import AllStories from './pages/AllStories/AllStories.jsx';
import TourGuideProfile from './pages/TourGuideProfile/TourGuideProfile.jsx';
import StoryDetail from './pages/StoryDetail/StoryDetail.jsx';
import TourTypeDetails from './pages/TourTypeDetails/TourTypeDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/community',
        element: <PrivateRoute><Community></Community></PrivateRoute>
      },
      {
        path: '/blogs',
        element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
      },
      {
        path: '/about',
        element: <PrivateRoute> <About></About></PrivateRoute>
      },
      {
        path: '/contact',
        element: <PrivateRoute><Contact></Contact></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/allPackages',
        element: <AllPackages></AllPackages>
      },
      {
        path: '/allStory',
        element: <AllStories></AllStories>
      },
      {
        path: '/tourGuideProfile/:id',
        element: <PrivateRoute><TourGuideProfile></TourGuideProfile></PrivateRoute>
      },
      {
        path: '/storyDetail/:id',
        element:<StoryDetail></StoryDetail>
      },
      {
        path: '/tourTypeDetails/:tourType',
        element:<TourTypeDetails></TourTypeDetails>
      },
      
    ]
  },
]);

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>

    </AuthProvider>

    <ToastContainer />
  </React.StrictMode>,
)
