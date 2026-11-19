import { createBrowserRouter, type RouteObject } from "react-router";
import Home from "../pages/Home.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import Todo from "../pages/Todo.tsx";
import Coin from "../pages/Coin.tsx";
import Movie from "../pages/Movie.tsx";
import Rocket from "../pages/Rocket.tsx";
import Book from "../pages/Book.tsx";

const AppRouter = () => {
    const routes: RouteObject[] = [
        {
            element: <MainLayout />,
            path: "/",
            children: [
                { index: true, element: <Home /> }, // Home => "/"
                { path: "todo", element: <Todo /> }, // About => "/about"
                { path: "coin", element: <Coin /> },
                { path: "movie", element: <Movie /> },
                { path: "rocket", element: <Rocket /> },
                { path: "book", element: <Book /> },
            ],
        },
    ];
    return createBrowserRouter(routes);
};
export default AppRouter;
