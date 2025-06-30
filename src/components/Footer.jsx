const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">My Portofolio</h1>
      <div className="flex gap-7">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#proyek">Proyek</a>
      </div>
      <div className="flex items-center gap-3 ">
        <a href="https://github.com/FauzanSetengahSalmon" aria-label="GitHub">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/fauzannnnnnn.r?igsh=MWxuN3Z4bm9jY2R3aA%3D%3D&utm_source=qr" aria-label="Instagram">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/ahmad-fauzan-ramadhan/" aria-label="LinkedIn">
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
        <a href="https://youtube.com/@fauzannakk?si=ZL6wtqbN75yyphjo" aria-label="GitHub">
          <i className="ri-youtube-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;