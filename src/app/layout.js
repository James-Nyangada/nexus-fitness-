import { Kumbh_Sans } from "next/font/google";
import localFont from 'next/font/local';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import './assets/responsive.css';

const kumbh_sans = Kumbh_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--body-color-font',
});

const clashdisplay = localFont({
  src: './assets/fonts/ClashDisplay.ttf',
  variable: '--heading-font',
})

export const metadata = {
  title: {
    absolute: '',
    default: 'Nexus Fitness | Best Gym in Thika Road, Kiambu & Nairobi - Premium Fitness Center',
    template: '%s | Nexus Fitness | Best Gym in Thika Road, Kiambu & Nairobi - Premium Fitness',
  },
  description: 'Looking for the best fitness gym in Thika Road, Kiambu & Nairobi? Nexus Fit offers high-tech gym facilities, personal training, and modern fitness equipment for all fitness levels. Join today!',
  openGraph: {
    title: 'Nexus Fitness | Best Gym in Thika Road, Kiambu & Nairobi - Premium Fitness Center',
    description: 'Looking for the best fitness gym in Thika Road, Kiambu & Nairobi? Nexus Fit offers high-tech gym facilities, personal training, and modern fitness equipment for all fitness levels. Join today!',
    image: '/openGraphImage.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Estetica Agency" />
        <meta name="keywords" content="Best gym in Thika Road, Fitness center in Nairobi County, Modern gym with facilities in Nairobi, Premium personal training in Nairobi, Top-rated fitness club in thika road,Affordable gym membership in Kiambu" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${kumbh_sans.variable} ${clashdisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
