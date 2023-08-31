import Link from "next/link";
import Logo from "../Logo/Logo";

const Navigation = () => {
  const list = ["home", "gallery", "biography", "contacts"];
  return (
    <nav>
      <ul>
        {list.map((item) => {
          return (
            <Link key={item} href={item === "home" ? "/" : "/" + item}>
              <li key={item}>{item}</li>
            </Link>
          );
        })}
      </ul>
      <Logo />
    </nav>
  );
};

export default Navigation;
