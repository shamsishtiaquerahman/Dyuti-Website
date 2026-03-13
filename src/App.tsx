import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Logo } from "./components/Logo";
import { Seo } from "./components/Seo";

type Lang = "en" | "bn" | "ar";
type Theme = "dark" | "light";

type Translation = {
  dir: "ltr" | "rtl";
  langName: string;
  nav: { home: string; manpower: string; student: string; documents: string; contact: string };
  brandTag: string;
  officeTag: string;
  locationsLabel: string;
  locations: string[];
  heroBadge: string;
  heroTitle: string;
  heroText: string;
  exploreManpower: string;
  exploreStudent: string;
  requiredDocuments: string;
  featuredPackage: string;
  deliveryName: string;
  featuredIncluded: string;
  coreTitle: string;
  coreText: string;
  manpowerPageTitle: string;
  manpowerPageText: string;
  studentPageTitle: string;
  studentPageText: string;
  documentsAllTitle: string;
  documentsAllText: string;
  contactTitle: string;
  contactText: string;
  footerText: string;
  email: string;
  address: string;
  zipCode: string;
  messageOffice: string;
  whatsappFloating: string;
  lightMode: string;
  darkMode: string;
  convertToBdt: string;
  hideBdt: string;
  docsManpower: string;
  docsStudent: string;
  workPaymentTitle: string;
  workPaymentText: string;
  tuitionTitle: string;
  tuitionText: string;
  importantConditions: string;
  scholarshipRules: string;
  scholarshipRulesText: string;
  faqTitle: string;
  faqText: string;
  timelineWorkTitle: string;
  timelineWorkText: string;
  timelineStudentTitle: string;
  timelineStudentText: string;
  manpowerServices: { title: string; price: string; description: string; includes: string[] }[];
  educationServices: string[];
  manpowerDocs: string[];
  studentDocs: string[];
  waiverPackages: { name: string; price: string; firstPayment: string; secondPayment: string }[];
  policies: string[];
  scholarshipRulesList: string[];
  faqs: { q: string; a: string }[];
  offices: { title: string; city: string; address: string; zip: string; whatsappLabel: string; whatsapp: string; waLink: string }[];
};

const translations: Record<Lang, Translation> = {
  en: {
    dir: "ltr",
    langName: "English",
    nav: { home: "Home", manpower: "Manpower", student: "Student Consultancy", documents: "Required Documents", contact: "Contact" },
    brandTag: "Manpower • Visa • Student Consultancy",
    officeTag: "Consultancy agency with offices in Qatar and Bangladesh",
    locationsLabel: "Locations",
    locations: ["Level 22, Tornado Tower, West Bay, Doha, Qatar — ZIP 00000", "Gudaraghat, Badda, Dhaka — ZIP 1212"],
    heroBadge: "Qatar & Bangladesh consultancy support",
    heroTitle: "DYUTI Group for Qatar manpower, work visa, free visa, and student consultancy",
    heroText: "We help clients with manpower processing for Qatar, delivery work visa packages, free visa support, admission guidance, scholarship counselling, tuition waiver support, and coaching support for IELTS, GRE, and TOEFL.",
    exploreManpower: "Explore Manpower",
    exploreStudent: "Explore Student Consultancy",
    requiredDocuments: "Required Documents",
    featuredPackage: "Featured Package",
    deliveryName: "Delivery Work Visa",
    featuredIncluded: "Includes QID, medical, flight, license training, government fee for license, and BMET card.",
    coreTitle: "Clear, reliable support for your next move",
    coreText: "From Qatar work visa processing to student consultancy, DYUTI Group helps you understand the steps, documents, pricing, and timelines before you begin.",
    manpowerPageTitle: "Qatar work visa and free visa consultancy",
    manpowerPageText: "Dedicated page for manpower-related services with package clarity, required documents, payment terms, and timeline information.",
    studentPageTitle: "Admissions, student visa support, scholarships, tuition waiver guidance, and coaching",
    studentPageText: "Dedicated page for people searching for study abroad consultancy services, tuition waiver support, and scholarship guidance.",
    documentsAllTitle: "One page for all major document requirements",
    documentsAllText: "A dedicated documents page improves clarity and helps support document-related searches.",
    contactTitle: "Reach DYUTI Group in Qatar or Bangladesh",
    contactText: "Strong contact pages improve trust and local relevance.",
    footerText: "DYUTI Group provides manpower support for Qatar work opportunities and student consultancy for Finland, the Netherlands, Italy, and Austria, alongside IELTS, GRE, and TOEFL coaching.",
    email: "Email",
    address: "Address",
    zipCode: "ZIP Code",
    messageOffice: "Message",
    whatsappFloating: "WhatsApp Qatar",
    lightMode: "Light mode",
    darkMode: "Dark mode",
    convertToBdt: "Convert to BDT",
    hideBdt: "Hide BDT",
    docsManpower: "Manpower / Work Visa Documents",
    docsStudent: "Student Consultancy Documents",
    workPaymentTitle: "Work permit visa payment policy",
    workPaymentText: "This section explains the advance payment and refund condition for manpower processing.",
    tuitionTitle: "Scholarship and tuition waiver consultancy pricing",
    tuitionText: "This section explains your tuition waiver service model, payment timing, and important conditions for clients.",
    importantConditions: "Important conditions",
    scholarshipRules: "Scholarship Rules",
    scholarshipRulesText: "Important tuition waiver conditions and country-level eligibility rules are shown below.",
    faqTitle: "Questions that support trust and SEO",
    faqText: "FAQ content helps visitors and strengthens structure.",
    timelineWorkTitle: "Expected timeline for work permit processing",
    timelineWorkText: "Estimated turnaround helps set expectations from the start.",
    timelineStudentTitle: "Expected student consultancy timeline",
    timelineStudentText: "The student pathway depends on destination, intake, and institution.",
    manpowerServices: [
      { title: "Delivery Work Visa Package", price: "QAR 21,000", description: "Complete manpower support package for delivery candidates going to Qatar.", includes: ["Work visa processing", "QID included", "Medical included", "Flight included", "License training included", "Government license fee included", "BMET card included", "Guidance until work readiness stage"] },
      { title: "Free Visa Package", price: "QAR 12,000", description: "Structured visa support package for candidates seeking opportunities in Qatar.", includes: ["Free visa processing", "QID included", "Medical included", "BMET card included", "Flight not included"] }
    ],
    educationServices: ["Student consultancy for Finland", "Student consultancy for the Netherlands", "Student consultancy for Italy", "Student consultancy for Austria", "Admission consultancy", "Student visa consultancy", "Scholarship counselling", "IELTS coaching", "GRE coaching", "TOEFL coaching"],
    manpowerDocs: ["Clear scanned copy of passport", "White background passport-size soft copy photo", "Clear scanned copy of the information page of the passport"],
    studentDocs: ["English proficiency documents", "Clear scanned copy of the information page of the passport", "High school marksheet, transcript, and certificate of public exams", "Bachelor’s and Master’s marksheet, transcript, and certificate, if available"],
    waiverPackages: [
      { name: "Full Tuition Waiver", price: "QAR 15,000", firstPayment: "QAR 7,500 after scholarship decision", secondPayment: "Remaining QAR 7,500 after visa" },
      { name: "Partial Waiver", price: "QAR 6,000", firstPayment: "QAR 3,000 after scholarship decision", secondPayment: "Remaining QAR 3,000 after visa" },
      { name: "No Waiver Package", price: "QAR 1,500", firstPayment: "QAR 750 after offer letter", secondPayment: "Remaining QAR 750 after visa" }
    ],
    policies: ["We do not guarantee visa approval, and if visa is not granted, no responsibility is taken for that decision.", "If full tuition waiver is not granted but the student wants to continue, the process can continue under the partial waiver or no waiver package as applicable.", "If scholarship is less than 15%, it is considered as no tuition waiver package.", "The 50% advance taken after scholarship decision is not refundable if visa is not granted.", "Full scholarship consultancy service is not provided for Bachelor’s and Master’s level in Finland, only at PhD level.", "Full scholarship consultancy service is not provided at any level in the Netherlands.", "Full scholarship consultancy service is provided at all levels in Austria and Italy."],
    scholarshipRulesList: ["Finland: full scholarship consultancy only at PhD level.", "Netherlands: full scholarship consultancy not available at any level.", "Austria and Italy: full scholarship consultancy available at all levels."],
    faqs: [
      { q: "How long does a work visa process usually take?", a: "The expected timeline for work permit processing is around 1 to 1.5 months." },
      { q: "How long does student consultancy processing usually take?", a: "The student pathway can take around 6 months to 1 year, depending on the destination and institution." }
    ],
    offices: [
      { title: "Qatar Office", city: "Doha, Qatar", address: "Level 22, Tornado Tower, West Bay, Doha, Qatar", zip: "00000", whatsappLabel: "Qatar WhatsApp", whatsapp: "7400-0821", waLink: "https://wa.me/97474000821" },
      { title: "Bangladesh Office", city: "Dhaka, Bangladesh", address: "House 13, Road 11, Gudaraghat, Badda", zip: "1212", whatsappLabel: "Bangladesh WhatsApp", whatsapp: "01936-399-433", waLink: "https://wa.me/8801936399433" }
    ]
  },
  bn: {
    dir: "ltr",
    langName: "বাংলা",
    nav: { home: "হোম", manpower: "ম্যানপাওয়ার", student: "স্টুডেন্ট কনসালটেন্সি", documents: "প্রয়োজনীয় কাগজপত্র", contact: "যোগাযোগ" },
    brandTag: "ম্যানপাওয়ার • ভিসা • স্টুডেন্ট কনসালটেন্সি",
    officeTag: "কাতার ও বাংলাদেশে অফিসসহ কনসালটেন্সি এজেন্সি",
    locationsLabel: "লোকেশন",
    locations: ["লেভেল ২২, টর্নেডো টাওয়ার, ওয়েস্ট বে, দোহা, কাতার — জিপ 00000", "গুদারাঘাট, বাড্ডা, ঢাকা — জিপ 1212"],
    heroBadge: "কাতার ও বাংলাদেশ কনসালটেন্সি সাপোর্ট",
    heroTitle: "কাতার ম্যানপাওয়ার, ওয়ার্ক ভিসা, ফ্রি ভিসা ও স্টুডেন্ট কনসালটেন্সির জন্য DYUTI Group",
    heroText: "আমরা কাতারের জন্য ম্যানপাওয়ার প্রসেসিং, ডেলিভারি ওয়ার্ক ভিসা প্যাকেজ, ফ্রি ভিসা সাপোর্ট, অ্যাডমিশন গাইডেন্স, স্কলারশিপ কাউন্সেলিং, টিউশন ওয়েভার সাপোর্ট এবং IELTS, GRE, TOEFL কোচিং সাপোর্ট দিয়ে থাকি।",
    exploreManpower: "ম্যানপাওয়ার দেখুন",
    exploreStudent: "স্টুডেন্ট কনসালটেন্সি দেখুন",
    requiredDocuments: "প্রয়োজনীয় কাগজপত্র",
    featuredPackage: "ফিচারড প্যাকেজ",
    deliveryName: "ডেলিভারি ওয়ার্ক ভিসা",
    featuredIncluded: "এতে QID, মেডিকেল, ফ্লাইট, লাইসেন্স ট্রেনিং, লাইসেন্সের সরকারি ফি এবং BMET কার্ড অন্তর্ভুক্ত আছে।",
    coreTitle: "আপনার পরবর্তী পদক্ষেপের জন্য পরিষ্কার ও নির্ভরযোগ্য সাপোর্ট",
    coreText: "কাতার ওয়ার্ক ভিসা প্রসেসিং থেকে স্টুডেন্ট কনসালটেন্সি পর্যন্ত, DYUTI Group আপনাকে শুরু করার আগে ধাপ, কাগজপত্র, মূল্য এবং সময়সীমা বুঝতে সাহায্য করে।",
    manpowerPageTitle: "কাতার ওয়ার্ক ভিসা ও ফ্রি ভিসা কনসালটেন্সি",
    manpowerPageText: "প্যাকেজ, কাগজপত্র, পেমেন্ট শর্ত ও টাইমলাইনসহ ম্যানপাওয়ার সার্ভিসের আলাদা পেজ।",
    studentPageTitle: "অ্যাডমিশন, স্টুডেন্ট ভিসা সাপোর্ট, স্কলারশিপ, টিউশন ওয়েভার গাইডেন্স ও কোচিং",
    studentPageText: "স্টাডি অ্যাব্রড কনসালটেন্সি, টিউশন ওয়েভার সাপোর্ট ও স্কলারশিপ গাইডেন্স খোঁজা মানুষের জন্য আলাদা পেজ।",
    documentsAllTitle: "সব প্রধান ডকুমেন্টের জন্য একটি পেজ",
    documentsAllText: "আলাদা ডকুমেন্ট পেজ পরিষ্কার ধারণা দেয়।",
    contactTitle: "কাতার বা বাংলাদেশে DYUTI Group-এর সাথে যোগাযোগ করুন",
    contactText: "শক্তিশালী কন্ট্যাক্ট পেজ বিশ্বাস তৈরি করে।",
    footerText: "DYUTI Group কাতারের কাজের সুযোগের জন্য ম্যানপাওয়ার সাপোর্ট এবং ফিনল্যান্ড, নেদারল্যান্ডস, ইতালি ও অস্ট্রিয়ার জন্য স্টুডেন্ট কনসালটেন্সি প্রদান করে, পাশাপাশি IELTS, GRE ও TOEFL কোচিংও দেয়।",
    email: "ইমেইল",
    address: "ঠিকানা",
    zipCode: "জিপ কোড",
    messageOffice: "মেসেজ করুন",
    whatsappFloating: "কাতার হোয়াটসঅ্যাপ",
    lightMode: "লাইট মোড",
    darkMode: "ডার্ক মোড",
    convertToBdt: "বিডিটি দেখুন",
    hideBdt: "বিডিটি লুকান",
    docsManpower: "ম্যানপাওয়ার / ওয়ার্ক ভিসা ডকুমেন্ট",
    docsStudent: "স্টুডেন্ট কনসালটেন্সি ডকুমেন্ট",
    workPaymentTitle: "ওয়ার্ক পারমিট ভিসার পেমেন্ট নীতি",
    workPaymentText: "ম্যানপাওয়ার প্রসেসিংয়ের অগ্রিম পেমেন্ট ও রিফান্ড শর্ত এখানে দেখানো হয়েছে।",
    tuitionTitle: "স্কলারশিপ ও টিউশন ওয়েভার কনসালটেন্সির মূল্য",
    tuitionText: "এখানে আপনার টিউশন ওয়েভার সার্ভিস মডেল, পেমেন্টের সময় এবং গুরুত্বপূর্ণ শর্ত দেখানো হয়েছে।",
    importantConditions: "গুরুত্বপূর্ণ শর্ত",
    scholarshipRules: "স্কলারশিপের নিয়ম",
    scholarshipRulesText: "টিউশন ওয়েভারের গুরুত্বপূর্ণ শর্ত ও দেশভিত্তিক যোগ্যতা নিচে দেখানো হয়েছে।",
    faqTitle: "সাধারণ প্রশ্ন",
    faqText: "FAQ কনটেন্ট ভিজিটরদের সহায়তা করে।",
    timelineWorkTitle: "ওয়ার্ক পারমিট প্রসেসিংয়ের সম্ভাব্য সময়",
    timelineWorkText: "সম্ভাব্য সময়সীমা শুরুতেই প্রত্যাশা পরিষ্কার করতে সাহায্য করে।",
    timelineStudentTitle: "স্টুডেন্ট কনসালটেন্সির সম্ভাব্য সময়",
    timelineStudentText: "ছাত্রের গন্তব্য, ইনটেক এবং প্রতিষ্ঠানের উপর সময়সীমা নির্ভর করে।",
    manpowerServices: [
      { title: "ডেলিভারি ওয়ার্ক ভিসা প্যাকেজ", price: "QAR 21,000", description: "কাতারে যাওয়া ডেলিভারি প্রার্থীদের জন্য সম্পূর্ণ ম্যানপাওয়ার সাপোর্ট প্যাকেজ।", includes: ["ওয়ার্ক ভিসা প্রসেসিং", "QID অন্তর্ভুক্ত", "মেডিকেল অন্তর্ভুক্ত", "ফ্লাইট অন্তর্ভুক্ত", "লাইসেন্স ট্রেনিং অন্তর্ভুক্ত", "লাইসেন্সের সরকারি ফি অন্তর্ভুক্ত", "BMET কার্ড অন্তর্ভুক্ত", "কাজ শুরুর আগ পর্যন্ত গাইডেন্স"] },
      { title: "ফ্রি ভিসা প্যাকেজ", price: "QAR 12,000", description: "কাতারে সুযোগ খুঁজছেন এমন প্রার্থীদের জন্য সুসংগঠিত ভিসা সাপোর্ট প্যাকেজ।", includes: ["ফ্রি ভিসা প্রসেসিং", "QID অন্তর্ভুক্ত", "মেডিকেল অন্তর্ভুক্ত", "BMET কার্ড অন্তর্ভুক্ত", "ফ্লাইট অন্তর্ভুক্ত নয়"] }
    ],
    educationServices: ["ফিনল্যান্ডের জন্য স্টুডেন্ট কনসালটেন্সি", "নেদারল্যান্ডসের জন্য স্টুডেন্ট কনসালটেন্সি", "ইতালির জন্য স্টুডেন্ট কনসালটেন্সি", "অস্ট্রিয়ার জন্য স্টুডেন্ট কনসালটেন্সি", "অ্যাডমিশন কনসালটেন্সি", "স্টুডেন্ট ভিসা কনসালটেন্সি", "স্কলারশিপ কাউন্সেলিং", "IELTS কোচিং", "GRE কোচিং", "TOEFL কোচিং"],
    manpowerDocs: ["পাসপোর্টের পরিষ্কার স্ক্যান কপি", "সাদা ব্যাকগ্রাউন্ডে পাসপোর্ট সাইজ সফট কপি ছবি", "পাসপোর্টের ইনফরমেশন পেজের পরিষ্কার স্ক্যান কপি"],
    studentDocs: ["ইংরেজি দক্ষতার ডকুমেন্ট", "পাসপোর্টের ইনফরমেশন পেজের পরিষ্কার স্ক্যান কপি", "হাই স্কুলের মার্কশিট, ট্রান্সক্রিপ্ট ও পাবলিক পরীক্ষার সার্টিফিকেট", "ব্যাচেলর ও মাস্টার্সের মার্কশিট, ট্রান্সক্রিপ্ট ও সার্টিফিকেট, যদি থাকে"],
    waiverPackages: [
      { name: "ফুল টিউশন ওয়েভার", price: "QAR 15,000", firstPayment: "স্কলারশিপ সিদ্ধান্তের পর QAR 7,500", secondPayment: "ভিসার পর বাকি QAR 7,500" },
      { name: "পার্শিয়াল ওয়েভার", price: "QAR 6,000", firstPayment: "স্কলারশিপ সিদ্ধান্তের পর QAR 3,000", secondPayment: "ভিসার পর বাকি QAR 3,000" },
      { name: "নো ওয়েভার প্যাকেজ", price: "QAR 1,500", firstPayment: "অফার লেটারের পর QAR 750", secondPayment: "ভিসার পর বাকি QAR 750" }
    ],
    policies: ["আমরা ভিসা অনুমোদনের গ্যারান্টি দিই না, এবং ভিসা না হলে তার দায়ভার নিই না।", "ফুল টিউশন ওয়েভার না পেলে কিন্তু ছাত্র প্রক্রিয়া চালিয়ে যেতে চাইলে, প্রযোজ্য অনুযায়ী পার্শিয়াল ওয়েভার বা নো ওয়েভার প্যাকেজে চালানো যাবে।", "স্কলারশিপ ১৫% এর কম হলে সেটিকে নো টিউশন ওয়েভার প্যাকেজ হিসেবে ধরা হবে।"],
    scholarshipRulesList: ["ফিনল্যান্ড: ফুল স্কলারশিপ কনসালটেন্সি শুধুমাত্র পিএইচডি লেভেলে।", "নেদারল্যান্ডস: কোনো লেভেলেই ফুল স্কলারশিপ কনসালটেন্সি নেই।", "অস্ট্রিয়া ও ইতালি: সব লেভেলে ফুল স্কলারশিপ কনসালটেন্সি আছে।"],
    faqs: [
      { q: "ওয়ার্ক ভিসা প্রসেসিং সাধারণত কত সময় লাগে?", a: "ওয়ার্ক পারমিট প্রসেসিংয়ের সম্ভাব্য সময় প্রায় ১ থেকে ১.৫ মাস।" },
      { q: "স্টুডেন্ট কনসালটেন্সি প্রসেসিং সাধারণত কত সময় লাগে?", a: "স্টুডেন্ট পথটি গন্তব্য ও প্রতিষ্ঠানের উপর নির্ভর করে প্রায় ৬ মাস থেকে ১ বছর সময় নিতে পারে।" }
    ],
    offices: [
      { title: "কাতার অফিস", city: "দোহা, কাতার", address: "লেভেল ২২, টর্নেডো টাওয়ার, ওয়েস্ট বে, দোহা, কাতার", zip: "00000", whatsappLabel: "কাতার হোয়াটসঅ্যাপ", whatsapp: "7400-0821", waLink: "https://wa.me/97474000821" },
      { title: "বাংলাদেশ অফিস", city: "ঢাকা, বাংলাদেশ", address: "হাউস ১৩, রোড ১১, গুদারাঘাট, বাড্ডা", zip: "1212", whatsappLabel: "বাংলাদেশ হোয়াটসঅ্যাপ", whatsapp: "01936-399-433", waLink: "https://wa.me/8801936399433" }
    ]
  },
  ar: {
    dir: "rtl",
    langName: "العربية",
    nav: { home: "الرئيسية", manpower: "القوى العاملة", student: "الاستشارات الطلابية", documents: "المستندات المطلوبة", contact: "التواصل" },
    brandTag: "القوى العاملة • التأشيرات • الاستشارات الطلابية",
    officeTag: "وكالة استشارية لها مكاتب في قطر وبنغلاديش",
    locationsLabel: "المواقع",
    locations: ["الطابق 22، برج تورنادو، الخليج الغربي، الدوحة، قطر — الرمز البريدي 00000", "غوداراغات، بادا، دكا — الرمز البريدي 1212"],
    heroBadge: "دعم استشاري في قطر وبنغلاديش",
    heroTitle: "مجموعة DYUTI لخدمات القوى العاملة في قطر وتأشيرات العمل والفيزا الحرة والاستشارات الطلابية",
    heroText: "نساعد العملاء في معالجة القوى العاملة لقطر، وباقات تأشيرة العمل للتوصيل، ودعم الفيزا الحرة، والإرشاد في القبول، والاستشارات الخاصة بالمنح، ودعم الإعفاء من الرسوم الدراسية، والتدريب على IELTS وGRE وTOEFL.",
    exploreManpower: "استكشف خدمات القوى العاملة",
    exploreStudent: "استكشف الاستشارات الطلابية",
    requiredDocuments: "المستندات المطلوبة",
    featuredPackage: "الباقة المميزة",
    deliveryName: "تأشيرة عمل التوصيل",
    featuredIncluded: "تشمل QID والفحص الطبي وتذكرة السفر والتدريب على الرخصة والرسوم الحكومية للرخصة وبطاقة BMET.",
    coreTitle: "دعم واضح وموثوق لخطوتك القادمة",
    coreText: "من معالجة تأشيرة العمل في قطر إلى الاستشارات الطلابية، تساعدك DYUTI Group على فهم الخطوات والمستندات والأسعار والجداول الزمنية قبل البدء.",
    manpowerPageTitle: "استشارات تأشيرة العمل والفيزا الحرة في قطر",
    manpowerPageText: "صفحة مخصصة لخدمات القوى العاملة مع توضيح الباقات والمستندات وشروط الدفع والجداول الزمنية.",
    studentPageTitle: "القبول، ودعم الفيزا الطلابية، والمنح، وإرشاد الإعفاء من الرسوم، والتدريب",
    studentPageText: "صفحة مخصصة لمن يبحث عن خدمات الدراسة بالخارج ودعم الإعفاء من الرسوم والمنح.",
    documentsAllTitle: "صفحة واحدة لجميع المستندات الرئيسية المطلوبة",
    documentsAllText: "تساعد صفحة المستندات المخصصة على توضيح المتطلبات.",
    contactTitle: "تواصل مع DYUTI Group في قطر أو بنغلاديش",
    contactText: "تساعد صفحات التواصل القوية على بناء الثقة.",
    footerText: "تقدم DYUTI Group دعم القوى العاملة لفرص العمل في قطر، والاستشارات الطلابية لفنلندا وهولندا وإيطاليا والنمسا، إلى جانب تدريب IELTS وGRE وTOEFL.",
    email: "البريد الإلكتروني",
    address: "العنوان",
    zipCode: "الرمز البريدي",
    messageOffice: "راسل",
    whatsappFloating: "واتساب قطر",
    lightMode: "الوضع الفاتح",
    darkMode: "الوضع الداكن",
    convertToBdt: "تحويل إلى BDT",
    hideBdt: "إخفاء BDT",
    docsManpower: "مستندات القوى العاملة / تأشيرة العمل",
    docsStudent: "مستندات الاستشارات الطلابية",
    workPaymentTitle: "سياسة الدفع لتأشيرة تصريح العمل",
    workPaymentText: "يوضح هذا القسم الدفعة المقدمة وشروط عدم الاسترداد في معالجة القوى العاملة.",
    tuitionTitle: "أسعار استشارات المنح والإعفاء من الرسوم الدراسية",
    tuitionText: "يوضح هذا القسم نموذج الخدمة ومواعيد الدفع والشروط المهمة للعملاء.",
    importantConditions: "شروط مهمة",
    scholarshipRules: "قواعد المنح",
    scholarshipRulesText: "يتم عرض الشروط المهمة للإعفاء من الرسوم وقواعد الأهلية حسب الدولة أدناه.",
    faqTitle: "الأسئلة الشائعة",
    faqText: "يساعد محتوى الأسئلة الشائعة الزوار.",
    timelineWorkTitle: "المدة المتوقعة لمعالجة تصريح العمل",
    timelineWorkText: "يساعد توضيح المدة المتوقعة على ضبط التوقعات من البداية.",
    timelineStudentTitle: "المدة المتوقعة للاستشارات الطلابية",
    timelineStudentText: "تعتمد مدة المسار الطلابي على الوجهة والقبول والمؤسسة.",
    manpowerServices: [
      { title: "باقة تأشيرة عمل التوصيل", price: "QAR 21,000", description: "باقة دعم متكاملة للقوى العاملة للمرشحين المتجهين إلى قطر للعمل في التوصيل.", includes: ["معالجة تأشيرة العمل", "QID مشمول", "الفحص الطبي مشمول", "تذكرة السفر مشمولة", "التدريب على الرخصة مشمول", "الرسوم الحكومية للرخصة مشمولة", "بطاقة BMET مشمولة", "إرشاد حتى مرحلة الجاهزية للعمل"] },
      { title: "باقة الفيزا الحرة", price: "QAR 12,000", description: "باقة دعم تأشيرة منظمة للمرشحين الباحثين عن فرص في قطر.", includes: ["معالجة الفيزا الحرة", "QID مشمول", "الفحص الطبي مشمول", "بطاقة BMET مشمولة", "تذكرة السفر غير مشمولة"] }
    ],
    educationServices: ["الاستشارات الطلابية لفنلندا", "الاستشارات الطلابية لهولندا", "الاستشارات الطلابية لإيطاليا", "الاستشارات الطلابية للنمسا", "استشارات القبول", "استشارات الفيزا الطلابية", "استشارات المنح", "تدريب IELTS", "تدريب GRE", "تدريب TOEFL"],
    manpowerDocs: ["نسخة ممسوحة ضوئيًا وواضحة من جواز السفر", "صورة إلكترونية بخلفية بيضاء بحجم صورة جواز السفر", "نسخة ممسوحة ضوئيًا وواضحة من صفحة المعلومات في جواز السفر"],
    studentDocs: ["مستندات إثبات الكفاءة في اللغة الإنجليزية", "نسخة ممسوحة ضوئيًا وواضحة من صفحة المعلومات في جواز السفر", "كشف الدرجات والسجل الأكاديمي وشهادة الامتحانات العامة للمرحلة الثانوية", "كشف الدرجات والسجل الأكاديمي والشهادة للبكالوريوس والماجستير إن وجدت"],
    waiverPackages: [
      { name: "إعفاء كامل من الرسوم", price: "QAR 15,000", firstPayment: "QAR 7,500 بعد قرار المنحة", secondPayment: "المتبقي QAR 7,500 بعد الفيزا" },
      { name: "إعفاء جزئي", price: "QAR 6,000", firstPayment: "QAR 3,000 بعد قرار المنحة", secondPayment: "المتبقي QAR 3,000 بعد الفيزا" },
      { name: "باقة بدون إعفاء", price: "QAR 1,500", firstPayment: "QAR 750 بعد خطاب القبول", secondPayment: "المتبقي QAR 750 بعد الفيزا" }
    ],
    policies: ["نحن لا نضمن الموافقة على الفيزا، وإذا لم تُمنح الفيزا فلا نتحمل مسؤولية ذلك القرار.", "إذا لم يتم منح إعفاء كامل من الرسوم ولكن الطالب أراد المتابعة، يمكن الاستمرار ضمن باقة الإعفاء الجزئي أو باقة بدون إعفاء حسب الحالة.", "إذا كانت المنحة أقل من 15% فسيتم اعتبارها باقة بدون إعفاء من الرسوم."],
    scholarshipRulesList: ["فنلندا: استشارات المنحة الكاملة متاحة فقط في مستوى الدكتوراه.", "هولندا: لا توجد استشارات منحة كاملة في أي مستوى.", "النمسا وإيطاليا: استشارات المنحة الكاملة متاحة في جميع المستويات."],
    faqs: [
      { q: "كم تستغرق عادة معالجة تأشيرة العمل؟", a: "المدة المتوقعة لمعالجة تصريح العمل هي من شهر إلى شهر ونصف تقريبًا." },
      { q: "كم تستغرق عادة خدمات الاستشارات الطلابية؟", a: "قد يستغرق المسار الطلابي من 6 أشهر إلى سنة بحسب الوجهة والمؤسسة." }
    ],
    offices: [
      { title: "مكتب قطر", city: "الدوحة، قطر", address: "الطابق 22، برج تورنادو، الخليج الغربي، الدوحة، قطر", zip: "00000", whatsappLabel: "واتساب قطر", whatsapp: "7400-0821", waLink: "https://wa.me/97474000821" },
      { title: "مكتب بنغلاديش", city: "دكا، بنغلاديش", address: "المنزل 13، الطريق 11، غوداراغات، بادا", zip: "1212", whatsappLabel: "واتساب بنغلاديش", whatsapp: "01936-399-433", waLink: "https://wa.me/8801936399433" }
    ]
  }
};

const cardClass = (theme: Theme) => theme === "dark" ? "border border-white/10 bg-white/5" : "border border-slate-200 bg-white";
const titleClass = (theme: Theme) => theme === "dark" ? "text-white" : "text-slate-900";
const textClass = (theme: Theme) => theme === "dark" ? "text-slate-300" : "text-slate-700";
const mutedClass = (theme: Theme) => theme === "dark" ? "text-slate-400" : "text-slate-600";

function useAppState() {
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("dark");
  const t = useMemo(() => translations[lang], [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
  }, [lang, t.dir]);

  return { lang, setLang, theme, setTheme, t };
}

function PriceWithBdt({ qar, bdt, t, theme }: { qar: string; bdt: string; t: Translation; theme: Theme }) {
  const [showBdt, setShowBdt] = useState(false);
  return (
    <div className="space-y-3">
      <p className="text-3xl font-bold text-dyutiOrange">{qar}</p>
      <button onClick={() => setShowBdt((prev) => !prev)} className="rounded-2xl bg-dyutiTeal px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
        {showBdt ? t.hideBdt : t.convertToBdt}
      </button>
      {showBdt ? <p className={`text-lg font-semibold ${titleClass(theme)}`}>BDT {bdt}</p> : null}
    </div>
  );
}

function SectionTitle({ title, description, theme }: { title: string; description: string; theme: Theme }) {
  return (
    <div className="max-w-3xl">
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${titleClass(theme)}`}>{title}</h2>
      <p className={`mt-4 text-base leading-7 ${textClass(theme)}`}>{description}</p>
    </div>
  );
}

function CardList({ items, theme }: { items: string[]; theme: Theme }) {
  return <div className="grid gap-4 sm:grid-cols-2">{items.map((item) => <div key={item} className={`rounded-2xl p-4 ${cardClass(theme)} ${textClass(theme)}`}>{item}</div>)}</div>;
}

function RichBlock({ title, items, theme }: { title: string; items: string[]; theme: Theme }) {
  return <div className={`rounded-[30px] p-7 ${theme === "dark" ? "border border-white/10 bg-slate-900/70" : "border border-slate-200 bg-white"}`}><h3 className={`text-xl font-semibold ${titleClass(theme)}`}>{title}</h3><div className={`mt-5 space-y-3 ${textClass(theme)}`}>{items.map((item) => <p key={item}>{item}</p>)}</div></div>;
}

function Layout({ state, children }: { state: ReturnType<typeof useAppState>; children: React.ReactNode }) {
  const { lang, setLang, theme, setTheme, t } = state;
  return (
    <div className={theme === "dark" ? "min-h-screen bg-[#08111f] text-white" : "min-h-screen bg-slate-100 text-slate-900"}>
      <header className={theme === "dark" ? "sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl" : "sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl"}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-4">
            <div className="rounded-2xl bg-white p-2 shadow-lg"><Logo className="h-12 w-auto rounded-xl" /></div>
            <div>
              <p className="text-2xl font-semibold tracking-[0.18em] text-dyutiOrange">DYUTI</p>
              <p className={`text-sm ${mutedClass(theme)}`}>{t.brandTag}</p>
            </div>
          </Link>

          <div className="flex flex-col items-end gap-3">
            <div className="flex flex-wrap gap-2">
              {(Object.keys(translations) as Lang[]).map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`rounded-2xl px-4 py-2 text-sm transition ${lang === code ? "bg-dyutiTeal text-slate-950" : theme === "dark" ? "bg-white/5 text-white hover:bg-white/10" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`}
                >
                  {translations[code].langName}
                </button>
              ))}
              <button onClick={() => setTheme((prev) => prev === "dark" ? "light" : "dark")} className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${theme === "dark" ? "bg-white/5 text-white hover:bg-white/10" : "bg-slate-900 text-white hover:bg-slate-800"}`}>
                {theme === "dark" ? t.lightMode : t.darkMode}
              </button>
            </div>

            <nav className="flex flex-wrap gap-2 text-sm">
              {[
                ["/", t.nav.home],
                ["/manpower", t.nav.manpower],
                ["/student-consultancy", t.nav.student],
                ["/documents", t.nav.documents],
                ["/contact", t.nav.contact],
              ].map(([to, label]) => (
                <NavLink key={to} to={to as string} className={({ isActive }) => `rounded-2xl px-4 py-2 transition ${isActive ? "bg-dyutiTeal text-slate-950" : theme === "dark" ? "bg-white/5 text-white hover:bg-white/10" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`}>
                  {label as string}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {children}

      <footer className={theme === "dark" ? "border-t border-white/10 bg-slate-950/70" : "border-t border-slate-200 bg-white"}>
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-4 lg:px-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-white p-2"><Logo className="h-12 w-auto rounded-xl" /></div>
              <div>
                <p className="text-xl font-semibold tracking-[0.18em] text-dyutiOrange">DYUTI</p>
                <p className={`text-sm ${mutedClass(theme)}`}>{t.officeTag}</p>
              </div>
            </div>
            <p className={`mt-4 max-w-2xl text-sm leading-7 ${mutedClass(theme)}`}>{t.footerText}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dyutiTeal">{t.nav.contact}</p>
            <div className={`mt-4 space-y-2 text-sm ${textClass(theme)}`}>
              <p>{t.offices[0].whatsappLabel}: {t.offices[0].whatsapp}</p>
              <p>{t.offices[1].whatsappLabel}: {t.offices[1].whatsapp}</p>
              <p>{t.email}: info@dyutigroup.net</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dyutiTeal">{t.locationsLabel}</p>
            <div className={`mt-4 space-y-2 text-sm ${textClass(theme)}`}>{t.locations.map((loc) => <p key={loc}>{loc}</p>)}</div>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/97474000821" className="fixed bottom-5 right-5 rounded-full bg-dyutiTeal px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_18px_45px_rgba(67,182,177,0.35)] transition hover:-translate-y-0.5" rel="noreferrer">
        {t.whatsappFloating}
      </a>
    </div>
  );
}

function HomePage({ state }: { state: ReturnType<typeof useAppState> }) {
  const { t, theme } = state;
  return (
    <>
      <Seo title="DYUTI Group" description={t.heroText} />
      <section className={theme === "dark" ? "border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(67,182,177,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(227,162,38,0.16),transparent_26%),linear-gradient(180deg,#08111f_0%,#0f172a_55%,#111827_100%)]" : "border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_55%,#e2e8f0_100%)]"}>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <div className={`mb-5 inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm ${theme === "dark" ? "border border-white/10 bg-white/5 text-slate-200" : "border border-slate-200 bg-white text-slate-700"}`}>
              <span className="h-2.5 w-2.5 rounded-full bg-dyutiOrange" />
              {t.heroBadge}
            </div>
            <h1 className={`max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl ${titleClass(theme)}`}>{t.heroTitle}</h1>
            <p className={`mt-6 max-w-3xl text-lg leading-8 ${textClass(theme)}`}>{t.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/manpower" className="rounded-2xl bg-dyutiOrange px-6 py-3 text-sm font-bold text-slate-950">{t.exploreManpower}</Link>
              <Link to="/student-consultancy" className={`rounded-2xl px-6 py-3 text-sm font-semibold ${theme === "dark" ? "border border-white/15 bg-white/5 text-white" : "border border-slate-300 bg-white text-slate-900"}`}>{t.exploreStudent}</Link>
              <Link to="/documents" className={`rounded-2xl px-6 py-3 text-sm font-semibold ${theme === "dark" ? "border border-white/15 bg-white/5 text-white" : "border border-slate-300 bg-white text-slate-900"}`}>{t.requiredDocuments}</Link>
            </div>
          </div>

          <div className={`rounded-[32px] p-6 ${theme === "dark" ? "border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(67,182,177,0.18)] backdrop-blur" : "border border-slate-200 bg-white shadow-lg"}`}>
            <div className="rounded-[28px] bg-gradient-to-br from-white to-slate-100 p-6 text-slate-900">
              <div className="flex items-center justify-between gap-4">
                <Logo className="h-20 w-auto rounded-2xl" />
                <div className="text-right">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{t.featuredPackage}</p>
                  <p className="text-lg font-bold text-dyutiOrange">{t.deliveryName}</p>
                </div>
              </div>
              <div className="mt-8 rounded-2xl bg-slate-900 p-5 text-white">
                <PriceWithBdt qar="QAR 21,000" bdt="700,000" t={t} theme={theme} />
                <p className="mt-3 text-sm leading-6 text-slate-300">{t.featuredIncluded}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle title={t.coreTitle} description={t.coreText} theme={theme} />
      </section>
    </>
  );
}

function ManpowerPage({ state }: { state: ReturnType<typeof useAppState> }) {
  const { t, theme } = state;
  return (
    <>
      <Seo title={t.manpowerPageTitle} description={t.manpowerPageText} />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle title={t.manpowerPageTitle} description={t.manpowerPageText} theme={theme} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {t.manpowerServices.map((service) => (
            <div key={service.title} className={`rounded-[30px] p-7 ${cardClass(theme)}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className={`text-2xl font-semibold ${titleClass(theme)}`}>{service.title}</h3>
                  <p className={`mt-3 ${textClass(theme)}`}>{service.description}</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-r from-dyutiOrange to-amber-300 px-4 py-2 text-sm font-bold text-slate-950">{service.price}</div>
              </div>
              {service.price === "QAR 21,000" ? <div className="mt-4"><PriceWithBdt qar={service.price} bdt="700,000" t={t} theme={theme} /></div> : null}
              {service.price === "QAR 12,000" ? <div className="mt-4"><PriceWithBdt qar={service.price} bdt="400,000" t={t} theme={theme} /></div> : null}
              <div className="mt-7 space-y-3">
                {service.includes.map((item) => (
                  <div key={item} className={`flex items-start gap-3 ${textClass(theme)}`}>
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-dyutiTeal" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function StudentPage({ state }: { state: ReturnType<typeof useAppState> }) {
  const { t, theme } = state;
  return (
    <>
      <Seo title={t.studentPageTitle} description={t.studentPageText} />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle title={t.studentPageTitle} description={t.studentPageText} theme={theme} />
        <div className="mt-10"><CardList items={t.educationServices} theme={theme} /></div>
      </section>

      <section className={theme === "dark" ? "border-y border-white/10 bg-white/5" : "border-y border-slate-200 bg-slate-50"}>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle title={t.tuitionTitle} description={t.tuitionText} theme={theme} />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {t.waiverPackages.map((pkg) => (
              <div key={pkg.name} className={`rounded-[30px] p-7 ${cardClass(theme)}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-dyutiTeal">{pkg.name}</p>
                <div className="mt-4">
                  {pkg.price === "QAR 15,000" ? <PriceWithBdt qar={pkg.price} bdt="500,000" t={t} theme={theme} /> : null}
                  {pkg.price === "QAR 6,000" ? <PriceWithBdt qar={pkg.price} bdt="200,000" t={t} theme={theme} /> : null}
                  {pkg.price === "QAR 1,500" ? <PriceWithBdt qar={pkg.price} bdt="50,000" t={t} theme={theme} /> : null}
                </div>
                <p className={`mt-4 ${textClass(theme)}`}>{pkg.firstPayment}</p>
                <p className={`mt-2 ${textClass(theme)}`}>{pkg.secondPayment}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <RichBlock title={t.importantConditions} items={t.policies} theme={theme} />
            <RichBlock title={t.scholarshipRules} items={[t.scholarshipRulesText, ...t.scholarshipRulesList]} theme={theme} />
          </div>
        </div>
      </section>
    </>
  );
}

function DocumentsPage({ state }: { state: ReturnType<typeof useAppState> }) {
  const { t, theme } = state;
  return (
    <>
      <Seo title={t.documentsAllTitle} description={t.documentsAllText} />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle title={t.documentsAllTitle} description={t.documentsAllText} theme={theme} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className={`rounded-[30px] p-7 ${cardClass(theme)}`}>
            <h3 className={`text-2xl font-semibold ${titleClass(theme)}`}>{t.docsManpower}</h3>
            <div className="mt-6"><CardList items={t.manpowerDocs} theme={theme} /></div>
          </div>
          <div className={`rounded-[30px] p-7 ${cardClass(theme)}`}>
            <h3 className={`text-2xl font-semibold ${titleClass(theme)}`}>{t.docsStudent}</h3>
            <div className="mt-6"><CardList items={t.studentDocs} theme={theme} /></div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPage({ state }: { state: ReturnType<typeof useAppState> }) {
  const { t, theme } = state;
  return (
    <>
      <Seo title={t.contactTitle} description={t.contactText} />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle title={t.contactTitle} description={t.contactText} theme={theme} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {t.offices.map((office) => (
            <div key={office.title} className={`rounded-[30px] p-7 ${theme === "dark" ? "border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800" : "border border-slate-200 bg-white"}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-dyutiTeal">{office.title}</p>
              <h3 className={`mt-4 text-2xl font-bold ${titleClass(theme)}`}>{office.city}</h3>
              <div className={`mt-6 space-y-4 ${textClass(theme)}`}>
                <p><span className={titleClass(theme)}>{t.address}:</span> {office.address}</p>
                <p><span className={titleClass(theme)}>{t.zipCode}:</span> {office.zip}</p>
                <p><span className={titleClass(theme)}>{office.whatsappLabel}:</span> {office.whatsapp}</p>
                <p><span className={titleClass(theme)}>{t.email}:</span> info@dyutigroup.net</p>
              </div>
              <a href={office.waLink} className="mt-7 inline-flex rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-950" rel="noreferrer">
                {t.messageOffice} {office.title}
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default function App() {
  const state = useAppState();
  return (
    <Layout state={state}>
      <Routes>
        <Route path="/" element={<HomePage state={state} />} />
        <Route path="/manpower" element={<ManpowerPage state={state} />} />
        <Route path="/student-consultancy" element={<StudentPage state={state} />} />
        <Route path="/documents" element={<DocumentsPage state={state} />} />
        <Route path="/contact" element={<ContactPage state={state} />} />
      </Routes>
    </Layout>
  );
}
