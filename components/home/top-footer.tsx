interface LinkItem {
  name: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: LinkItem[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="flex-1 min-w-30 mb-8 sm:mb-0">
      <h3 className="text-lg font-bold text-t-dark mb-4">{title}</h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className=" transition-colors duration-200 text-t-dark font-normal"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const footerData = [
  {
    title: "Support",
    links: [
      { name: "Help Centre", href: "#" },
      { name: "AirCover", href: "#" },
      { name: "Combating discrimination", href: "#" },
      { name: "Supporting people with disabilities", href: "#" },
      { name: "Cancellation options", href: "#" },
    ],
  },
  {
    title: "Hosting",
    links: [
      { name: "Local home", href: "#" },
      { name: "Cover for hosts", href: "#" },
      { name: "Hosting resources", href: "#" },
      { name: "Community forum", href: "#" },
      { name: "Hosting responsibly", href: "#" },
    ],
  },
  {
    title: "Hostify",
    links: [
      { name: "Newsroom", href: "#" },
      { name: "New Features", href: "#" },
      { name: "Carers", href: "#" },
      { name: "Investres", href: "#" },
      { name: "Gift cards", href: "#" },
    ],
  },
];

const AppFooter: React.FC = () => {
  return (
    <footer className="bg-[#F4F4F4] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between gap-x-12 gap-y-6">
          {footerData.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
