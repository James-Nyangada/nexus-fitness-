

export const metadata = {
  title: {
    absolute: "",
    default: "Our services & Fitness Classes | Best Gym in Thika Road & Nairobi",
    template: "%s | Our services & Fitness Classes | Best Gym in Thika Road & Nairobi",
  },
  description: "Get expert services, group fitness classes, and weight loss programs at Nexus Fitness - the top-rated gym in Thika Road & Nairobi. Join now!",
  openGraph: {
    title: "Our services & Fitness Classes | Best Gym in Thika Road & Nairobi",
    description: "Get expert services, group fitness classes, and weight loss programs at Nexus Fitness - the top-rated gym in Thika Road & Nairobi. Join now!",
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
