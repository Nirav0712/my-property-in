import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-secondary text-white pt-16 pb-4">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* About Section */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="inline-block rounded-2xl bg-white mb-6 p-5" >
                            <Image
                                src="/images/footerlogo.png"
                                alt="footerlogo.png"
                                width={200}
                                height={200}
                                className="object-contain w-40 md:w-52"
                            />
                        </div>

                        <div className="space-y-4 w-full">
                            <div>
                                <span className="text-white/70 font-medium mb-2 block">Follow Us</span>
                                <div className="flex justify-center md:justify-start gap-3">
                                    <SocialLink href="https://www.facebook.com/thedigitalconnect712" icon="fab fa-facebook-f" bgColor="#1877F2" />
                                    {/* <SocialLink href="#" icon="fab fa-youtube" bgColor="#FF0000" /> */}
                                    <SocialLink href="https://www.instagram.com/the_digital_connect__?igsh=MXAxamlhejNxeWc1dg==" icon="fab fa-instagram" bgColor="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)" />
                                    <SocialLink href="https://thedigitalconnect.in/" icon="fab fa-google" bgColor="#fff" iconColor="#4285F4" />
                                    <SocialLink href="https://www.linkedin.com/company/96668707/admin/dashboard/"icon="fab fa-linkedin-in"bgColor="#0A66C2" />
                                </div>
                            </div>

                            {/* <div>
                              
                                <div className="flex justify-center md:justify-start gap-3">
                                    <SocialLink href="https://www.facebook.com/people/Veer-Real-Estate/61558935522154/" icon="fab fa-facebook-f" bgColor="#1877F2" />
                                    <SocialLink href="" icon="fab fa-youtube" bgColor="#FF0000" />
                                    <SocialLink href="https://www.instagram.com/veer.real_estate/" icon="fab fa-instagram" bgColor="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)" />
                                    <SocialLink href="https://g.page/r/CcSCOVV14JRdEAI/review" icon="fab fa-google" bgColor="#fff" iconColor="#4285F4" />
                                    <SocialLink href="https://www.linkedin.com/company/veer-real-estate-ahmedabad/?viewAsMember=true" icon="fab fa-linkedin-in" bgColor="#0A66C2" />
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* Quick Links - Hidden on Mobile */}
                    <div className="hidden md:block text-left items-left justify-left pl-0 lg:pl-20">
                        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/">Home</FooterLink>
                            <FooterLink href="/about-us">About Us</FooterLink>
                            <FooterLink href="/properties">Properties</FooterLink>
                            {/* <FooterLink href="/projects/east">East Projects</FooterLink>
                            <FooterLink href="/projects/west">West Projects</FooterLink> */}
                            <FooterLink href="/blog">Blogs</FooterLink>
                            <FooterLink href="/contact">Contact</FooterLink>
                        </ul>
                    </div>

                    {/* Property Types - Hidden on Mobile */}
                    <div className="hidden md:block">
                        <h4 className="text-xl font-semibold mb-4">Property Types</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/properties?type=Apartment">Apartments</FooterLink>
                            <FooterLink href="/properties?type=Plot">Plots</FooterLink>
                            <FooterLink href="/properties?type=Land">Lands</FooterLink>
                            <FooterLink href="/properties?type=Bunglows">Bunglows</FooterLink>
                            <FooterLink href="/properties?type=Industrial">Industrial</FooterLink>
                            <FooterLink href="/properties?type=Commercial">Commercial Shops</FooterLink>
                            <FooterLink href="/properties?type=Office">Commercial Office</FooterLink>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <h4 className="text-xl font-semibold mb-8 text-center md:text-left">
                            Contact Info
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-10 text-white/80">
                            {/* East Ahmedabad */}
                            <ContactSection
                                title="Projects"
                                address="212, Milestone Building, Drive in Rd,beside Drive-in-cinema, Thaltej, Ahmedabad, Gujrat, 380059"
                                phones={["+91 99258 43531"]}
                                email="info@thedigitalconnect.in"
                            />

                            {/* West Ahmedabad */}
                            {/* <ContactSection
                                title="West Ahmedabad"
                                address="431, Yash Arian Complex, Near Swami Vivekanand Circle, Memnagar, Ahmedabad - 380052"
                                phones={["+91 99258 43531"]}
                                email="info@thedigitalconnect.in"
                            /> */}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/10 pt-6 text-center text-white/70 text-xs md:text-sm">
                    <p>
                        &copy; 2026 My-property.in. All rights reserved. | Developed By <a href="https://thedigitalconnect.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">The Digital Connect</a> | Designed with <i className="fas fa-heart text-primary"></i> for Real Estate
                    </p>
                </div>
            </div>
        </footer>
    );
}

// Helper Components for Cleaner Code
function SocialLink({ href, icon, bgColor, iconColor = "#fff" }: { href: string; icon: string; bgColor: string; iconColor?: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            style={{ background: bgColor, color: iconColor }}
        >
            <i className={icon}></i>
        </a>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-white/80 hover:text-primary transition-colors">
                {children}
            </Link>
        </li>
    );
}

function ContactSection({ title, address, phones, email }: { title: string; address: string; phones: string[]; email: string }) {
    return (
        <div className="space-y-3">
            {/* <h5 className="text-lg font-semibold text-white border-b border-white/20 pb-2 text-center md:text-left">
                {title}
            </h5> */}
            <ul className="space-y-4 text-sm leading-relaxed">
                <li className="flex gap-3 justify-center md:justify-start text-center md:text-left">
                    <i className="fas fa-map-marker-alt mt-1 shrink-0 text-white"></i>
                    <span>{address}</span>
                </li>
                {phones.map((phone, idx) => (
                    <li key={idx} className="flex gap-3 items-center justify-center md:justify-start">
                        <i className="fas fa-phone shrink-0 text-white"></i>
                        <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                            {phone}
                        </a>
                    </li>
                ))}
                <li className="flex gap-3 items-center justify-center md:justify-start">
                    <i className="fas fa-envelope shrink-0 text-white"></i>
                    <a href={`mailto:${email}`} className="hover:text-primary transition-colors break-all">
                        {email}
                    </a>
                </li>
            </ul>
        </div>
    );
}
