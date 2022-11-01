import React, { lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import NavigationBar from './components/NavigationBar';


function App() {
  const AllPosts = lazy(() => import('./components/AllPosts'))
  const ErrorPage = lazy(() => import('./components/ErrorPage'))
  const AddPost = lazy(() => import('./components/AddPost'))
  const EditPost = lazy(() => import('./components/EditPost'))
  return (

    <Suspense fallback={<Loader />} >
      <div className="App">
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path='/' element={<AllPosts />} />
            <Route path='/add' element={<AddPost />} />
            <Route path='/edit/:id' element={<EditPost />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense >


  );
}

export default App;
