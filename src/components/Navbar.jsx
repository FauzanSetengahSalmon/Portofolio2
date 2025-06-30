import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar py-7 px-7 flex items-center justify-between fixed top-0 left-0 w-full z-50 bg-zinc-900">
      <div className="logo">
        <h1 className="text-xl font-bold text-white">My Portofolio</h1>
      </div>

      <ul
        className={`menu flex flex-wrap items-center gap-4 md:gap-10 md:static absolute top-full left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bg-white/30 backdrop-blur-md p-4 rounded-b-2xl md:bg-transparent md:p-0 transition-all duration-300 ${
          active ? "md:opacity-100 md:top-full" : "md:-top-10 md:opacity-0"
        }`}
      >
        {["Beranda", "Tentang", "Proyek", "Pengalaman", "Kontak"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-base md:text-lg font-medium text-white hover:underline"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;