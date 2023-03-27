import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-6 px-4">{children}</main>
    </>
  );
};

export default Layout;