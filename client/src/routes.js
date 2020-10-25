import React from "react";
import { Route } from "react-router-dom";
import BlogArticle from "./component/BlogArticle";

const BaseRouter = () => (
    <div>
        <Route exact path="/:articleID/" component={BlogArticle} />
    </div>
);

export default BaseRouter;