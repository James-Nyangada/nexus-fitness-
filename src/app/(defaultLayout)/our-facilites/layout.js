

export const metadata = {
  title: {
    absolute: "",
    default: "Gallery | Explore Our High-Tech Gym Facilities in Nairobi & Thika",
    template: "%s | Gallery | Explore Our High-Tech Gym Facilities in Nairobi & Thika",
  },
  description: "Take a tour of Nexus Fitness - the best gym in Thika Road, Kiambu & Nairobi. Check out our modern fitness facilities & world-class equipment!",
  openGraph: {
    title: "Gallery | Explore Our High-Tech Gym Facilities in Nairobi & Thika",
    description: "Take a tour of Nexus Fitness - the best gym in Thika Road, Kiambu & Nairobi. Check out our modern fitness facilities & world-class equipment!",
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
