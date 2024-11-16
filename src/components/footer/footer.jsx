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
          <div className="footerBox__infoBox">
            <div className="footerBox__inputBox">
              <input className="footerBox__input" placeholder="ИМЯ" />
            </div>
            <div className="footerBox__inputBox2">
              <input className="footerBox__input" placeholder="ТЕЛЕФОН" />
            </div>
            <div className="footerBox__btnBox">
              <button className="footerBox__btn">Отправить</button>
            </div>
          </div>
        </div>
        <div className="footerBox__contract">
          <p>
            Нажимая на кнопку “отправить заявку”, я соглашаюсь с условиями
            политики конфиденциальности
          </p>
        </div>
        <div className="footerBox__boxImg">
          <img className="footerBox__img" src="/src/assets/img/footerImg.jpg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
