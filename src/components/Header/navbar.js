import CustomLink from "../Link";

const Navbar = () => {
  return (
    <div className="border bg-white p-4 flex justify-around">
      <div className="flex justify-center">
        <CustomLink
          href="/"
          className="text-3xl text-black hover:text-[#2b6777]"
        >
          REPLIQ
        </CustomLink>
      </div>
      <nav className="text-gray-900 flex justify-center items-center gap-x-6 text-md">
        <CustomLink href="/" className="hover:text-[#2b6777]">
          Home
        </CustomLink>
        <p>|</p>
        <CustomLink href="/products" className="hover:text-[#2b6777]">
          Product
        </CustomLink>
        <p>|</p>
        <CustomLink href="/cart" className="hover:text-[#2b6777]">
          cart
        </CustomLink>
        <p>|</p>
        <CustomLink
          href="/login"
          className="border-1 rounded-md px-2 py-1 font-semibold text-[#fff] text-md bg-red-500 border-red-500 hover:bg-red-600 cursor-pointer"
        >
          login/signup
        </CustomLink>
        <p>|</p>
        <CustomLink
          href="/dashboard"
          className="border-1 rounded-md px-2 py-1 font-semibold text-[#fff] text-md bg-red-500 border-red-500 hover:bg-red-600 cursor-pointer"
        >
          Dashboard
        </CustomLink>
      </nav>
    </div>
  );
};

export default Navbar;
