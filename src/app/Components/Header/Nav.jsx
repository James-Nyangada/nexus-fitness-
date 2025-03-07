import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
   {/*    <li className="">
        <Link href="/">Home</Link>c
        
      </li> */}
      <li >
        <Link className='text-white' href="/about" onClick={() => setMobileToggle(false)}>
        About  
        </Link>
      </li>   
      <li className="">
        <Link className='text-white' href="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        

      </li>            
      <li className="">
        <Link className='text-white' href="/our-facilites" onClick={() => setMobileToggle(false)}>
          Our Facilites
        </Link>
        

      </li>            
      <li className="">
        <Link className='text-white' href="/Schedule" onClick={() => setMobileToggle(false)}>
          Workout Plan
        </Link>
        

      </li>            
      <li className="">
        <Link className='text-white' href="https://shop.thenexusfit.com/" target='_blank' onClick={() => setMobileToggle(false)}>
          Shop
        </Link>
        

      </li>            
      {/* <li className="menu-item-has-children">
        <Link href="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/about" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/team" onClick={() => setMobileToggle(false)}>
               Our Team
              </Link>
            </li>                        
            <li>
              <Link href="/pricing" onClick={() => setMobileToggle(false)}>
              Pricing
              </Link>
            </li> 
            <li>
              <Link href="/faq" onClick={() => setMobileToggle(false)}>
              Faq
              </Link>
            </li> 
            <li>
              <Link href="/contact" onClick={() => setMobileToggle(false)}>
              Contact
              </Link>
            </li>                         
          </ul>
        </DropDown>
      </li> */}             
      {/* <li className="menu-item-has-children">
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Blog With Sidebar
              </Link>
            </li>            
            <li>
              <Link
                href="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}
      <li>
        <Link className='text-white' href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
