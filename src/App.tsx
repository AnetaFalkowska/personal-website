import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
const Root = lazy(() => import("./pages/Root"));
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Resume = lazy(() => import("./pages/Resume"));
const Contact = lazy(() => import("./pages/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<p className="mx-auto w-fit">Loading...</p>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<p className="mx-auto w-fit">Loading...</p>}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "resume",
        element: (
          <Suspense fallback={<p className="mx-auto w-fit">Loading...</p>}>
            <Resume />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<p className="mx-auto w-fit">Loading...</p>}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
