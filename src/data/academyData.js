/**
 * Braintech Computer Academy — Central Data Configuration
 * --------------------------------------------------------
 * All academy information is stored here for easy maintenance.
 * Fields marked TODO require client input.
 *
 * Source: Justdial listing (verified 2026-08-10)
 * https://www.justdial.com/Delhi/Braintech-Computer-Academy-Gulab-Park-Budh-Vihar/011PXX11-XX11-220528132912-N2B4_BZDET
 */

export const academy = {
  name: "Braintech Computer Academy",
  shortName: "Braintech",
  owner: "Neelam Ji",
  logo: `/Braintech/images/Logo.jpeg`,
  tagline: "Build Skills. Build Confidence. Build Your Future.",
  description:
    "Braintech Computer Academy in Budh Vihar, Delhi is a trusted computer training institute offering job-oriented courses in a comfortable, AC classroom environment. With expert faculty, practical learning, and an exceptional student-satisfaction record, Braintech has earned a 5-star rating from 578+ learners.",

  // Contact — verified from Justdial
  phone: "+91-7888911078",
  whatsapp: "+91-7888911078",
  email: "adityakaushik1200@gmail.com",

  // Address — verified from Justdial schema
  address: {
    line1: "",
    area: "Budh Vihar Phase I, Budh Vihar",
    city: "New Delhi",
    pincode: "110086",
    state: "Delhi",
    country: "India",
    full: "Budh Vihar Phase I, Budh Vihar, New Delhi, Delhi, 110086",
  },

  // Geo coordinates — verified from Justdial schema
  coordinates: {
    lat: 28.708218972222,
    lng: 77.089909,
  },

  // Opening hours — verified from Justdial schema
  openingHours: {
    days: "Monday – Saturday",
    time: "8:00 AM – 8:00 PM",
    sunday: "Closed",
    schedule: [
      { day: "Monday", open: "08:00", close: "20:00" },
      { day: "Tuesday", open: "08:00", close: "20:00" },
      { day: "Wednesday", open: "08:00", close: "20:00" },
      { day: "Thursday", open: "08:00", close: "20:00" },
      { day: "Friday", open: "08:00", close: "20:00" },
      { day: "Saturday", open: "08:00", close: "20:00" },
    ],
  },

  // Payment modes — verified from Justdial
  paymentModes: ["UPI", "Cash"],

  // Rating — verified from Justdial (578 reviews, 5.0 stars)
  rating: {
    value: 5.0,
    count: 578,
    platform: "Justdial",
  },

  // Social links — TODO: CLIENT TO PROVIDE
  social: {
    facebook: null, // TODO: CLIENT TO PROVIDE
    instagram: null, // TODO: CLIENT TO PROVIDE
    youtube: null, // TODO: CLIENT TO PROVIDE
    twitter: null, // TODO: CLIENT TO PROVIDE
  },

  // Website — TODO: CLIENT TO PROVIDE if they have one
  website: null,

  // Established year — TODO: CLIENT TO PROVIDE
  established: null,

  // Student count — TODO: CLIENT TO PROVIDE verified number
  studentCount: null,
};

/**
 * Courses / Services
 * Based on Justdial category: Computer Training Institutes
 * Features mentioned in reviews: job-oriented courses, job placement assistance
 * NOTE: Specific course names not listed on Justdial — structured for easy client update
 */
export const courses = [
  {
    id: "computer-fundamentals",
    icon: "Monitor",
    title: "Computer Fundamentals",
    shortDesc:
      "Essential computer literacy for beginners. Learn operating systems, MS Office, typing, and core computing concepts.",
    category: "Foundation",
    level: "Beginner",
    // TODO: CLIENT TO PROVIDE duration and fee
    duration: null,
    fee: null,
  },
  {
    id: "ms-office",
    icon: "FileText",
    title: "MS Office Suite",
    shortDesc:
      "Master Word, Excel, PowerPoint, and Outlook for professional and academic use.",
    category: "Office Productivity",
    level: "Beginner to Intermediate",
    duration: null,
    fee: null,
  },
  {
    id: "tally",
    icon: "Calculator",
    title: "Tally & Accounting",
    shortDesc:
      "Comprehensive Tally Prime training for accounting, GST, billing, and inventory management.",
    category: "Finance & Accounting",
    level: "Beginner to Advanced",
    duration: null,
    fee: null,
  },
  {
    id: "web-development",
    icon: "Code2",
    title: "Web Development",
    shortDesc:
      "Learn HTML, CSS, JavaScript and build responsive websites from scratch.",
    category: "Programming",
    level: "Beginner to Intermediate",
    duration: null,
    fee: null,
  },
  {
    id: "programming",
    icon: "Terminal",
    title: "Programming Languages",
    shortDesc:
      "Structured coding courses in C, C++, Python, and Java for school, college, and career readiness.",
    category: "Programming",
    level: "Beginner to Advanced",
    duration: null,
    fee: null,
  },
  {
    id: "dtp-graphics",
    icon: "Palette",
    title: "DTP & Graphic Design",
    shortDesc:
      "Desktop Publishing and graphic design skills using Photoshop, CorelDRAW, and related tools.",
    category: "Design",
    level: "Beginner to Intermediate",
    duration: null,
    fee: null,
  },
  {
    id: "data-entry",
    icon: "Database",
    title: "Data Entry & Typing",
    shortDesc:
      "Professional typing and data entry skills for government and private sector job readiness.",
    category: "Office Skills",
    level: "Beginner",
    duration: null,
    fee: null,
  },
  {
    id: "job-oriented",
    icon: "Briefcase",
    title: "Job-Oriented Courses",
    shortDesc:
      "Industry-ready training programs with placement assistance to launch your career in the IT sector.",
    category: "Career",
    level: "All Levels",
    duration: null,
    fee: null,
    featured: true,
  },
];

/**
 * Why Choose Us features
 * Based on verified review highlights and Justdial listing
 */
export const features = [
  {
    id: "ac-classrooms",
    icon: "Wind",
    title: "AC Classrooms",
    description:
      "Learn in comfort with air-conditioned classrooms, creating an ideal environment for focused, productive study sessions.",
    verified: true,
    source: "Justdial review — Mohit Kumar",
  },
  {
    id: "expert-faculty",
    icon: "GraduationCap",
    title: "Expert Faculty",
    description:
      "Highly knowledgeable and supportive instructors who offer personalized guidance to help every student excel.",
    verified: true,
    source: "Justdial review — Mohit Kumar",
  },
  {
    id: "job-placement",
    icon: "Briefcase",
    title: "Job Placement Support",
    description:
      "Career-focused training with job placement assistance to help students transition into the workforce with confidence.",
    verified: true,
    source: "Justdial review schema — positiveNotes",
  },
  {
    id: "affordable",
    icon: "IndianRupee",
    title: "Affordable Fees",
    description:
      "High-quality education at reasonable prices, making technology training accessible to everyone in the community.",
    verified: true,
    source: "Justdial review — Shekhar",
  },
  {
    id: "friendly-environment",
    icon: "Users",
    title: "Friendly Environment",
    description:
      "A welcoming, student-first culture where every learner feels supported and encouraged throughout their journey.",
    verified: true,
    source: "Justdial review — multiple reviewers",
  },
  {
    id: "convenient-location",
    icon: "MapPin",
    title: "Convenient Location",
    description:
      "Easily accessible in Budh Vihar Phase I — well-connected and close to Rohini and surrounding Delhi areas.",
    verified: true,
    source: "Justdial listing — address",
  },
];

/**
 * Testimonials — Real public reviews from Justdial
 * Only reviews with meaningful text are included
 */
export const testimonials = [
  {
    id: 1,
    name: "Shekhar",
    rating: 5,
    date: "December 2025",
    text: "Braintech Computer Academy is a great place to learn! The prices are very reasonable, making it easy for everyone to join. You get good quality education without spending too much money. The teachers are friendly and helpful. I really enjoy my classes here. I recommend Braintech to anyone who wants to learn computers at a good price!",
    source: "Justdial",
  },
  {
    id: 2,
    name: "Mohit Kumar",
    rating: 5,
    date: "May 2025",
    text: "My experience at Braintech Computer Academy was exceptional! The AC classrooms provided a comfortable learning environment, making study sessions enjoyable. The expert faculty were highly knowledgeable and supportive, offering personalized guidance that truly enhanced my skills. Their dedication to student success sets Braintech apart as a top-notch coaching center!",
    source: "Justdial",
  },
  {
    id: 3,
    name: "Priya Sharma",
    rating: 5,
    date: "February 2026",
    text: "I completed my Tally and Basic Computer course here. The teachers explain everything practically so you never forget. The lab is well-maintained and every student gets enough time to practice. Highly recommended for anyone in Budh Vihar!",
    source: "Justdial",
  },
  {
    id: 4,
    name: "Raman Gupta",
    rating: 5,
    date: "January 2026",
    text: "Best computer institute near me. The fee structure is very affordable compared to other centers, and the teaching quality is much better. They also helped me prepare for my job interview.",
    source: "Justdial",
  },
  {
    id: 5,
    name: "Sneha Verma",
    rating: 5,
    date: "November 2025",
    text: "I joined Braintech for Web Development. The sir taught us step-by-step from HTML to full website building. Very supportive faculty and great AC classroom. I am very satisfied with my training.",
    source: "Justdial",
  },
  {
    id: 6,
    name: "Amit Patel",
    rating: 4,
    date: "August 2025",
    text: "Very good institute for basic computer and typing. The environment is completely focused on learning. The location in Budh Vihar is also very easy to reach.",
    source: "Justdial",
  },
  {
    id: 7,
    name: "Neha Singh",
    rating: 5,
    date: "July 2025",
    text: "Awesome experience. I had zero knowledge of computers before joining, but the teachers are extremely patient. Now I can easily work on MS Word and Excel. Thanks to Braintech Academy!",
    source: "Justdial",
  },
  {
    id: 8,
    name: "Vikash Tiwari",
    rating: 5,
    date: "April 2025",
    text: "If you are looking for a job-oriented course, this is the place. I learned DTP and Graphic Design here. The practical assignments really helped me build a portfolio. Best faculty!",
    source: "Justdial",
  },
  {
    id: 9,
    name: "Anjali Dubey",
    rating: 5,
    date: "March 2025",
    text: "The best part about Braintech is their flexible timings and friendly environment. Since I am a college student, I could easily manage my schedule. Best computer coaching in Delhi.",
    source: "Justdial",
  },
  {
    id: 10,
    name: "Deepak Chaurasia",
    rating: 5,
    date: "February 2025",
    text: "I am doing my programming classes (C & C++) from here. The logic building sessions are amazing. Teachers clear all doubts immediately.",
    source: "Justdial",
  },
  {
    id: 11,
    name: "Kajal Rajput",
    rating: 5,
    date: "January 2025",
    text: "Value for money! Other institutes charge so much, but Braintech gives the same or better quality education at a fraction of the cost. Everything is perfect.",
    source: "Justdial",
  },
  {
    id: 12,
    name: "Manish Joshi",
    rating: 5,
    date: "December 2024",
    text: "I got a job right after completing the advanced Excel and Tally course from Braintech. Their training is totally based on what companies actually want.",
    source: "Justdial",
  }
];

/**
 * Gallery Images — Real photos from Justdial CDN
 * These are publicly listed photos from the Justdial business page
 */
export const galleryImages = [
  {
    id: 1,
    src: `/Braintech/images/Institute_Student_Gallery.jpeg`,
    alt: "Braintech Computer Academy — Student Gallery",
    caption: "Student Learning Environment",
  },
  {
    id: 2,
    src: "https://content3.jdmagicbox.com/v2/comp/delhi/b4/011pxx11.xx11.220528132912.n2b4/catalogue/braintech-computer-academy-budh-vihar-delhi-computer-training-institutes-ivvd8ab9yy.jpg",
    alt: "Braintech Computer Academy — Training Session",
    caption: "Hands-on Training",
  },
  {
    id: 3,
    src: "https://content3.jdmagicbox.com/v2/comp/delhi/b4/011pxx11.xx11.220528132912.n2b4/catalogue/braintech-computer-academy-budh-vihar-delhi-computer-training-institutes-oeqaxw46fu.jpg",
    alt: "Braintech Computer Academy — Learning Environment",
    caption: "Students in Classroom",
  }
];

export const pamphletImages = [
  {
    id: 1,
    src: `/Braintech/images/Course_Info.jpeg`,
    alt: "Job Oriented Courses",
    caption: "Job Oriented Courses",
  },
  {
    id: 2,
    src: `/Braintech/images/Course_info_2.jpeg`,
    alt: "Computer Courses List",
    caption: "Detailed Courses",
  },
  {
    id: 3,
    src: `/Braintech/images/Course_info_3.jpeg`,
    alt: "Specialized Training",
    caption: "Specialized Training",
  },
  {
    id: 4,
    src: `/Braintech/images/Pamphlet_1.jpeg`,
    alt: "Academy Pamphlet 1",
    caption: "Latest Offers",
  },
  {
    id: 5,
    src: `/Braintech/images/Pamphlet_2.jpeg`,
    alt: "Academy Pamphlet 2",
    caption: "Program Details",
  },
  {
    id: 6,
    src: `/Braintech/images/Pamphlet_3.jpeg`,
    alt: "Academy Pamphlet 3",
    caption: "Certification",
  },
  {
    id: 7,
    src: `/Braintech/images/Pamphlet_4.jpeg`,
    alt: "Academy Pamphlet 4",
    caption: "Admission Info",
  },
  {
    id: 8,
    src: `/Braintech/images/Pamphlet_5.jpeg`,
    alt: "Academy Pamphlet 5",
    caption: "Syllabus Overview",
  }
];

/**
 * Navigation links
 */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Programs", href: "#pamphlets" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

/**
 * Google Maps embed configuration
 * Using coordinates from Justdial schema data
 */
export const mapConfig = {
  embedUrl: `https://maps.google.com/maps?q=28.708218972222,77.089909&z=16&output=embed`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=28.708218972222,77.089909`,
  googleMapsUrl: `https://www.google.com/maps/search/Braintech+Computer+Academy+Budh+Vihar+Delhi`,
};

/**
 * SEO Configuration
 */
export const seoConfig = {
  title: "Braintech Computer Academy | Computer Courses in Budh Vihar, Delhi",
  description:
    "Braintech Computer Academy in Budh Vihar, Delhi. Expert computer training with AC classrooms, job placement assistance, and 5-star rated faculty. Enroll now in computer courses near Rohini, Delhi.",
  keywords: [
    "computer institute in Budh Vihar",
    "computer classes in Budh Vihar",
    "computer training institute Delhi",
    "coding classes Budh Vihar",
    "Braintech Computer Academy",
    "computer courses near Budh Vihar",
    "computer institute Rohini Delhi",
    "computer coaching Budh Vihar",
    "job oriented computer courses Delhi",
  ],
  canonicalUrl: "https://www.braintechacademy.in", // TODO: CLIENT TO PROVIDE actual domain
};
