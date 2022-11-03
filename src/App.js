import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Courses from './components/Courses/Courses';
import Main from './Layout/Main';
import FAQ from './components/FAQ/FAQ';
import Blog from './components/Blog/Blog';
import Register from './components/Login/Register';
import CourseDetails from './components/Courses/CourseDetails/CourseDetails';
import Checkout from './components/Checkout/Checkout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ShowCourses from './components/Courses/LeftSide/ShowCourses/ShowCourses';
import LeftSide from './components/Courses/LeftSide/LeftSide';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
        loader: () => fetch('https://learning-platform-server-drab-omega.vercel.app/all-courses')
      },
      {
        path: '/course-details/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => fetch(`https://learning-platform-server-drab-omega.vercel.app/course/${params.id}`)
      },

      {
        path: '/faq',
        element: <FAQ></FAQ>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
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
        path: '/checkout/:id',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader: ({ params }) => fetch(`https://learning-platform-server-drab-omega.vercel.app/course/${params.id}`)
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
