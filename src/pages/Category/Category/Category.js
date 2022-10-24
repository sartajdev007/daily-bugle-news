import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummCard from '../../Shared/NewsSummCard/NewsSummCard';

const Category = () => {
    const categoryNews = useLoaderData()

    return (
        <div>
            <h2> News in this category: {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSummCard
                    key={news._id}
                    news={news}
                ></NewsSummCard>)
            }
        </div>
    );
};

export default Category;