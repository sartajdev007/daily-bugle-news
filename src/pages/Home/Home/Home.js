import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummCard from '../../Shared/NewsSummCard/NewsSummCard';

const Home = () => {
    const allNews = useLoaderData();

    return (
        <div>
            <h3>Spidey News: {allNews.length}</h3>
            {
                allNews.map(news => <NewsSummCard
                    key={news._id}
                    news={news}
                ></NewsSummCard>)
            }
        </div>
    );
};

export default Home;