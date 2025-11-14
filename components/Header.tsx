import Link from "next/link";

interface HeaderItem {
  name: string;
  path: string;
}

const headers: HeaderItem[] = [
  { name: "home", path: "/" },
  { name: "post", path: "/posts" },
  { name: "portfolio", path: "/portfolio" },
  { name: "career", path: "/career" },
];

const Header = () => {
  return (
    <div className="bg-black text-white">
      <div className="fixed top-0 bg-slate-800 p-6 w-full flex items-center justify-end gap-20 pr-20">
        {headers.map((header) => (
          <ul className="" key={header.name}>
            <Link href={`${header.path}`}>
              <li className="font-medium text-base cursor-pointer capitalize">
                {header.name}
              </li>
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Header;
