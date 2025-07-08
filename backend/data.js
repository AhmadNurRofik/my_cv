const educationHistory = [
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Informatika'
  },
  {
    id: 2,
    period: '2019 - 2022',
    institution: 'SMK Tamansiswa Banjarnegara',
    major: 'Multimedia'
  },
  {
    id: 3,
    period: '2016 - 2019',
    institution: 'SMP Negeri 3 Marabahan',
    major: 'Umum'
  },
  {
    id: 4,
    period: '2010 - 2016',
    institution: 'SD Negeri Balukung 1',
    major: 'Umum'
  }
];

const skills = [
  { name: 'Vue.js', level: 'Mahir' },
  { name: 'JavaScript', level: 'Mahir' },
  { name: 'Tailwind CSS', level: 'Mahir' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'Express.js', level: 'Menengah' },
  { name: 'PostgreSQL', level: 'Menengah' },
  { name: 'Git & GitHub', level: 'Mahir' },
  { name: 'HTML5 & CSS3', level: 'Mahir' }
];

const projects = [
  {
    title: 'Website Tiket Online',
    image: '/images/demontix.png', // Path ke public folder
    description: 'Platform e-commerce dengan fitur keranjang belanja.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Aplikasi pemantauan Kualitas Udara',
    image: '/images/oxyzone.png', // Path ke public folder
    description: 'Aplikasi untuk melacak progres tugas harian.',
    tech: ['React', 'Firebase'],
    link: '#'
  }
];

module.exports = {
  educationHistory,
  skills,
  projects
};
