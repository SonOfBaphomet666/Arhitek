const Footer = () => {
  return (
    <footer>
      <div className="footerBox">
        <div className="footerBox__textBox">
          <div className="footerBox__title">
            <h3>Architect</h3>
          </div>
          <div className="footerBox__title2">
            <h2>Обсудить Проект</h2>
          </div>
          <div className="footerBox__par">
            <p>Мы перезвоним и ответим на все вопросы</p>
          </div>
          <div className="footerBox__div">
            <div className="footerBox__infoBox">
              <div className="footerBox__inputBox">
                <input className="footerBox__input" placeholder="ИМЯ" />
              </div>
              <div className="footerBox__inputBox">
                <input className="footerBox__input" placeholder="ТЕЛЕФОН" />
              </div>
              <div className="footerBox__btnBox">
                <button className="footerBox__btn">Отправить</button>
              </div>
            </div>
            <div className="footerBox__contract">
              <p>
                Нажимая на кнопку “отправить заявку”, я соглашаюсь с условиями
                политики конфиденциальности
              </p>
            </div>
          </div>
        </div>
        <div className="footerBox__boxImg">
          <div className="footerBox__img" />
        </div>
      </div>

      <div className="sideBar">
        <div className="sideBar__navBox">
          <div className="sideBar__nav">
            <ul className="sideBar__list">
              <li className="sideBar__link">
                <a href="#">Главная</a>
              </li>
              <li className="sideBar__link">
                <a href="#">Услуги</a>
              </li>
              <li className="sideBar__link">
                <a href="#">Портфолио</a>
              </li>
              <li className="sideBar__link">
                <a href="#">О нас</a>
              </li>
              <li className="sideBar__link">
                <a href="#">Контакты</a>
              </li>
              <li className="sideBar__link">
                <a href="#">Карьера</a>
              </li>
            </ul>
          </div>
          <div className="sideBar__logo">
            <h1>LOGO</h1>
          </div>
          <div className="sideBar__info">
            <p style={{ fontSize: 16 }}>+799999999</p>
            <p style={{ fontSize: 16 }}>EMAIL</p>
            <p style={{ fontSize: 16 }}>Для коммерческих предложений</p>
            <div className="sideBar__button">
              <button className="linkBtn">Оставить заявку</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
