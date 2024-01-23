import React from "react";
import Main from "./Main/Main"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Admin} from "./admin/admin";
import SignIn from "./admin/login";
import Book from "./book/book";
import AllWebinar from "./allWebinar/allWebinar";
import WebinarOne from "./webinarOne/webinarOne";
import WebinarOneOld from "./webinarOneOld/webinarOneOld";
import Service from "./service/service";
import Articles from "./articles/articles";
import ArticlesId from "./articlesId/articlesId";
import Video from "./video/video";
import Calendar from "./calendar/calendar";
import Response from "./response/response";
import Values from "./values/values";
import Collective from "./collective/collective";
import Head from "./head/head";
import Clients from "./clients/clients";
import ServiceTwo from "./service/serviceTwo";

const admin =<Admin/>
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
	errorElement: <Main/>
    },
    {
        path: "/admin",
        element: admin ,
    },
    {
        path: "/admin/sign-in",
        element: <SignIn/>
    },
    {
        path: "/book",
        element: <Book/>
    },
    {
        path: "/allWebinar",
        element: <AllWebinar/>
    },
    {
        path: "/webinar",
        element: <WebinarOne/>
    },
    {
        path: "/webinarOld",
        element: <WebinarOneOld/>
    },
    {
        path: "/service",
        element: <ServiceTwo/>
    },
    {
        path: "/articles",
        element: <Articles/>
    },
    {
        path: "/articlesid",
        element: <ArticlesId/>
    },
    {
        path: "/video",
        element: <Video />
    },
    {
        path: "/calendar",
        element: <Calendar />
    },
    {
        path: "/response",
        element: <Response />
    },
    {
        path: "/values",
        element: <Values />
    },
    {
        path: "/collective",
        element: <Collective />
    },
    {
        path: "/head",
        element: <Head />
    },
    {
        path: "/clients",
        element: <Clients />
    },

]);

function App() {
  return (
      <React.StrictMode>
          <RouterProvider router={router} />
      </React.StrictMode>
  );
}

export default App;
