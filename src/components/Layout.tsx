import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";
import SchemaMarkup, { ORGANIZATION_SCHEMA } from "./SchemaMarkup";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <SchemaMarkup id="organization" schema={ORGANIZATION_SCHEMA} />
    <Navbar />
    <main className="flex-1 pt-14">{children}</main>
    <Footer />
    <StickyCTA />
  </div>
);

export default Layout;
