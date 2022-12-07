import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./Style.scss";
import Girl from "../../medias/images/girlFeedback.png";
import Boy from "../../medias/images/boyFeedback.png";
import quotes from "../../medias/images/quotes.png"
const dataFeedback = [
  {
    id: 1,
    title: "Как же удобно!",
    paragraph:
      "В рамках спецификации современных стандартов, базовые сценарии поведения пользователей, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме.",
    author: "Анна Купер",
    email: "romashka.ru",
    image: <Girl />,
  },
  {
    id: 2,
    title: "Теперь мы идем в ногу со временем",
    paragraph:
      "А ещё интерактивные прототипы превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Банальные, но неопровержимые выводы, а также тщательные исследования конкурентов формируют сеть.",
    author: "Андрей Васильев",
    email: "samogon-ont.ru",
    image: <Boy />,
  },
  {
    id: 3,
    title: "Как же удобно!",
    paragraph:
      "В рамках спецификации современных стандартов, базовые сценарии поведения пользователей, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме.",
    author: "Анна Купер",
    email: "romashka.ru",
    image: <Girl />,
  },
  {
    id: 4,
    title: "Теперь мы идем в ногу со временем",
    paragraph:
      "А ещё интерактивные прототипы превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Банальные, но неопровержимые выводы, а также тщательные исследования конкурентов формируют сеть.",
    author: "Андрей Васильев",
    email: "samogon-ont.ru",
    image: <Boy />,
  },
  {
    id: 5,
    title: "Как же удобно!",
    paragraph:
      "В рамках спецификации современных стандартов, базовые сценарии поведения пользователей, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме.",
    author: "Анна Купер",
    email: "romashka.ru",
    image: <Girl />,
  },
  {
    id: 6,
    title: "Теперь мы идем в ногу со временем",
    paragraph:
      "А ещё интерактивные прототипы превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Банальные, но неопровержимые выводы, а также тщательные исследования конкурентов формируют сеть.",
    author: "Андрей Васильев",
    email: "samogon-ont.ru",
    image: <Boy />,
  },
];
const datas = dataFeedback.map(
  ({ id, title, author, paragraph, email, image }) => {
    return (
      <CarouselFeedback
        title={title}
        author={author}
        paragraph={paragraph}
        email={email}
        image={image}
      />
    );
  }
);

export function CarouselFeedback({ title, author, paragraph, email, image }) {
  return (
    <div className="feedback-card">
      <div className="feedback--content">
        <h6 className="fs-1828">{title}</h6>
        <p className="fs-1424">{paragraph}</p>
      </div>
      <div className="feedback--author">
        <img src={image.type} alt="author" />
        <div className="author--name">
          <h4 className="fs-1828">{author}</h4>
          <h5 className="fs-1424">{email}</h5>
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="feedback container">
      <h1 className="fs-4664">Отзывы клиентов</h1>
      <img src={quotes} alt="quotes" className="quotes-img" />
      <AliceCarousel
        infinite
        autoPlay
        autoPlayInterval={1500}
        mouseTracking
        disableButtonsControls
        items={datas}
        responsive={{
          0: {
            items: 1,
          },
          900: {
            items: 1,
          },
          1024: {
            items: 2,
          },
        }}
      />
    </div>
  );
}

export default Index;
