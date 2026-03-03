import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';
import Home from '../pages/Home.jsx';
import BlogList from '../pages/BlogList.jsx';
import BlogPost from '../pages/BlogPost.jsx';
import Publications from '../pages/Publications.jsx';
import CategoriesPage from '../pages/CategoriesPage.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/categories', element: <CategoriesPage /> },
      { path: '/blog', element: <BlogList /> },
      { path: '/blog/:slug', element: <BlogPost /> },
      { path: '/publications', element: <Publications /> },
    ],
  },
]);

export default router;
