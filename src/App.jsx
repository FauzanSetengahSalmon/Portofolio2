import DataImage, { listProyek2, listProyek3 } from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-6 py-12">
        {/* Bagian Kiri */}
        <div className="animate__animated animate__fadeInUp animate__delay-2s space-y-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 bg-zinc-800 w-fit mx-auto md:mx-0 p-4 rounded-2xl shadow-md">
            <img
              src={DataImage.HeroImage}
              alt="Hero"
              className="w-10 h-10 rounded-md object-cover"
              loading="lazy"
            />
            <q className="text-white text-sm">
              Aku bisa menyusun ribuan baris kode… tapi tak bisa merangkai cara
              melupakanmu.
            </q>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            Hi, Saya Ahmad Fauzan Ramadhan
          </h1>

          <p className="text-base text-white/70 leading-relaxed max-w-screen-sm mx-auto md:mx-0">
            🎓 Mahasiswa Rekayasa Perangkat Lunak Aplikasi dengan semangat
            tinggi dan ketertarikan yang kuat di bidang Teknologi Informasi dan
            Jaringan Komputer. Berpengalaman dalam pengembangan aplikasi
            berbasis web dan memahami dasar-dasar manajemen jaringan. Saat ini,
            saya terus mengembangkan skill melalui berbagai proyek praktikum,
            eksplorasi teknologi open source, dan pembelajaran mandiri di luar
            kurikulum kampus.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="https://drive.google.com/file/d/1lkQdpZQ7vP5H187cIU5sqI0j4TtOnODc/view?usp=drive_link"
              className="px-4 py-2 bg-white text-black rounded-md font-medium transition hover:bg-zinc-200 text-center"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="px-4 py-2 border border-white text-white rounded-md font-medium transition hover:bg-white hover:text-black text-center"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>

        {/* Bagian Kanan */}
        <div className="flex justify-center">
          <img
            src={DataImage.HeroImage}
            alt="Hero"
            className="animate__animated animate__fadeInUp animate__delay-3s w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>
      </div>

      {/* Bagian Tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="200"
        >
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            Halo! Nama saya Ahmad Fauzan Ramadhan, seorang mahasiswa aktif di
            Telkom University dengan fokus studi di bidang Rekayasa Perangkat
            Lunak Aplikasi. Sejak duduk di bangku SMK, saya sudah menekuni dunia
            teknologi—berawal dari jurusan Teknik Komputer dan Jaringan (TKJ) di
            SMKN 3 Kotabumi, tempat saya mulai mengenal dunia jaringan, sistem
            operasi, dan perangkat keras komputer. Latar belakang saya di TKJ
            menjadi fondasi kuat dalam memahami struktur dan logika sistem
            komputer, yang kemudian saya kembangkan lebih jauh melalui studi dan
            proyek aplikasi berbasis web dan mobile. Saya memiliki ketertarikan
            mendalam dalam pengembangan software, manajemen jaringan, dan
            eksplorasi teknologi open source. Setiap proyek praktikum menjadi
            ruang eksperimen untuk berinovasi, belajar dari kesalahan, dan
            memperkuat kemampuan kolaborasi tim. Di luar akademik, saya aktif
            mengikuti komunitas teknologi dan sering mengikuti pelatihan daring
            untuk memperluas wawasan seputar dunia IT modern seperti cloud
            computing, DevOps, dan cybersecurity. Saya percaya bahwa
            pembelajaran tidak berhenti di ruang kelas saja. Saya dikenal
            sebagai pribadi yang teliti, terbuka terhadap masukan, dan selalu
            bersemangat mencoba hal-hal baru. Dengan kombinasi skill teknis dan
            soft skill yang terus diasah, saya optimis untuk berkontribusi di
            dunia profesional dan menciptakan solusi digital yang bermakna.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  7<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tools yang dipakai
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50 text-center mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan
            Website ataupun Design dan juga membuat Jaringan dan Topologinya.
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="proyek mt-32 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Proyek Web
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Berikut ini beberapa proyek Web yang telah saya buat.
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              className="p-4 bg-zinc-800 rounded-md"
              key={proyek.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href={proyek.link}
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                    target="_blank"
                  >
                    Lihat Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="proyek2 mt-32 py-10" id="proyek2">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Proyek UI/UX
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Berikut ini beberapa proyek UI/UX yang telah saya buat.
        </p>
        <div className="proyek-box mt-14 flex justify-center">
          {listProyek2.map((proyek2) => (
            <div
              className="p-4 bg-zinc-800 rounded-md w-full max-w-lg"
              key={proyek2.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek2.dad}
            >
              <img
                src={proyek2.gambar}
                alt="Proyek Image"
                loading="lazy"
                className="w-full h-auto object-contain rounded-md"
              />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek2.nama}</h1>
                <p className="text-base/loose mb-4">{proyek2.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek2.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href={proyek2.link}
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                    target="_blank"
                  >
                    Lihat Penjelasan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pengalaman mt-32 py-10" id="pengalaman">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Pengalaman Lomba
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Berikut ini beberapa Pengalaman lomba saya.
        </p>
        <div className="proyek-box mt-14 flex justify-center">
          {listProyek3.map((proyek3) => (
            <div
              className="p-4 bg-zinc-800 rounded-md w-full max-w-lg"
              key={proyek3.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek3.dad}
            >
              <img
                src={proyek3.gambar}
                alt="Proyek Image"
                loading="lazy"
                className="w-full h-auto object-contain rounded-md"
              />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek3.nama}</h1>
                <p className="text-base/loose mb-4">{proyek3.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek3.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Kontak
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Mari terhubung dengan saya.
        </p>
        <form
          action="https://formsubmit.co/ahmadfauzan201006@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama"
                className="border border-zinc-600 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email...."
                className="border border-zinc-600 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Pesan..."
                className="border border-zinc-600 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer block border border-zinc-600 hover:bg-violet-600"
                type="submit"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
