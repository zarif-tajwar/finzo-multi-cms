import { Container } from "../common";
import DesktopNavbar from "./desktop-navbar";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
  return (
    <header>
      <Container asChild className="h-[var(--nav-height)] [--nav-height:6rem]">
        <nav>
          <DesktopNavbar />
          <MobileNavbar />
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
