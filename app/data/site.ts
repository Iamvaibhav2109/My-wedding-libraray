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
  { id: "invitation", label: "Invitation" },
  { id: "venue", label: "Venue" },
  { id: "countdown", label: "Countdown" },
  { id: "families", label: "Our Families" },
  { id: "trailer", label: "Trailer" },
];

export const couple = {
  groom: {
    name: "Vaibhav",
    fullName: "Vaibhav Agrawal",
    role: "The Groom",
    parents: "S/o Smt. Sunita Agrawal & Sh. Rajendra Kumar Agrawal",
    about:
      "The one who still gets nervous before every phone call, and still smiles for an hour after every one of them.",
    image: "/images/couple/groom-cartoon.svg",
  },
  bride: {
    name: "Aarohi",
    fullName: "Aarohi Agrawal",
    role: "The Bride",
    parents: "D/o Late Smt. Anju Agarwal & Sh. Sanjay Aggarwal",
    about:
      "The one who turns ordinary days into stories worth retelling, and quiet evenings into favourite memories.",
    image: "/images/couple/bride-cartoon.svg",
  },
  hashtag: "#VaibhavKiAarohi",
  quote: "यदिदं हृदयं मम तदस्तु हृदयं तव ।\nयदिदं हृदयं तव तदस्तु हृदयं मम ॥",
  quoteMeaning: "May my heart be yours, and your heart be mine.",
};

/** ISO date-time of the wedding muhurat. Drives the countdown everywhere. */
export const weddingDate = "2026-11-26T19:30:00+05:30";

export const weddingDateLabel = {
  day: "Thursday",
  short: "26 · 11 · 2026",
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
  intro: "We joyfully invite you to celebrate the wedding of",
  /** Shown under the names, one paragraph each. */
  message: [
    "As two hearts unite and two families come together, we look forward to beginning a beautiful journey of love, laughter, and togetherness.",
    "Your presence and blessings will make our special day even more memorable.",
  ],
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
    address: "The Pristine Hotel, GT Road, Kanpur",
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
    address: "The Pristine Hotel, GT Road, Kanpur",
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
    address: "The Pristine Hotel, GT Road, Kanpur",
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
    address: "The Pristine Hotel, GT Road, Kanpur",
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
    address: "The Pristine Hotel, GT Road, Kanpur",
    dress: "Black Tie / Cocktail",
    description:
      "The celebration where we finally get to sit down, eat, and thank every single one of you.",
    image: "/images/events/06.svg",
  },
];

/* ── Venue ───────────────────────────────────────────────── */

export const venue = {
  eyebrow: "The Venue",
  name: "The Pristine Hotel",
  tagline: "Where our families gather to celebrate.",
  address: "111/18 A, GT Road, Harsh Nagar, Kanpur, Uttar Pradesh 208012",
  description:
    "Join us at the Pristine Hotel on GT Road, Kanpur, as we celebrate the wedding of Aarohi and Vaibhav on Thursday, 26 November 2026.",
  image: "/images/venue/pristine-hotel.svg",
  mapImage: "/images/venue/map.svg",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Pristine+Hotel+111%2F18+A+GT+Road+Harsh+Nagar+Kanpur",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Pristine%20Hotel%20GT%20Road%20Harsh%20Nagar%20Kanpur&output=embed",
  highlights: [
    { icon: "✈️", title: "Kanpur Airport (KNU)", text: "Approx. 15 km · about 35 min by road." },
    { icon: "🚉", title: "Kanpur Central Station", text: "Approx. 6 km · about 20 min by road." },
    { icon: "🛬", title: "Lucknow Airport (LKO)", text: "Approx. 85 km · about 2 hr 15 min by road." },
    { icon: "🚆", title: "Lucknow Junction", text: "Approx. 80 km · about 2 hr by road." },
  ],
  contacts: [
    { name: "Pristine Hotel", phone: "+91 79914 74772" },
    { name: "Pristine Hotel (Alternate)", phone: "+91 92363 96943" },
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
    house: "The Agrawal Family",
    icon: "🤵",
    blessing: "Welcoming you with open arms and far too much food.",
    members: [
      { name: "Late Smt. Vimala Devi Agrawal", relation: "Grandmother" },
      { name: "Late Shri Kailash Nath Agrawal", relation: "Grandfather" },
      { name: "Smt. Sunita Agrawal", relation: "Mother of the Groom" },
      { name: "Sh. Rajendra Kumar Agrawal", relation: "Father of the Groom" },
      { name: "Shivani Agrawal", relation: "Sister of the Groom" },
      { name: "Neetesh Agrawal", relation: "Brother-in-law" },
      { name: "Priyansh Agrawal", relation: "Nephew" },
      { name: "Tanush Agrawal", relation: "Nephew" },
    ],
  } satisfies FamilySide,
  bride: {
    side: `${couple.bride.name}'s Side`,
    house: "The Agarwal Family",
    icon: "👰",
    blessing: "Sending our girl off with every blessing we have.",
    members: [
      { name: "Late Smt. Santosh Devi Agarwal", relation: "Grandmother" },
      { name: "Late Shri Dharam Pal Agarwal", relation: "Grandfather" },
      { name: "Late Smt. Anju Agarwal", relation: "Mother of the Bride" },
      { name: "Sh. Sanjay Aggarwal", relation: "Father of the Bride" },
      { name: "Anushka Bhagat", relation: "Sister of the Bride" },
      { name: "Rohit Bhagat", relation: "Brother-in-law" },
      { name: "Atharv Agarwal", relation: "Brother of the Bride" },
      { name: "Inika Bhagat", relation: "Niece" },
    ],
  } satisfies FamilySide,
};

/* ── Thank you ───────────────────────────────────────────── */

export const thankYou = {
  eyebrow: "With Gratitude",
  title: "Thank You",
  message:
    "For every blessing, every journey made, and every wish sent our way — thank you. You did not just attend our wedding, you made it ours.",
  signature: "Aarohi & Vaibhav",
  image: "/images/couple/thankyou.svg",
};
