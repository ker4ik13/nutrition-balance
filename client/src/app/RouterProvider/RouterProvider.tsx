import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "@/shared/Layout/Layout";
import Preloader from "@/widgets/Preloader/Preloader";

// Pages
const NewWorkPage = lazy(() => import("@/pages/NewWorkPage/NewWorkPage"));
const NewPostPage = lazy(() => import("@/pages/NewPostPage/NewPostPage"));
const HomePage = lazy(() => import("@/pages/HomePage/HomePage"));
const BlogPage = lazy(() => import("@/pages/BlogPage/BlogPage"));
const PostPage = lazy(() => import("@/pages/PostPage/PostPage"));
const WorksPage = lazy(() => import("@/pages/WorksPage/WorksPage"));
const WorkPage = lazy(() => import("@/pages/WorkPage/WorkPage"));
const AuthPage = lazy(() => import("@/pages/AuthPage/AuthPage"));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Preloader />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path='/signin'
            element={
              <Suspense fallback={<Preloader />}>
                <AuthPage />
              </Suspense>
            }
          />
          <Route
            path='/signup'
            element={
              <Suspense fallback={<Preloader />}>
                <AuthPage />
              </Suspense>
            }
          />
          <Route
            path='/blog'
            element={
              <Suspense fallback={<Preloader />}>
                <BlogPage />
              </Suspense>
            }
          />
          <Route
            path='/blog/:id'
            element={
              <Suspense fallback={<Preloader />}>
                <PostPage />
              </Suspense>
            }
          />
          <Route
            path='/blog/new'
            element={
              <Suspense fallback={<Preloader />}>
                <NewPostPage />
              </Suspense>
            }
          />
          <Route
            path='/works'
            element={
              <Suspense fallback={<Preloader />}>
                <WorksPage />
              </Suspense>
            }
          />
          <Route
            path='/works/:id'
            element={
              <Suspense fallback={<Preloader />}>
                <WorkPage />
              </Suspense>
            }
          />
          <Route
            path='/works/new'
            element={
              <Suspense fallback={<Preloader />}>
                <NewWorkPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
