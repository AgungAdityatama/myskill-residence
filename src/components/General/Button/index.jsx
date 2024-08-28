import Link from "next/link";

const Button = ({ label, link, className = "", icon: Icon }) => {
  const defaultStyle =
    "flex items-center justify-center gap-2 rounded-md font-semibold hover:-translate-y-2 transition-all duration-700 p-4";
  const defaultColor = className.includes("bg-")
    ? ""
    : "bg-primary hover:bg-secondary text-white";
  const newClassName = `${defaultStyle} ${defaultColor} ${className}`;

  const setIcon = Icon ? (
    <Icon className="text-[1.25rem] font-extrabold" />
  ) : null;

  if (link) {
    return (
      <Link href={link} className={newClassName}>
        {label}
        {setIcon}
      </Link>
    );
  }

  return (
    <button className={newClassName}>
      {label}
      {setIcon}
    </button>
  );
};

export default Button;
