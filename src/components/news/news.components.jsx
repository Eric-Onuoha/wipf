import React from "react";
import { useSelector } from "react-redux";
import NewsPreviews from "./newsPreviews/newsPreviews.component";

const News = () => {
    const newsUpdates = useSelector((state) => state.newsUpdates.newsUpdates) || {};
    // console.log(NewsUpdates);

    const newsContent = [];
    for (const news in newsUpdates){
      newsContent.push(newsUpdates[news]);
    }

    return(
        <NewsPreviews newsUpdates = {newsUpdates} newsContent = {newsContent} ></NewsPreviews>
    )
}; export default News;