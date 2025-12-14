import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    {
      label: "Terms and Conditions",
      href: "/toc",
    },
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ];
  return (
    <footer>
      <div className="container mx-auto flex items-center justify-between py-4">
        <div>
          © {new Date().getFullYear()} Hostify, Inc. All Rights Reserved
        </div>
        <div className="flex gap-4">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-light">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
