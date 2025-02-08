

export const metadata = {
  title: {
    absolute: "",
    default: "About Nexus Fit | High-Tech Fitness Gym in Kiambu, Nairobi & Thika",
    template: "%s | About Nexus Fit | High-Tech Fitness Gym in Kiambu, Nairobi & Thika",
  },
  description: "Discover Nexus Fitness - the most advanced fitness gym in Nairobi & Kiambu. Equipped with high-tech facilities, professional trainers, and personalized workout plans. Learn more!",
  openGraph: {
    title: "About Nexus Fit | High-Tech Fitness Gym in Kiambu, Nairobi & Thika",
    description: "Discover Nexus Fitness - the most advanced fitness gym in Nairobi & Kiambu. Equipped with high-tech facilities, professional trainers, and personalized workout plans. Learn more!",
  },
};

export default function AboutLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Estetica Agency" />
        <meta name="keywords" content="Best gym in Thika Road, Fitness center in Nairobi County, Modern gym with facilities in Nairobi, Premium personal training in Nairobi, Top-rated fitness club in thika road,Affordable gym membership in Kiambu" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
