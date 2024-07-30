import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
// import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Restaurant from "./Components/Restaurant";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import appstore from "./utils/appstore";
import Cart from "./Components/Cart";


//lazy loading
//chunking
//code splitting
//dynamic bundling
//on demand loading
//dynamic import

const Grocery = lazy(() => import("./Components/Grocery"));

const About = lazy(() => import("./Components/About"));
const Appbody = () => {
    return (
        <Provider store={appstore}>
        <div className="App">
        <Header/>
        <Outlet/>
        </div>
        </Provider>
    );
};

const approuter = createBrowserRouter([ 
    {
        path: "/",
        element: <Appbody />,
        children:[
            { 
                path:"/",
                element:<Body/>,
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}>
                <About />
            </Suspense>,
            },
            {
                path:"/contact",
                element : <Contact/>,
            },
            {
                path:"/Grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery/>
                </Suspense>,
            },
            {
                path:"/restaurant/:resid",
                element:<Restaurant/>  
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
        ],
        errorElement: <Error />,
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);