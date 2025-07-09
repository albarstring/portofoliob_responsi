// backend/data.js
const pengalaman = [
    {
      judul: 'Frontend Developer di PT. Maju Mundur',
      tanggal: 'Jan 2022 - Sekarang',
      deskripsi: 'Mengembangkan dan memelihara aplikasi web menggunakan Vue.js dan teknologi frontend lainnya.'
    },
    {
      judul: 'UI/UX Designer di Kreatif Studio',
      tanggal: 'Jul 2020 - Des 2021',
      deskripsi: 'Merancang tampilan antarmuka pengguna dan pengalaman pengguna untuk berbagai aplikasi mobile dan web.'
    },
    {
      judul: 'Intern Web Developer di Startup XYZ',
      tanggal: 'Jan 2020 - Jun 2020',
      deskripsi: 'Membantu tim dalam membangun fitur-fitur baru dan memperbaiki bug pada website perusahaan.'
    }
  ];

const pendidikan = [
    { id: 1, period: '2023 - Present', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
    { id: 2, period: '2020 - 2023', institution: 'SMA Negeri 3 Kota Serang', major: 'MIPA' }
  ];
  
  const skills = [
    { name: 'Vue.js', level: 'Mahir' },
    { name: 'JavaScript', level: 'Mahir' },
    { name: 'Tailwind CSS', level: 'Mahir' },
    { name: 'Node.js', level: 'Menengah' },
    { name: 'Express.js', level: 'Menengah' },
    { name: 'PostgreSQL', level: 'Menengah' },
    { name: 'Git & GitHub', level: 'Mahir' },
    { name: 'HTML5 & CSS3', level: 'Mahir' },
  ];
  
  const proyek = [
    {
      title: 'Website Toko Online',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
      description: 'Platform e-commerce dengan fitur keranjang belanja.',
      tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Aplikasi Manajemen Tugas',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
      description: 'Aplikasi untuk melacak progres tugas harian.',
      tech: ['React', 'Firebase'],
      link: '#'
    },
    {
        title: 'Website Portofolio',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
        description: 'Website pribadi interaktif menggunakan Vue dan Express.',
        tech: ['Vue.js', 'Express.js'],
        link: '#'
    }
  ];

  
  
  module.exports = { pengalaman, pendidikan, skills, proyek };
  