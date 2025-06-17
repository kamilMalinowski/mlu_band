import "./Button.scss";

function Button({
  type = "button",
  variant = "",
  text,
  icon,
  href = "#",
  target = "_self",
  onClick
}) {
  if (type === "link") {
    return (
      <a onClick={onClick}
        className={`btn btn--${variant}`}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        <p className="btn__text">{text}</p>
        {icon}
      </a>
    );
  }

  return (
    <button  onClick={onClick}className={`btn btn--${variant}`} type="button">
      <p className="btn__text">{text}</p>
      {icon}
    </button>
  );
}

export default Button;
