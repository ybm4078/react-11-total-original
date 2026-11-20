import { createBrowserRouter, type RouteObject } from "react-router";
import Home from "../pages/Home.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import Todo from "../pages/Todo.tsx";
import Coin from "../pages/Coin.tsx";
import Search from "../pages/MoviePages/Search.tsx";
import Detail from "../pages/MoviePages/Detail.tsx";
import MovieHome from "../pages/MoviePages/MovieHome.tsx";
import BookHome from "../pages/BookPages/BookHome.tsx";
import BookSearch from "../pages/BookPages/BookSearch.tsx";
import BookDetail from "../pages/BookPages/BookDetail.tsx";
import FormHome from "../pages/formPages/FormHome.tsx";
import FormResult from "../pages/formPages/FormResult.tsx";
import ProductList from "../pages/Product/ProductList.tsx";
import ProductDetail from "../pages/Product/ProductDetail.tsx";

const AppRouter = () => {
    const routes: RouteObject[] = [
        {
            element: <MainLayout />,
            path: "/",
            children: [
                { index: true, element: <Home /> },
                { path: "todo", element: <Todo /> },
                { path: "coin", element: <Coin /> },
                {
                    path: "movie",
                    children: [
                        { index: true, element: <MovieHome /> },
                        { path: "search", element: <Search /> },
                        { path: "detail/:id", element: <Detail /> },
                    ],
                },
                {
                    path: "form",
                    children: [
                        { index: true, element: <FormHome /> },
                        { path: "result", element: <FormResult /> },
                    ],
                },
                {
                    path: "book",
                    children: [
                        { index: true, element: <BookHome /> },
                        { path: "search", element: <BookSearch /> },
                        { path: "detail/:id", element: <BookDetail /> },
                    ],
                },
                {
                    path: "product",
                    children: [
                        { index: true, element: <ProductList /> },
                        { path: ":id", element: <ProductDetail /> },
                    ],
                },
            ],
        },
    ];
    return createBrowserRouter(routes);
};
export default AppRouter;
