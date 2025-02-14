import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./home-page.module.css";
import { HomepageUIProps } from "./type";

export const HomepageUI: React.FC<HomepageUIProps> = ({ cards, onCardClick }) => {
  return (
    <div className={styles.homepageContainer}>
      <section className={styles.leftPartHomepage}>
        <img
          src="/homepagefonNew.png"
          alt="Фон"
          className={styles.backgroundImg}
        />
        <div className={styles.textContainer}>
          <article className={styles.articleText}>
            <h3 className={styles.articleH3}>Наши планы:</h3>
            <p className={styles.articlePar}>
              В апреле - мае 2025 года мы планируем поехать в Азербайджан.
            </p>
            <p className={styles.articlePar}>
              А осенью, в конце октября нас пригласили в поездку по Китаю,
              надеюсь все получится :)
            </p>
          </article>
          <article className={styles.articleText}>
            <h3 className={styles.articleH3}>Наши мечты:</h3>
            <p className={styles.articlePar}>
              В наших смелых мечтах мы хотим посетить:
            </p>
            <ul className={styles.articleList}>
              <li>
                <p>Оймякон, Якутия</p>
              </li>
              <li>
                <p>Дальний Восток</p>
              </li>
              <li>
                <p>Японию</p>
              </li>
              <li>
                <p>Южную Корею (ещё раз)</p>
              </li>
              <li>
                <p>Исландию (ещё раз)</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
      <section className={styles.rightPartHomepage}>
        <article className={styles.aboutUs}>
          <h3 className={styles.articleH3}>Привет!</h3>
          <p className={styles.articlePar}>
            Вы попали к Кириллкам, так нас однажды назвали наши друзья, ну и
            название прижилось.
          </p>
          <p className={styles.articlePar}>
            Нас зовут Кирилл и Кристина, и мы обожаем путешествия! Каждая
            поездка для нас — это не просто маршрут, а возможность наполнить
            жизнь новыми красками, эмоциями и историями, которыми с радостью
            поделимся здесь с вами.
          </p>
          <p className={styles.articlePar}>
            Более подробно про нас вы можете почитать в разделе{" "}
            <NavLink to="/about" className={styles.activeLink}>
              О&nbsp;нас
            </NavLink>
            .
          </p>
        </article>
        <section className={styles.cardsGallery}>
          {cards.map((card) => (
            <div
              key={card.id}
              className={styles.card}
              onClick={() => onCardClick(card.id)}
            >
              <img
                src={card.link}
                alt={card.name}
                className={styles.cardImage}
              />
            </div>
          ))}
        </section>
        <section className={styles.cardsGalleryNoClick}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <img
                src={card.link}
                alt={card.name}
                className={styles.cardImage}
              />
            </div>
          ))}
        </section>
        
      </section>
    </div>
  );
};