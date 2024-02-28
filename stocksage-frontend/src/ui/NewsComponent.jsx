import React from "react";
import { getStockNews } from "../services/apiNews";
import { useQuery } from "react-query";
import { CiCalendarDate } from "react-icons/ci";

function NewsComponent() {
  const {
    data: stockNews,
    isLoading,
    isError,
  } = useQuery("stockNews", () => getStockNews());

  return (
    <div className="stockSnap">
      <h3 className="componentTitle mb-5">Recent News</h3>
      <div className="news">
        {stockNews?.data.map((newsItem) => {
          const imageUrl = `https://backend.ansuinvest.com/public/images/news/${newsItem.featured_image}`;
          return (
            <div className="news__card box" key={newsItem.news_id}>
              <img src={imageUrl} alt="" />
              <div className="news__card__content">
                <h3 className="news__card__content__title">{newsItem.title}</h3>
                <div className="news__card__content__publishDate">
                    <CiCalendarDate className="icon"></CiCalendarDate>
                  {newsItem.publish_at}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsComponent;
