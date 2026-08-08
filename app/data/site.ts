/**
 * ─────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR THE WHOLE WEBSITE
 * ─────────────────────────────────────────────────────────────
 *  Everything you need to personalise lives in this one file.
 *
 *  Replacing the placeholder media:
 *    1. Drop your real files into /public/images/... and /public/video/...
 *    2. Update the paths below (e.g. "/images/gallery/01.svg" -> "/images/gallery/01.jpg")
 *
 *  The placeholders are .svg on purpose so the site renders perfectly
 *  before you have a single real photo.
 */

export type Nav = {
  id: string;
  label: string;
};

export const navLinks: Nav[] = [
  { id: "home", label: "Home" },
  { id: "trailer", label: "Trailer" },
  { id: "invitation", label: "Invitation" },
  { id: "journey", label: "Our Journey" },
  { id: "events", label: "Events" },
  { id: "venue", label: "Venue" },
  { id: "gallery", label: "Memories" },
  { id: "countdown", label: "Countdown" },
  { id: "families", label: "Our Families" },
];

export const couple = {
  groom: {
    name: "Vaibhav",
    fullName: "Vaibhav Sharma",
    role: "The Groom",
    parents: "Son of Mr. Rajesh Sharma & Mrs. Sunita Sharma",
    about:
      "The one who still gets nervous before every phone call, and still smiles for an hour after every one of them.",
    image: "/images/couple/groom.svg",
    instagram: "https://instagram.com",
  },
  bride: {
    name: "Aarohi",
    fullName: "Aarohi Verma",
    role: "The Bride",
    parents: "Daughter of Mr. Anil Verma & Mrs. Meera Verma",
    about:
      "The one who turns ordinary days into stories worth retelling, and quiet evenings into favourite memories.",
    image: "/images/couple/bride.svg",
    instagram: "https://instagram.com",
  },
  hashtag: "#VaibhavWedsAarohi",
  quote: "Every love story is beautiful, but ours is my favourite.",
};

/** ISO date-time of the wedding muhurat. Drives the countdown everywhere. */
export const weddingDate = "2026-11-26T19:30:00+05:30";

export const weddingDateLabel = {
  day: "Thursday",
  short: "26 . 11 . 2026",
  long: "26 November 2026",
  time: "7:30 PM onwards",
};

/* ── Wedding trailer ─────────────────────────────────────── */

export const trailer = {
  eyebrow: "Wedding Trailer",
  title: "Our Story, In Motion",
  description:
    "A ninety-second film of everything words could not hold — the laughter, the tears, the dance floor at 2 AM.",
  /** Drop your film at /public/video/trailer.mp4 (the poster shows until then). */
  src: "/video/trailer.mp4",
  poster: "/images/trailer/poster.svg",
  duration: "01:32",
};

/* ── Invitation ──────────────────────────────────────────── */

export const invitation = {
  eyebrow: "The Invitation",
  title: "Together With Our Families",
  blessing: "|| श्री गणेशाय नमः ||",
  message:
    "We invite you to share in our joy as we exchange vows and begin our forever. Your presence is the blessing we wish for most.",
  closing: "Requesting the honour of your presence",
  paper: "/images/invitation/paper.svg",
  /**
   * Optional PDF invite. Drop the file at /public/invite.pdf and set this to
   * "/invite.pdf" — leave it empty and the download button simply won't render.
   */
  downloadUrl: "",
};

/** Background music. Drop an mp3 at /public/music/wedding.mp3 to enable it —
 *  the player hides itself automatically while the file is missing. */
export const music = {
  src: "/music/wedding.mp3",
  volume: 0.35,
};

/* ── Wedding events ──────────────────────────────────────── */

export type WeddingEvent = {
  id: number;
  name: string;
  icon: string;
  date: string;
  day: string;
  time: string;
  venue: string;
  address: string;
  dress: string;
  description: string;
  image: string;
};

export const events: WeddingEvent[] = [
  {
    id: 1,
    name: "Ganesh Puja",
    icon: "🪔",
    date: "22 November 2026",
    day: "Sunday",
    time: "9:00 AM",
    venue: "Sharma Residence",
    address: "14, Rose Villa, Civil Lines, Jaipur",
    dress: "Traditional Indian",
    description:
      "Where it formally begins — prayers, family, and the first sweet of a very long week.",
    image: "/images/events/01.svg",
  },
  {
    id: 2,
    name: "Haldi",
    icon: "🌼",
    date: "24 November 2026",
    day: "Tuesday",
    time: "11:00 AM",
    venue: "Palace Lawns",
    address: "The Grand Palace, Amer Road, Jaipur",
    dress: "Yellow & Marigold",
    description:
      "Turmeric, sunshine and absolutely no chance of staying clean. Come prepared to be coloured.",
    image: "/images/events/02.svg",
  },
  {
    id: 3,
    name: "Mehendi",
    icon: "🌿",
    date: "24 November 2026",
    day: "Tuesday",
    time: "5:00 PM",
    venue: "Courtyard Garden",
    address: "The Grand Palace, Amer Road, Jaipur",
    dress: "Green & Pastels",
    description:
      "Henna, hidden initials, folk music and the slowest, happiest afternoon of the week.",
    image: "/images/events/03.svg",
  },
  {
    id: 4,
    name: "Sangeet",
    icon: "🎶",
    date: "25 November 2026",
    day: "Wednesday",
    time: "7:00 PM",
    venue: "Crystal Ballroom",
    address: "The Grand Palace, Amer Road, Jaipur",
    dress: "Indo-Western Glam",
    description:
      "Both families, one dance floor, and a rivalry that has been rehearsing for months.",
    image: "/images/events/04.svg",
  },
  {
    id: 5,
    name: "Wedding Ceremony",
    icon: "💍",
    date: "26 November 2026",
    day: "Thursday",
    time: "7:30 PM",
    venue: "Mandap Lawns",
    address: "The Grand Palace, Amer Road, Jaipur",
    dress: "Traditional Formal",
    description:
      "Seven vows, seven rounds, and one promise we intend to keep for the rest of our lives.",
    image: "/images/events/05.svg",
  },
  {
    id: 6,
    name: "Reception",
    icon: "🥂",
    date: "27 November 2026",
    day: "Friday",
    time: "8:00 PM",
    venue: "Grand Banquet Hall",
    address: "The Grand Palace, Amer Road, Jaipur",
    dress: "Black Tie / Cocktail",
    description:
      "The celebration where we finally get to sit down, eat, and thank every single one of you.",
    image: "/images/events/06.svg",
  },
];

/* ── Venue ───────────────────────────────────────────────── */

export const venue = {
  eyebrow: "The Venue",
  name: "The Grand Palace",
  tagline: "A courtyard of arches, marigolds and candlelight.",
  address: "Amer Road, Jaipur, Rajasthan 302002, India",
  description:
    "Built around a century-old courtyard, the palace opens into lawns that glow with a thousand lights after sunset. Every ceremony happens within these walls, so you never have to move a bag twice.",
  image: "/images/venue/hall.svg",
  mapImage: "/images/venue/map.svg",
  /** Replace with your venue's Google Maps link + embed URL. */
  mapUrl: "https://maps.google.com/?q=Amer+Road+Jaipur",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Amer%20Road%20Jaipur&output=embed",
  highlights: [
    { icon: "🅿️", title: "Valet Parking", text: "Complimentary valet at the north gate." },
    { icon: "🛏️", title: "Guest Rooms", text: "Blocked rooms for outstation family." },
    { icon: "✈️", title: "35 min from Airport", text: "Jaipur International (JAI)." },
    { icon: "🚉", title: "20 min from Station", text: "Jaipur Junction (JP)." },
  ],
  contacts: [
    { name: "Rohit (Groom's side)", phone: "+91 98765 43210" },
    { name: "Nidhi (Bride's side)", phone: "+91 98765 12345" },
  ],
};

/* ── Gallery / Memories ──────────────────────────────────── */

export type Photo = {
  id: number;
  src: string;
  caption: string;
  category: "Pre-Wedding" | "Celebrations" | "Portraits";
  /** Tall photos take a double row in the masonry grid. */
  tall?: boolean;
};

export const gallery: Photo[] = [
  { id: 1, src: "/images/gallery/01.svg", caption: "The First Look", category: "Portraits", tall: true },
  { id: 2, src: "/images/gallery/02.svg", caption: "Haldi Colours", category: "Celebrations" },
  { id: 3, src: "/images/gallery/03.svg", caption: "Mehendi Nights", category: "Celebrations", tall: true },
  { id: 4, src: "/images/gallery/04.svg", caption: "Sangeet Lights", category: "Celebrations" },
  { id: 5, src: "/images/gallery/05.svg", caption: "Baraat", category: "Celebrations" },
  { id: 6, src: "/images/gallery/06.svg", caption: "The Vows", category: "Portraits", tall: true },
  { id: 7, src: "/images/gallery/07.svg", caption: "Golden Hour", category: "Pre-Wedding" },
  { id: 8, src: "/images/gallery/08.svg", caption: "Family Portrait", category: "Portraits" },
  { id: 9, src: "/images/gallery/09.svg", caption: "A Stolen Glance", category: "Pre-Wedding", tall: true },
  { id: 10, src: "/images/gallery/10.svg", caption: "Reception", category: "Celebrations" },
  { id: 11, src: "/images/gallery/11.svg", caption: "Fireworks", category: "Celebrations" },
  { id: 12, src: "/images/gallery/12.svg", caption: "Forever", category: "Portraits" },
];

export const galleryCategories = [
  "All",
  "Pre-Wedding",
  "Celebrations",
  "Portraits",
] as const;

/* ── Our families ────────────────────────────────────────── */

export type FamilyMember = {
  name: string;
  relation: string;
};

export type FamilySide = {
  side: string;
  house: string;
  icon: string;
  blessing: string;
  members: FamilyMember[];
};

export const families = {
  eyebrow: "Our Families",
  title: "With Their Blessings",
  description:
    "Two families, one celebration. These are the people who raised us, spoiled us and are the reason this day exists at all.",
  groom: {
    side: `${couple.groom.name}'s Side`,
    house: "The Sharma Family",
    icon: "🤵",
    blessing: "Welcoming you with open arms and far too much food.",
    members: [
      { name: "Mr. Rajesh Sharma", relation: "Father of the Groom" },
      { name: "Mrs. Sunita Sharma", relation: "Mother of the Groom" },
      { name: "Mr. Mohan Lal Sharma", relation: "Grandfather" },
      { name: "Mrs. Kamla Devi Sharma", relation: "Grandmother" },
      { name: "Rohit Sharma", relation: "Elder Brother" },
      { name: "Priya Sharma", relation: "Sister-in-law" },
      { name: "Ananya Sharma", relation: "Sister" },
      { name: "Mr. Suresh Sharma", relation: "Uncle (Chacha ji)" },
      { name: "Mrs. Rekha Sharma", relation: "Aunt (Chachi ji)" },
      { name: "Kabir Sharma", relation: "Cousin" },
    ],
  } satisfies FamilySide,
  bride: {
    side: `${couple.bride.name}'s Side`,
    house: "The Verma Family",
    icon: "👰",
    blessing: "Sending our girl off with every blessing we have.",
    members: [
      { name: "Mr. Anil Verma", relation: "Father of the Bride" },
      { name: "Mrs. Meera Verma", relation: "Mother of the Bride" },
      { name: "Mr. Ram Prasad Verma", relation: "Grandfather" },
      { name: "Mrs. Shanti Devi Verma", relation: "Grandmother" },
      { name: "Aditya Verma", relation: "Brother" },
      { name: "Sneha Verma", relation: "Sister" },
      { name: "Mr. Vikas Verma", relation: "Uncle (Mama ji)" },
      { name: "Mrs. Nidhi Verma", relation: "Aunt (Mami ji)" },
      { name: "Ishita Verma", relation: "Cousin" },
      { name: "Arjun Verma", relation: "Cousin" },
    ],
  } satisfies FamilySide,
};

/* ── Thank you ───────────────────────────────────────────── */

export const thankYou = {
  eyebrow: "With Gratitude",
  title: "Thank You",
  message:
    "For every blessing, every journey made, and every wish sent our way — thank you. You did not just attend our wedding, you made it ours.",
  signature: "Vaibhav & Aarohi",
  image: "/images/couple/thankyou.svg",
};
