import "./MenuBtn.scss";

function MenuBtn({state, onClick}) {
  return (
    <button onClick={onClick} className={`menu-btn menu-btn--${state}`}>
      <span className="menu-btn__line"></span>
      <span className="menu-btn__line"></span>
      <span className="menu-btn__line"></span>
    </button>
  );
}

export default MenuBtn;
