const Navbar = () => {
  return (
    <nav>
      <div className="logoBox">
        <div className="logoBox__logo">
          <a href="#" className="logoBox__link">
            BRAND
          </a>
        </div>
      </div>
      <div className="navList">
        <ul className="navList__list">
          <li className="navList__link">
            <a href="#">Главная</a>
          </li>
          <li className="navList__link">
            <a href="#">Услуги</a>
          </li>
          <li className="navList__link">
            <a href="#">Портфолио</a>
          </li>
          <li className="navList__link">
            <a href="#">О нас</a>
          </li>
          <li className="navList__link">
            <a href="#">Контакты</a>
          </li>
          <li className="navList__link">
            <a href="#">Карьера</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
