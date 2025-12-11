import Image from "next/image";
import Link from "next/link";
import NavItems from "./nav-items";

const Navbar = () => {
  return (
    <header className="bg-white h-16 border-b">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href="/">
          <Image src="/brand/logo.svg" alt="Logo" width={200} height={40} />
        </Link>

        <NavItems />
      </div>
    </header>
  );
};

export default Navbar;
