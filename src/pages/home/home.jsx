const Home = () => {
  return (
    <main>
      <div className="videoBox">
        <video className="videoBox__video" muted autoPlay loop>
          <source src="/src/assets/video/mainVideo.mp4" type="video/mp4" />
        </video>
      </div>
      <section className="about">
        <div className="about__box">
          <div className="about__textBox">
            <div className="about__title">
              <h1>Arkhitek</h1>
            </div>
            <div className="about__par">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                labore a beatae voluptate quia recusandae neque, maiores ad ab
                assumenda.
              </p>
            </div>
            <div className="about__par">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                labore a beatae voluptate quia recusandae neque, maiores ad ab
                assumenda.
              </p>
            </div>
            <div className="about__name">
              <p>Архитектор</p>
            </div>
            <div className="about__link">
              <a href="#" className="linkBtn">
                Подробнее о нас
              </a>
            </div>
          </div>
        </div>
        <div className="about__imgHouse" />
      </section>
      <section className="example">
        <div className="example__box">
          <div className="example__text">
            <div className="example__title">
              <h3>Architect</h3>
            </div>
            <div className="example__title2">
              <h2>Загородная архитектура</h2>
            </div>
            <div className="example__par">
              <p>
                Каждый дом – это произведение искусства, сочетающее в себе
                роскошь и гармонию. Мы создаем архитектуру, которую оценят
                обладатели утонченного вкуса и исключительного стиля. Откройте
                для себя уникальные загородные резиденции, окруженные
                живописными парками, зелеными аллеями или благоустроенными
                внутренними территориями. Мы расширяем границы привычной
                архитектуры и превращаем ваши мечты в реальность.
              </p>
            </div>
            <div className="example__boxBtn">
              <a href="#" className="linkBtn">
                Перейти к проектам
              </a>
            </div>
          </div>
          <div className="example__boxImg">
            <div className="example__img" />
          </div>
        </div>
      </section>
      <section className="example2">
        <div className="example__box">
          <div className="example2__boxImg">
            <div className="example__img" />
          </div>
          <div className="example__text">
            <div className="example__title">
              <h3>Architect</h3>
            </div>
            <div className="example__title">
              <h2>Загородная архитектура</h2>
            </div>
            <div className="example__par">
              <p>
                Каждый дом – это произведение искусства, сочетающее в себе
                роскошь и гармонию. Мы создаем архитектуру, которую оценят
                обладатели утонченного вкуса и исключительного стиля. Откройте
                для себя уникальные загородные резиденции, окруженные
                живописными парками, зелеными аллеями или благоустроенными
                внутренними территориями. Мы расширяем границы привычной
                архитектуры и превращаем ваши мечты в реальность.
              </p>
            </div>
            <div className="example__boxBtn">
              <a href="#" className="linkBtn">
                Перейти к проектам
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="example">
        <div className="example__box">
          <div className="example__text">
            <div className="example__title">
              <h3>Architect</h3>
            </div>
            <div className="example__title2">
              <h2>Загородная архитектура</h2>
            </div>
            <div className="example__par">
              <p>
                Каждый дом – это произведение искусства, сочетающее в себе
                роскошь и гармонию. Мы создаем архитектуру, которую оценят
                обладатели утонченного вкуса и исключительного стиля. Откройте
                для себя уникальные загородные резиденции, окруженные
                живописными парками, зелеными аллеями или благоустроенными
                внутренними территориями. Мы расширяем границы привычной
                архитектуры и превращаем ваши мечты в реальность.
              </p>
            </div>
            <div className="example__boxBtn">
              <a href="#" className="linkBtn">
                Перейти к проектам
              </a>
            </div>
          </div>
          <div className="example__boxImg">
            <div className="example__img" />
          </div>
        </div>
      </section>
      <section className="panorama">
        <div className="panorama__box">
          <div className="panorama__text">
            <h3>PANORAMA | 360</h3>
            <h2>Панорама</h2>
          </div>
          <div className="panorama__imgBox">
            <div className="panorama__img" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
