import React, { useState } from 'react';

// Data Dummy Portfolio
const portfolioItems = [
  { id: 1, img: "https://img.youtube.com/vi/MPbyugTkP2w/maxresdefault.jpg", title: "LOMBA INI BIKIN KITA LEMAS TAK BERDAYA!!!!!!", subtitle: "DaiVlog Special Episode", link: "/portofolio/detail-page/detailvideoyt-SAYQAK.html" },
  { id: 2, img: "https://img.youtube.com/vi/Q732JtfjsZ8/maxresdefault.jpg", title: "MENDATANGI ACARA WIBU YANG ADA VTUBERNYA COYYY!!!!!", subtitle: "DaiVlog Eps 1 - Chibicon 2024", link: "/portofolio/detail-page/detailvideoyt-usqSTC.html" },
  { id: 3, img: "https://i.ytimg.com/vi/cOGy9EOZ1Gc/maxresdefault.jpg", title: "Wawancara dengan salah satu karyawan Ikan Bakar Jimbaran", subtitle: "", link: "/portofolio/detail-page/detailvideotugas-K1lJ10.html" },
  { id: 4, img: "https://i.ytimg.com/vi/IVobv3j70Uk/mqdefault.jpg", title: "Tugas Admin Sistem Jaringan - Hosting", subtitle: "", link: "/portofolio/detail-page/detailvideotugas-asjhosting.html" },
  { id: 5, img: "https://i.ytimg.com/vi/b-UriD4YLxA/mqdefault.jpg", title: "Rekap Pemilihan Ketua & Wakil Ketua OSIS 2022 SMK YPPI Surabaya", subtitle: "", link: "/portofolio/video/videoreels-rekappemilihanosis2022.html" },
  { id: 6, img: "https://i3.ytimg.com/vi/8BvUeWDMTaA/mqdefault.jpg", title: "Rekap YPPI Fiesta 2022", subtitle: "", link: "/portofolio/video/videoreels-rekapyppifiesta2022.html" },
  { id: 7, img: "https://img.youtube.com/vi/IXGUcHPhhQw/mqdefault.jpg", title: "Commercial Video Competition SMK YPPI Surabaya", subtitle: "", link: "/portofolio/detail-page/detailvideoreels-lombacommercialsmkyppi.html" },
  { id: 8, img: "/portofolio/imgs/design-3.jpg", title: "Feed Instagram Bersambung", subtitle: "Desain dokumentasi Hari Paskah", link: "#" },
  { id: 9, img: "/portofolio/imgs/design-4.jpg", title: "Pamflet untuk Instagram Story", subtitle: "Desain ucapan HUT 77 RI", link: "#" },
  { id: 10, img: "/portofolio/imgs/photo-1.webp", title: "Foto pemandangan Pakuwon City", subtitle: "Surabaya Timur", link: "/portofolio/detail-page/detailfoto-fhao0971.html" },
];

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="font-sans text-dark antialiased">
      
      {/* Floating Donation Button */}
      <a className="fixed bottom-9 right-1 z-50 w-20 h-20 text-center transform -translate-x-6 text-[#363636] text-xs font-extrabold uppercase hover:no-underline group" href="/donation.html" target="_blank" rel="noreferrer">
        <img src="/imgs/donation.png" alt="Donation" className="w-[80%] rounded-full shadow-md mx-auto transition-transform group-hover:-translate-y-1" />
        <span className="block mt-1.5"><p>Donation</p></span>
      </a>

      {/* Header / Hero Section */}
      <header 
        className="relative h-[80vh] min-h-[600px] bg-cover bg-center bg-fixed text-white flex items-center"
        style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/imgs/header.jpg')` }}
      >
        <div className="container mx-auto px-4 relative h-full">
          <div className="absolute left-0 top-[55%] transform -translate-y-1/2 w-full px-4 md:px-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {/* JUDUL UTAMA: Pake Warna PINK (Primary) */}
              <span className="text-primary">THE PUTRA'S</span>
            </h1>
            <h6 className="uppercase tracking-[5px] font-medium text-sm md:text-base mb-10">
              Design, Editor, and Photography
            </h6>
            <h6 className="uppercase tracking-[5px] font-medium text-xs md:text-sm mb-10">
              Portofolio dari <span className="text-primary font-bold">Putra</span>
            </h6>
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white shadow-md py-3 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="/" className="flex items-center">
            <img className="w-[150px] h-auto my-2 mx-2" src="/imgs/logo-header.png" alt="Logo" />
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-dark border rounded border-transparent hover:text-opacity-75 focus:outline-none"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {/* Icon Hamburger Manual pake SVG biar ga perlu fontawesome */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>

          <div className={`${isNavOpen ? 'block' : 'hidden'} w-full md:block md:w-auto mt-4 md:mt-0`}>
            <ul className="flex flex-col md:flex-row md:space-x-6">
              {/* Menu Links: Hover warna BIRU biar interaktif */}
              <li><a href="/portofolio/portofolio.html" className="block py-2 font-bold hover:text-blue transition-colors text-dark">Portfolio</a></li>
              <li><a href="/about.html" className="block py-2 font-bold hover:text-blue transition-colors text-dark">About</a></li>
              <li><a href="/contact.html" className="block py-2 font-bold hover:text-blue transition-colors text-dark">Contact</a></li>
              <li><a href="/shop.html" className="block py-2 font-bold hover:text-blue transition-colors text-dark">Shop</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* About Highlights */}
      <div className="container-fluid mx-auto border-b border-gray-200 bg-white">
        <div id="about" className="flex flex-wrap">
          {/* Card 1 */}
          <div className="w-full lg:w-1/3 p-12 lg:p-16 border-r border-gray-200 last:border-r-0">
            <h3 className="font-light text-3xl mb-2">Siapa itu PUTRA?</h3>
            {/* Garis biru */}
            <span className="block w-8 h-[2px] bg-blue mb-8"></span>
            <h5 className="text-xl mb-4 font-medium text-dark">Berpengalaman dalam organisasi dan kepanitiaan, memiliki beragam kemampuan</h5>
            <p className="mt-5 text-gray-600 text-sm md:text-base leading-relaxed">
              Melalui pengalaman tersebut, saya telah mengembangkan keterampilan kepemimpinan, kemampuan berkolaborasi, dan kemampuan mengatur waktu dengan baik.
              {/* Link: Warna Biru */}
              <a href="/about.html" className="text-blue hover:text-blue-hover font-semibold no-underline ml-1 inline-flex items-center">
                Baca kisah lengkapnya <span className="ml-1">&raquo;</span>
              </a>
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="w-full lg:w-1/3 p-12 lg:p-16 border-r border-gray-200 last:border-r-0">
            <h3 className="font-light text-3xl mb-2">Asal THE PUTRAS diciptakan</h3>
            <span className="block w-8 h-[2px] bg-blue mb-8"></span>
            <h5 className="text-xl mb-4 font-medium text-dark">Berawal dari 2020, THE PUTRA'S diciptakan untuk media portofolio Putra</h5>
            <a href="/about.html" className="text-blue hover:text-blue-hover font-semibold no-underline text-sm mt-5 inline-flex items-center">
              Baca kisah lengkapnya <span className="ml-1">&raquo;</span>
            </a>
          </div>
          
          {/* Card 3 */}
          <div className="w-full lg:w-1/3 p-12 lg:p-16 border-r border-gray-200 last:border-r-0">
            <h3 className="font-light text-3xl mb-2">Resume Saya</h3>
            <span className="block w-8 h-[2px] bg-blue mb-8"></span>
            <h5 className="text-xl mb-4 font-medium text-dark">Rekap kegiatan Putra selama ini</h5>
            <a href="/about.html#resume" className="text-blue hover:text-blue-hover font-semibold no-underline text-sm mt-5 inline-flex items-center">
              Baca kisah lengkapnya <span className="ml-1">&raquo;</span>
            </a>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <section className="py-20 bg-customGray" id="portfolio">
        <div className="container mx-auto px-4">
          {/* Judul: PINK (Primary) */}
          <h1 className="mb-12 text-4xl font-medium"><span className="text-primary font-bold">Latest</span> Portfolio</h1>
          <h6 className="mb-12">
            <a href="/portofolio/portofolio.html" className="text-blue hover:text-blue-hover text-sm font-semibold inline-flex items-center">
              Portofolio lainnya <span className="ml-1">&raquo;</span>
            </a>
          </h6>

          <div className="flex flex-wrap -mx-4">
            {portfolioItems.map((item) => (
              <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="portfolio-item relative group h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-t-lg">
                     <img src={item.img} className="w-full h-auto object-cover transition-transform duration-500 transform group-hover:scale-110" alt={item.title} />
                  </div>
                  
                  {/* Content Holder */}
                  <div className="bg-white border border-gray-200 p-5 rounded-b-lg flex-grow flex flex-col justify-between relative z-10 -mt-2 pt-6">
                    <div>
                        <h6 className="font-bold text-base mb-2 text-dark line-clamp-2" title={item.title}>
                        {item.title}
                        </h6>
                        {item.subtitle && (
                        <p className="text-sm text-gray-500 mb-4">{item.subtitle}</p>
                        )}
                    </div>
                    
                    {/* TOMBOL: Warna BIRU (Konsisten sama tema tombol detail) */}
                    <div>
                        <a className="inline-block px-4 py-2 bg-blue text-white text-sm font-medium rounded hover:bg-blue-hover transition-colors" href={item.link}>
                        Show Detail
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-[#41C9E2]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-white mb-0">
            &copy; {new Date().getFullYear()} Created By <span className="text-white font-bold bg-primary px-1 rounded">THE PUTRA'S</span>
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;