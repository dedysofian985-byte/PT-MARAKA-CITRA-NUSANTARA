import React, { useEffect, useState } from 'react';
// @ts-ignore
import containerOfficeImg from './assets/images/container_office_1781630225214.jpg';
// @ts-ignore
import excavatorImg from './assets/images/excavator_project_1781630580043.jpg';
// @ts-ignore
import mcnLogoImg from './assets/images/mcn_logo_1781631106856.jpg';
// @ts-ignore
import dumpTruckImg from './assets/images/dump_truck_work_1781631384329.jpg';
// @ts-ignore
import infrastrukturImg from './assets/images/infrastruktur_kawasan_1781631560947.jpg';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    perusahaan: '',
    email: '',
    telepon: '',
    layanan: '',
    pesan: ''
  });

  useEffect(() => {
    // Scroll reveal observer
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));

    // Nav scroll trigger
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      reveals.forEach(el => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nama) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-[#F97316] selection:text-white">
      
      {/* NAVBAR */}
      <nav 
        style={{ 
          background: isScrolled ? 'rgba(5,5,5,0.98)' : 'rgba(10,10,10,0.92)' 
        }}
        className="transition-colors duration-300"
      >
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, 'home')} 
          className="nav-logo" 
          style={{ textDecoration: 'none' }}
        >
          <div className="nav-logo-icon bg-transparent overflow-hidden">
            <img 
              src={mcnLogoImg} 
              alt="Logo PT Maraka Citra Nusantara" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer" 
            />
          </div>
          <div className="nav-logo-text">
            <span className="nav-logo-name">Maraka Citra Nusantara</span>
            <span className="nav-logo-tagline">Material · Konstruksi · Pertambangan</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="#tentang" onClick={(e) => scrollToSection(e, 'tentang')}>Tentang</a></li>
          <li><a href="#layanan" onClick={(e) => scrollToSection(e, 'layanan')}>Layanan</a></li>
          <li><a href="#proyek" onClick={(e) => scrollToSection(e, 'proyek')}>Proyek</a></li>
          <li><a href="#area" onClick={(e) => scrollToSection(e, 'area')}>Area</a></li>
          <li><a href="#visi" onClick={(e) => scrollToSection(e, 'visi')}>Visi & Misi</a></li>
          <li><a href="#kontak" onClick={(e) => scrollToSection(e, 'kontak')} className="nav-cta">Hubungi Kami</a></li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-white focus:outline-none text-2xl hover:text-[#F97316] transition-colors"
          aria-label="Toggle Menu"
          id="hamburger-btn"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Drawer menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-[72px] bg-neutral-950/95 backdrop-blur-lg z-50 flex flex-col p-6 gap-6 md:hidden border-t border-neutral-800 animate-slideDown">
          <a href="#tentang" onClick={(e) => scrollToSection(e, 'tentang')} className="text-xl uppercase font-semibold tracking-wider hover:text-[#F97316] transition-colors py-2 border-b border-neutral-900">Tentang</a>
          <a href="#layanan" onClick={(e) => scrollToSection(e, 'layanan')} className="text-xl uppercase font-semibold tracking-wider hover:text-[#F97316] transition-colors py-2 border-b border-neutral-900">Layanan</a>
          <a href="#proyek" onClick={(e) => scrollToSection(e, 'proyek')} className="text-xl uppercase font-semibold tracking-wider hover:text-[#F97316] transition-colors py-2 border-b border-neutral-900">Proyek</a>
          <a href="#area" onClick={(e) => scrollToSection(e, 'area')} className="text-xl uppercase font-semibold tracking-wider hover:text-[#F97316] transition-colors py-2 border-b border-neutral-900">Area</a>
          <a href="#visi" onClick={(e) => scrollToSection(e, 'visi')} className="text-xl uppercase font-semibold tracking-wider hover:text-[#F97316] transition-colors py-2 border-b border-neutral-900">Visi & Misi</a>
          <a href="#kontak" onClick={(e) => scrollToSection(e, 'kontak')} className="btn-primary w-full text-center block mt-4">Hubungi Kami</a>
        </div>
      )}

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg" style={{ pointerEvents: 'none' }}></div>
        <div className="hero-content">
          <div className="hero-badge">PT Maraka Citra Nusantara</div>
          <h1>Solusi Profesional<br /><span>Suplai Material,</span><br />Konstruksi &amp;<br />Pertambangan</h1>
          <p>Mitra terpercaya dalam penyediaan pasir, pekerjaan konstruksi, transportasi material, dan layanan pendukung pertambangan di Indonesia.</p>
          <div className="hero-actions">
            <a href="#kontak" onClick={(e) => scrollToSection(e, 'kontak')} className="btn-primary">Hubungi Kami ›</a>
            <a href="#layanan" onClick={(e) => scrollToSection(e, 'layanan')} className="btn-secondary">Lihat Layanan</a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">5+</span>
            <span className="stat-label">Tahun Pengalaman</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">7+</span>
            <span className="stat-label">Proyek Selesai</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">3</span>
            <span className="stat-label">Wilayah Operasional</span>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* TENTANG */}
      <section id="tentang">
        <div className="about-grid">
          <div className="about-text reveal">
            <div className="section-tag">Tentang Kami</div>
            <h2 className="section-title">PT Maraka<br /><span>Citra Nusantara</span></h2>
            <p className="section-subtitle">Perusahaan profesional yang bergerak di bidang suplai material konstruksi, jasa konstruksi, pekerjaan pendukung pertambangan, dan transportasi material. Kami berkomitmen menghadirkan layanan tepat waktu dan berkualitas untuk proyek skala kecil hingga besar.</p>
            <div className="about-pills">
              <span className="pill">🏗 Suplai Material</span>
              <span className="pill">⛏ Pertambangan</span>
              <span className="pill">🚛 Transportasi</span>
              <span className="pill">🏢 Konstruksi</span>
              <span className="pill">⚙️ Alat Berat</span>
              <span className="pill">📐 Infrastruktur</span>
            </div>
          </div>
          <div className="about-visual reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="about-card-stack">
              <div className="about-card"><span className="about-card-icon">🪨</span><span className="about-card-label">Suplai pasir dan material konstruksi</span></div>
              <div className="about-card"><span className="about-card-icon">🏗</span><span className="about-card-label">Jasa konstruksi dan pekerjaan sipil</span></div>
              <div className="about-card"><span className="about-card-icon">⛏</span><span className="about-card-label">Pekerjaan pendukung pertambangan</span></div>
              <div className="about-card"><span className="about-card-icon">🚛</span><span className="about-card-label">Transportasi dan logistik material</span></div>
              <div className="about-card"><span className="about-card-icon">🏗️</span><span className="about-card-label">Mobilisasi alat berat</span></div>
              <div className="about-card"><span className="about-card-icon">📐</span><span className="about-card-label">Pekerjaan proyek infrastruktur</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* LAYANAN */}
      <section id="layanan">
        <div className="layanan-header reveal">
          <div>
            <div className="section-tag">Layanan Kami</div>
            <h2 className="section-title">Apa yang<br /><span>Kami Tawarkan</span></h2>
          </div>
          <p className="section-subtitle" style={{ maxWidth: '380px' }}>Rangkaian layanan lengkap untuk mendukung kebutuhan konstruksi dan pertambangan Anda.</p>
        </div>
        <div className="services-grid">
          <div className="service-card reveal">
            <div className="service-num">01</div>
            <span className="service-icon">🪨</span>
            <div className="service-title">Suplai Pasir &amp; Material</div>
            <ul className="service-list">
              <li>Pasir urug</li>
              <li>Pasir cor</li>
              <li>Batu split</li>
              <li>Sirtu</li>
              <li>Basecourse</li>
              <li>Material proyek lainnya</li>
            </ul>
          </div>
          <div className="service-card reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="service-num">02</div>
            <span className="service-icon">🏗</span>
            <div className="service-title">Jasa Konstruksi</div>
            <ul className="service-list">
              <li>Cut &amp; fill</li>
              <li>Jalan proyek</li>
              <li>Drainase</li>
              <li>Land clearing</li>
              <li>Pekerjaan sipil</li>
              <li>Infrastruktur kawasan</li>
              <li>Bangunan modular kontainer</li>
            </ul>
          </div>
          <div className="service-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="service-num">03</div>
            <span className="service-icon">⛏</span>
            <div className="service-title">Pendukung Pertambangan</div>
            <ul className="service-list">
              <li>Support hauling</li>
              <li>Loading material</li>
              <li>Penyewaan alat berat</li>
              <li>Mobilisasi proyek</li>
              <li>Manpower support</li>
              <li>Operasional lapangan</li>
            </ul>
          </div>
          <div className="service-card reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="service-num">04</div>
            <span className="service-icon">🚛</span>
            <div className="service-title">Transportasi Material</div>
            <ul className="service-list">
              <li>Dump truck</li>
              <li>Tronton</li>
              <li>Excavator support</li>
              <li>Kendaraan operasional</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* KEUNGGULAN */}
      <section id="keunggulan">
        <div className="keunggulan-inner">
          <div className="keunggulan-header reveal">
            <div className="section-tag">Keunggulan</div>
            <h2 className="section-title">Mengapa Memilih <span>Kami?</span></h2>
          </div>
          <div className="keunggulan-grid">
            <div className="keung-card reveal">
              <span className="keung-icon">👷</span>
              <div className="keung-title">Tim Profesional</div>
              <div className="keung-desc">Tim berpengalaman dan terlatih siap menangani berbagai skala proyek dengan standar tinggi.</div>
            </div>
            <div className="keung-card reveal" style={{ transitionDelay: '0.08s' }}>
              <span className="keung-icon">⚡</span>
              <div className="keung-title">Respon Cepat</div>
              <div className="keung-desc">Komunikasi profesional dan responsif untuk memastikan setiap kebutuhan klien terpenuhi segera.</div>
            </div>
            <div className="keung-card reveal" style={{ transitionDelay: '0.16s' }}>
              <span className="keung-icon">🚜</span>
              <div className="keung-title">Armada Lengkap</div>
              <div className="keung-desc">Armada dump truck, excavator, dan alat berat pendukung siap mendukung operasional proyek besar.</div>
            </div>
            <div className="keung-card reveal" style={{ transitionDelay: '0.24s' }}>
              <span className="keung-icon">⏰</span>
              <div className="keung-title">Tepat Waktu</div>
              <div className="keung-desc">Komitmen penyelesaian proyek sesuai jadwal tanpa mengorbankan kualitas pekerjaan.</div>
            </div>
            <div className="keung-card reveal" style={{ transitionDelay: '0.32s' }}>
              <span className="keung-icon">💰</span>
              <div className="keung-title">Harga Kompetitif</div>
              <div className="keung-desc">Penawaran harga terbaik dengan kualitas premium untuk efisiensi anggaran proyek Anda.</div>
            </div>
            <div className="keung-card reveal" style={{ transitionDelay: '0.4s' }}>
              <span className="keung-icon">🏆</span>
              <div className="keung-title">Kualitas Terjamin</div>
              <div className="keung-desc">Standar kualitas ketat diterapkan di setiap lini pekerjaan untuk hasil terbaik.</div>
            </div>
            <div className="keung-card reveal" style={{ transitionDelay: '0.48s' }}>
              <span className="keung-icon">📋</span>
              <div className="keung-title">Siap Tender</div>
              <div className="keung-desc">Pengalaman dan kapasitas memadai untuk mendukung proyek tender skala nasional.</div>
            </div>
            <div className="keung-card reveal" style={{ transitionDelay: '0.56s' }}>
              <span className="keung-icon">🤝</span>
              <div className="keung-title">Kemitraan Jangka Panjang</div>
              <div className="keung-desc">Membangun hubungan kerja sama yang berkelanjutan dan saling menguntungkan bersama klien.</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* PROYEK */}
      <section id="proyek">
        <div className="proyek-header reveal">
          <div className="section-tag">Dokumentasi</div>
          <h2 className="section-title">Proyek &amp; <span>Dokumentasi</span></h2>
          <p className="section-subtitle">Rekam jejak pekerjaan kami di berbagai wilayah Indonesia.</p>
        </div>
        <div className="gallery-grid reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="gallery-item" id="project-1">
            <img className="gallery-img" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Konstruksi" referrerPolicy="no-referrer" />
            <div className="gallery-overlay">
              <div className="gallery-proj-name">Proyek Konstruksi Jalan</div>
              <div className="gallery-proj-info">NTT · 2024</div>
            </div>
          </div>
          <div className="gallery-item" id="project-2">
            <img className="gallery-img" src={dumpTruckImg} alt="Dump Truck Operasional" referrerPolicy="no-referrer" />
            <div className="gallery-overlay">
              <div className="gallery-proj-name">Operasional Dump Truck</div>
              <div className="gallery-proj-info">Sulawesi · 2024</div>
            </div>
          </div>
          <div className="gallery-item" id="project-3">
            <img className="gallery-img" src={excavatorImg} alt="Pekerjaan Excavator" referrerPolicy="no-referrer" />
            <div className="gallery-overlay">
              <div className="gallery-proj-name">Pekerjaan Excavator</div>
              <div className="gallery-proj-info">Kalimantan · 2023</div>
            </div>
          </div>
          <div className="gallery-item" id="project-4">
            <img className="gallery-img" src={containerOfficeImg} alt="Proyek Bangunan Modular Kontainer" referrerPolicy="no-referrer" />
            <div className="gallery-overlay">
              <div className="gallery-proj-name">Proyek Bangunan Modular Kontainer</div>
              <div className="gallery-proj-info">Dompu · 2024</div>
            </div>
          </div>
          <div className="gallery-item" id="project-5">
            <img className="gallery-img" src={infrastrukturImg} alt="Infrastruktur Kawasan" referrerPolicy="no-referrer" />
            <div className="gallery-overlay">
              <div className="gallery-proj-name">Infrastruktur Kawasan</div>
              <div className="gallery-proj-info">NTT · 2022</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* AREA OPERASIONAL */}
      <section id="area">
        <div className="area-inner">
          <div className="area-text reveal">
            <div className="section-tag">Area Operasional</div>
            <h2 className="section-title">Siap Melayani<br /><span>Seluruh Indonesia</span></h2>
            <p className="section-subtitle">Kami siap melayani kebutuhan proyek di berbagai wilayah strategis Indonesia, dengan fokus utama pada kawasan pertambangan dan konstruksi aktif.</p>
          </div>
          <div className="area-map reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="area-dots">
              <div className="area-dot"><div className="dot-pulse"></div><span className="area-dot-name">Nusa Tenggara Barat</span></div>
              <div className="area-dot"><div className="dot-pulse"></div><span className="area-dot-name">Nusa Tenggara Timur</span></div>
              <div className="area-dot"><div className="dot-pulse"></div><span className="area-dot-name">Sulawesi</span></div>
              <div className="area-dot"><div className="dot-pulse"></div><span className="area-dot-name">Kalimantan</span></div>
              <div className="area-dot" style={{ gridColumn: 'span 2' }}><div className="dot-pulse"></div><span className="area-dot-name">Wilayah Pertambangan &amp; Konstruksi Lainnya</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* VISI MISI */}
      <section id="visi" style={{ padding: 0 }}>
        <div className="visimisi-inner">
          <div className="visi-panel reveal">
            <div className="section-tag">Visi</div>
            <h2 className="section-title">Visi<br /><span>Kami</span></h2>
            <p className="visi-text">Menjadi perusahaan nasional terpercaya di bidang suplai material, konstruksi, dan pendukung pertambangan di Indonesia.</p>
          </div>
          <div className="misi-panel reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="section-tag">Misi</div>
            <h2 className="section-title">Misi<br /><span>Kami</span></h2>
            <ul className="misi-list">
              <li className="misi-item"><span className="misi-num">01</span><span>Memberikan layanan profesional dan berkualitas tinggi di setiap pekerjaan.</span></li>
              <li className="misi-item"><span className="misi-num">02</span><span>Mendukung percepatan pembangunan infrastruktur nasional.</span></li>
              <li className="misi-item"><span className="misi-num">03</span><span>Menjalin kerja sama jangka panjang yang saling menguntungkan dengan klien.</span></li>
              <li className="misi-item"><span className="misi-num">04</span><span>Mengembangkan operasional berbasis efisiensi dan teknologi modern.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* KONTAK */}
      <section id="kontak">
        <div className="kontak-inner">
          <div className="kontak-info reveal">
            <div className="section-tag">Hubungi Kami</div>
            <h2 className="section-title">Siap<br /><span>Bekerjasama?</span></h2>
            <p className="section-subtitle">Hubungi kami untuk konsultasi kebutuhan proyek, penawaran harga, atau informasi lebih lanjut tentang layanan kami.</p>
            
            <div className="kontak-channels">
              {/* KANTOR PUSAT */}
              <div className="text-gray-400 font-sans font-bold text-xs uppercase tracking-widest flex items-center gap-2 mt-4">
                <span className="text-[#F97316]">🏢</span> KANTOR PUSAT
              </div>
              <div className="kontak-channel" style={{ cursor: 'default', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
                <span className="text-xs text-neutral-400 line-clamp-3">
                  📍 Jln. Syekh Subuh Tonggondoa Palibelo, Bima, NTB
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold">
                  <a href="tel:+6282341471397" className="text-[#F97316] hover:underline flex items-center gap-1">
                    📞 +62 823-4147-1397
                  </a>
                  <span className="text-neutral-700">|</span>
                  <a href="mailto:ptmarakacitranusantara@gmail.com" className="text-[#F97316] hover:underline flex items-center gap-1 break-all">
                    ✉️ ptmarakacitranusantara@gmail.com
                  </a>
                </div>
              </div>

              {/* KANTOR OPERASIONAL */}
              <div className="text-gray-400 font-sans font-bold text-xs uppercase tracking-widest flex items-center gap-2 mt-2">
                <span className="text-[#F97316]">⚙️</span> KANTOR OPERASIONAL
              </div>
              <div className="kontak-channel" style={{ cursor: 'default', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
                <span className="text-xs text-neutral-400 line-clamp-3">
                  📍 Jln. Lintas Lakey, Dusun Kuta, Desa Rasabou, Kec. Hu'u, Kab. Dompu
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold">
                  <a href="tel:+6285238782735" className="text-[#F97316] hover:underline flex items-center gap-1">
                    📞 +62 852-3878-2735
                  </a>
                  <span className="text-neutral-700">|</span>
                  <a href="mailto:marakamcn@gmail.com" className="text-[#F97316] hover:underline flex items-center gap-1 break-all">
                    ✉️ marakamcn@gmail.com
                  </a>
                </div>
              </div>

              {/* AREA CAKUPAN */}
              <div className="kontak-channel" style={{ cursor: 'default' }}>
                <div className="kontak-ch-icon">📍</div>
                <div>
                  <div className="kontak-ch-label">Area Operasional</div>
                  <div className="kontak-ch-value">NTB · NTT · Sulawesi · Kalimantan</div>
                </div>
              </div>
            </div>
          </div>

          <div className="kontak-form reveal" style={{ transitionDelay: '0.15s' }}>
            {submitted ? (
              <div className="bg-[#111111] border border-neutral-800 p-8 rounded text-center flex flex-col items-center justify-center min-h-[400px] animate-fadeUp">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="font-sans font-bold text-xl text-[#F97316] uppercase tracking-wider mb-2">Pesan Terkirim</h3>
                <p className="text-sm text-neutral-400 mb-6 max-w-sm leading-relaxed">
                  Terima kasih, <strong>{formData.nama}</strong>. Detail kebutuhan proyek Anda telah kami terima. Tim kami akan segera menghubungi Anda kembali melalui kontak yang diberikan.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ nama: '', perusahaan: '', email: '', telepon: '', layanan: '', pesan: '' });
                  }}
                  className="btn-primary"
                >
                  Kirim Pesan Lain ›
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="input-nama">Nama Lengkap</label>
                    <input 
                      id="input-nama"
                      type="text" 
                      name="nama"
                      value={formData.nama}
                      onChange={handleInputChange}
                      placeholder="Budi Santoso"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="input-perusahaan">Perusahaan</label>
                    <input 
                      id="input-perusahaan"
                      type="text" 
                      name="perusahaan"
                      value={formData.perusahaan}
                      onChange={handleInputChange}
                      placeholder="PT Contoh"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="input-email">Email</label>
                    <input 
                      id="input-email"
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@perusahaan.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="input-telepon">Telepon</label>
                    <input 
                      id="input-telepon"
                      type="tel" 
                      name="telepon"
                      value={formData.telepon}
                      onChange={handleInputChange}
                      placeholder="+62 8xx xxxx xxxx"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="select-layanan">Kebutuhan Layanan</label>
                  <select 
                    id="select-layanan"
                    name="layanan"
                    value={formData.layanan}
                    onChange={handleInputChange}
                  >
                    <option value="">Pilih Layanan...</option>
                    <option value="Suplai Pasir &amp; Material">Suplai Pasir &amp; Material</option>
                    <option value="Jasa Konstruksi">Jasa Konstruksi</option>
                    <option value="Pendukung Pertambangan">Pendukung Pertambangan</option>
                    <option value="Transportasi Material">Transportasi Material</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="textarea-pesan">Pesan / Detail Kebutuhan</label>
                  <textarea 
                    id="textarea-pesan"
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleInputChange}
                    placeholder="Jelaskan kebutuhan proyek Anda..."
                  ></textarea>
                </div>
                <button type="submit" className="form-submit" id="btn-submit">
                  Kirim Pesan ›
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon bg-transparent overflow-hidden">
                <img 
                  src={mcnLogoImg} 
                  alt="Logo MCN" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div>
                <div className="footer-logo-name">PT Maraka Citra<br />Nusantara</div>
                <div className="footer-logo-tagline" style={{ fontSize: '9px', color: 'var(--orange)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Material · Konstruksi · Pertambangan</div>
              </div>
            </div>
            <p className="footer-desc">Mitra terpercaya dalam suplai material, jasa konstruksi, dan layanan pendukung pertambangan di Indonesia.</p>
          </div>
          <div>
            <div className="footer-col-title">Layanan</div>
            <ul className="footer-links">
              <li><a href="#layanan" onClick={(e) => scrollToSection(e, 'layanan')}>Suplai Material</a></li>
              <li><a href="#layanan" onClick={(e) => scrollToSection(e, 'layanan')}>Jasa Konstruksi</a></li>
              <li><a href="#layanan" onClick={(e) => scrollToSection(e, 'layanan')}>Pendukung Pertambangan</a></li>
              <li><a href="#layanan" onClick={(e) => scrollToSection(e, 'layanan')}>Transportasi Material</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Perusahaan</div>
            <ul className="footer-links">
              <li><a href="#tentang" onClick={(e) => scrollToSection(e, 'tentang')}>Tentang Kami</a></li>
              <li><a href="#proyek" onClick={(e) => scrollToSection(e, 'proyek')}>Proyek</a></li>
              <li><a href="#area" onClick={(e) => scrollToSection(e, 'area')}>Area Operasional</a></li>
              <li><a href="#visi" onClick={(e) => scrollToSection(e, 'visi')}>Visi &amp; Misi</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Kontak Kami</div>
            <div className="flex flex-col gap-4 text-xs">
              <div>
                <div className="font-bold text-white uppercase tracking-wider mb-1">Kantor Pusat</div>
                <p className="text-neutral-500 leading-normal mb-1">Jln. Syekh Subuh Tonggondoa Palibelo, Bima, NTB</p>
                <a href="tel:+6282341471397" className="text-[#F97316] hover:underline block mb-0.5">📞 +62 823-4147-1397</a>
                <a href="mailto:ptmarakacitranusantara@gmail.com" className="text-neutral-400 hover:underline break-all">✉️ ptmarakacitranusantara@gmail.com</a>
              </div>
              <div>
                <div className="font-bold text-white uppercase tracking-wider mb-1">Kantor Operasional</div>
                <p className="text-neutral-500 leading-normal mb-1">Jln. Lintas Lakey, Dusun Kuta, Desa Rasabou, Kec. Hu'u, Kab. Dompu</p>
                <a href="tel:+6285238782735" className="text-[#F97316] hover:underline block mb-0.5">📞 +62 852-3878-2735</a>
                <a href="mailto:marakamcn@gmail.com" className="text-neutral-400 hover:underline break-all">✉️ marakamcn@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2025 PT Maraka Citra Nusantara. Semua Hak Dilindungi.</span>
          <span className="footer-tagline">Profesional · Tepat Waktu · Berkualitas</span>
        </div>
      </footer>

      {/* WhatsApp Float - Links to Kantor Pusat */}
      <a href="https://wa.me/6282341471397" className="wa-float" title="Chat WhatsApp" target="_blank" rel="noopener noreferrer">💬</a>

    </div>
  );
}

