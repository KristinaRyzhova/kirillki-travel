import styles from "./homepage.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

export const Homepage: React.FC = () => {
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
              В 2025 годы мы планируем поехать в Азербайджан в апреле - мае.
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
            </p>
          </article>
        </div>
      </section>
      <section className={styles.rightPartHomepage}>
        <article className={styles.aboutUs}>
          <h3 className={styles.articleH3}>Привет! </h3>
          <p className={styles.articlePar}>
            Вы попали к Кириллкам, так нас однажды назвали наши друзья ну и
            название прижилось.
          </p>
          <p className={styles.articlePar}>
            Нас зовут Кирилл и Кристина и мы обожаем путешествия! Каждая поездка
            для нас — это не просто маршрут, а возможность наполнить жизнь
            новыми красками, эмоциями и историями, которыми с радостью поделимся
            здесь с вами.
          </p>
          <p className={styles.articlePar}>
            Более подробно про нас вы можете почитать в разделе{" "}
            <NavLink to="/about" className={styles.activeLink}>
              О&nbsp;нас
            </NavLink>
            .
          </p>
        </article>
      </section>
    </div>
  );
};
