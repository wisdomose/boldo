import { FiFeather, FiEye, FiSun } from "react-icons/fi";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import person5 from "../assets/person5.png";
import person6 from "../assets/person6.png";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

export const nav = [
  {
    label: "Product",
    href: "/",
  },
  {
    label: "Services",
    href: "/",
  },
  {
    label: "About",
    href: "/",
  },
];

export const hero = {
  heading: "Save time by building  fast with Boldo Template ",
  desc: "Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.",
};

export const services = {
  heading: "Handshake infographic mass market crowdfunding iteration.",
  services: [
    {
      id: "service-3",
      img: feature1,
      heading: "Cool feature title",
      desc: "Learning curve network effects return on investment.",
      href: "/",
    },
    {
      id: "service-2",
      img: feature2,
      heading: "Even cooler feature",
      desc: "Learning curve network effects return on investment.",
      href: "/",
    },
    {
      id: "service-3",
      img: feature3,
      heading: "Cool feature title",
      desc: "Learning curve network effects return on investment.",
      href: "/",
    },
  ],
  customers: [
    {
      id: "customer-1",
      heading:
        "We connect our customers with the best, and help them keep up-and stay open.",
      services: [
        { desc: "We connect our customers with the best.", icon: null },
        { desc: "Advisor success customer launch party.", icon: null },
        { desc: "Business-to-consumer long tail.", icon: null },
      ],
    },
    {
      id: "customer-2",
      heading:
        "We connect our customers with the best, and help them keep up-and stay open.",
      services: [
        {
          desc: "We connect our customers with the best.",
          icon: FiFeather,
        },
        { desc: "Advisor success customer launch party.", icon: FiEye },
        { desc: "Business-to-consumer long tail.", icon: FiSun },
      ],
    },
  ],
};

export const testimonies = [
  {
    name: "Albus Dumbledore",
    position: "Manager @ Howarts",
    testimony: `“Buyer buzz partner network disruptive non-disclosure agreement business”`,
    img: person1,
  },
  {
    name: "Severus Snape",
    position: "Manager @ Slytherin",
    testimony: `“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”`,
    img: person2,
  },
  {
    name: "Harry Potter",
    position: "Team Leader @ Gryffindor",
    testimony: `“Release facebook responsive web design business model canvas seed money monetization.”`,
    img: person3,
  },
];

export const blogs = [
  {
    category: "Cateogry",
    date: "November 22, 2021",
    desc: "Pitch termsheet backing validation focus release.",
    img: blog1,
    author: {
      name: "Chandler Bing",
      image: person4,
    },
  },
  {
    category: "Cateogry",
    date: "November 22, 2021",
    img: blog2,
    desc: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    author: {
      name: "Rachel Green",
      image: person5,
    },
  },
  {
    category: "category",
    date: "November 22, 2021",
    img: blog3,
    desc: "Beta prototype sales iPad gen-z marketing network effects value proposition",
    author: {
      name: "Monica Geller",
      image: person6,
    },
  },
];

export const footer = {
  desc: "Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.",
  landing: ["Home", "Product", "Service"],
  company: ["Home", "Careers", "Service"],
  resources: ["Blog", "Products", "Resources"],
};
