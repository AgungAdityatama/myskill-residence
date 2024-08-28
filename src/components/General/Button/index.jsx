import Link from "next/link";
import PropTypes from "prop-types";

const Button = ({ label, link, className, icon: Icon }) => {
  const defaultStyle = `flex items-center justify-center gap-2 rounded-md font-semibold hover:-translate-y-2 transition-all duration-700 bg-primary hover:bg-secondary text-white p-4 ${className}`;

  const setIcon = Icon ? (
    <Icon className="text-[1.25rem] font-extrabold" />
  ) : null;

  if (link) {
    return (
      <Link href={link} className={defaultStyle}>
        {label}
        {setIcon}
      </Link>
    );
  }

  return (
    <button className={defaultStyle}>
      {label}
      {setIcon}
    </button>
  );
};

// Button.propTypes = {
//   label: PropTypes.string.isRequired,
//   link: PropTypes.string,
//   className: PropTypes.string,
//   icon: PropTypes.elementType,
// };

export default Button;
