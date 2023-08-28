import Link from "next/link";

const Navigation = () => {
  const list = ["home", "gallery", "biography", "contacts"];
  return (
    <nav>
      <ul>
        {list.map((item) => {
          return (
            <Link href={item === "home" ? "/" : "/" + item}>
              <li>{item}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
