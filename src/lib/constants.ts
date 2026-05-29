import { writeHeapSnapshot } from "v8";

export const SITE_CONFIG = {
  name: 'Innovation Hacks',
  tagline: 'Building Intelligent Cities. Powered by AI.',
  description: 'Innovation Hacks is a global hackathon platform building the future of technology through competitive innovation events.',
  url: 'https://veerakarthick.in',
  email: 'innovationhacksofficial@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/karthickkumar-s-b04a10348/',
    instagram: 'https://instagram.com/veerakarthick_235',
    github: 'https://github.com/veerakarthick235',
    whatsapp: 'https://chat.whatsapp.com/IDEMFuT1Y8x7LPt3zyQsaI',
  },
};

export const FEATURED_EVENT_SLUG = 'ai-autonomous-smart-city-hackathon-2026';

export const JUDGES_DATA = [
  { name: 'Praveen Coppa', title: 'Workspace AI Platform Engineer at Google', company: 'Google', photo: '/images/judges/praveen.jpeg', order: 1 },
  { name: 'Mihir Shelar', title: 'Senior Technical Program Manager @ Amazon | IEEE Senior Member', company: 'Amazon', photo: '/images/judges/mihir.jpeg', order: 2 },
  { name: 'Shri Lakshmi Rajagopal', title: 'Senior QA Automation Engineer @ Deloitte', company: 'Deloitte', photo: '/images/judges/shri.jpeg', order: 4 },
  { name: 'Prakshal Doshi', title: 'Software Engineer @ Apple | AI Infrastructure | MLOps', company: 'Apple', photo: '/images/judges/doshi.jpeg', order: 5 },
  { name: 'Xingpeng Xiao', title: 'Software Engineering Manager at Disney', company: 'Disney', photo: '/images/judges/xiao.jpeg', order: 6 },
  { name: 'Praneetha Kotla', title: 'AI Solutions Architect | Global Hackathon Judge | IEEE Senior Member', company: '', photo: '/images/judges/kotla.jpeg', order: 7 },
  { name: 'Swarnamalya Mohan', title: 'Senior Full Stack Developer at FedEx', company: 'FedEx', photo: '/images/judges/swarna.jpeg', order: 8 },
  { name: 'Shyam Goyal', title: 'Senior Data Analyst @ Samsung | Data Science & ML Specialist', company: 'Samsung', photo: '/images/judges/goyal.jpeg', order: 9 },
  { name: 'Preethi Bharathy', title: 'Data Scientist | AI & Scalable Systems', company: '', photo: '/images/judges/ms_suraj.jpeg', order: 10 },
  { name: 'Suraj Devatha', title: 'Senior Software Engineer Distributed Systems | AI-driven Platforms', company: '', photo: '/images/judges/suraj.jpeg', order: 11 },
  { name: 'Hareesha KoratikereRameshappa', title: 'Sr. Technical Product Manager — AI & ADAS Systems Phantom AI', company: 'Phantom AI', photo: '/images/judges/rameshappa.jpeg', order: 12 },
  { name: 'Venkata Revunuru', title: 'Senior Software Engineer and Enterprise AI Architect', company: '', photo: '/images/judges/venkat.jpeg', order: 13 },
  { name: 'Panagitois Coutoulas', title: 'Enterprise AI Systems', company: '', photo: '/images/judges/peter.jpeg', order: 14 },
  { name: 'Karthik Karunanithi', title: 'Solution Architect at IBM', company: 'IBM', photo: '/images/judges/karthik.jpeg', order: 15 },
  { name: 'Silu Panda', title: 'Senior Software Engineer — ML Infrastructure | LinkedIn', company: 'LinkedIn', photo: '/images/judges/silu.jpeg', order: 16 },
  { name: 'Manisha Konda', title: 'Senior Data Analyst at Walgreens', company: 'Walgreens', photo: '/images/judges/manisha.jpeg', order: 17 },
  { name: 'Elumalai M', title: 'Software Engineer III — Java Development', company: '', photo: '/images/judges/elumalai.jpeg', order: 18 },
  { name: 'Senthil Kumar R', title: 'AI Researcher | Intelligent Systems & Data Science', company: '', photo: '/images/judges/rsk.jpeg', order: 19 },
  { name: 'Ramamoorthy S', title: 'AI Engineer | GenAI LLM Specialist', company: '', photo: '/images/judges/ramamoorthy.jpg', order: 20 },
  { name: 'Sunil Subash', title: 'Data Scientist | AI & Analytics', company: '', photo: '/images/judges/sunil_subash.jpg', order: 21 },
];

export const THEMES_DATA = [
  { title: 'Smart Traffic & Mobility Systems', icon: 'Car', description: 'AI-powered traffic optimization, autonomous vehicles, and intelligent transportation networks.' },
  { title: 'Environmental Monitoring', icon: 'Leaf', description: 'Real-time environmental sensing, pollution tracking, and climate adaptation systems.' },
  { title: 'Smart Energy Management', icon: 'Zap', description: 'Intelligent power grids, renewable energy optimization, and consumption analytics.' },
  { title: 'Urban Healthcare AI', icon: 'Heart', description: 'AI diagnostics, telemedicine platforms, and public health monitoring systems.' },
  { title: 'Public Safety & Surveillance', icon: 'Shield', description: 'Smart emergency response, crime prediction, and disaster management.' },
];

export const PRIZES_DATA = [
  {
    title: 'Grand Winner',
    rewards: ['1-Year Free .site Domain', 'Official Winner Certificate'],
    icon: 'Trophy',
    gradient: 'linear-gradient(135deg, #FFD700, #FFA500)',
  },
  {
    title: 'Runner Up',
    rewards: ['1-Year Free .site Domain', 'Runner-Up Certificate'],
    icon: 'Medal',
    gradient: 'linear-gradient(135deg, #C0C0C0, #A0A0A0)',
  },
  {
    title: 'Second Runner Up',
    rewards: ['1-Year Free .site Domain', 'Certificate of Achievement'],
    icon: 'Award',
    gradient: 'linear-gradient(135deg, #CD7F32, #B8860B)',
  },
];

export const JUDGING_CRITERIA = [
  { name: 'Innovation', percentage: 25, color: '#00D4FF' },
  { name: 'Technical Implementation', percentage: 25, color: '#8B5CF6' },
  { name: 'Impact', percentage: 20, color: '#06FFA5' },
  { name: 'Feasibility', percentage: 15, color: '#FFB800' },
  { name: 'Presentation', percentage: 15, color: '#EC4899' },
];

export const TIMELINE_DATA = [
  { title: 'Registration Opens', date: '2026-04-20', status: 'completed' },
  { title: 'Hackathon Starts', date: '2026-04-30', status: 'completed' },
  { title: 'Submission Deadline', date: '2026-05-04', status: 'completed' },
  { title: 'Judging Phase', date: '2026-05-05', status: 'completed' },
  { title: 'Winner Announcement', date: '2026-05-08', status: 'completed' },
  { title: 'Certificate Distribution', date: '2026-05-08', status: 'completed' },
];

export const RULES_DATA = [
  'Open to students worldwide — no geographic restrictions.',
  'All projects must be original work created during the hackathon period.',
  'Team participation is required — solo entries are not accepted.',
  'All source code must be hosted on a public GitHub repository.',
  'A demo video is required for final submission.',
  'Projects must be built between April 30 – May 4, 2026.',
  'Use of pre-existing libraries and frameworks is allowed.',
  'All team members must be registered on the platform.',
];

export const TEAM_DATA = [
  { name: 'Karthickkumar S', role: 'Founder & Organizer', photo: '/images/team/veera_karthick.jpeg', order: 1 },
  { name: 'Sarjan P', role: 'Co Organizer', photo: '/images/team/sarjan.jpeg', order: 2 },
  { name: 'Lokesh M', role: 'Manager', photo: '/images/team/loki.png', order: 3 },
  { name: 'Nishanth K', role: 'Coordinator', photo: '/images/team/Nishanth.jpeg', order: 4 },
  { name: 'Priyadharshini S', role: 'Community Lead', photo: '/images/team/priya.png', order: 5 },
];

export const STATS_DATA = [
  { label: 'Participants', value: 87, icon: 'Users' },
  { label: 'Expert Judges', value: 21, icon: 'Award' },
  { label: 'Prize Categories', value: 3, icon: 'Trophy' },
  { label: 'Countries', value: 12, icon: 'Globe' },
];

export const PROJECT_CATEGORIES = [
  'All',
  'AI',
  'IoT',
  'Healthcare',
  'Environment',
  'Mobility',
  'Smart Infrastructure',
];

export const TESTIMONIALS_DATA = [
  {
    name: 'Praveen Coppa',
    role: 'Judge — Google',
    quote: 'The quality of submissions was outstanding. These students are building the future of smart cities with cutting-edge AI solutions.',
  },
  {
    name: 'Mihir Shelar',
    role: 'Judge — Amazon',
    quote: 'Innovation Hacks brings together the brightest minds to solve real urban challenges. The projects demonstrated remarkable technical depth.',
  },
  {
    name: 'Prakshal Doshi',
    role: 'Judge — Apple',
    quote: 'I was impressed by the creativity and practical impact of the solutions. This hackathon is setting new standards for AI competitions.',
  },
];
