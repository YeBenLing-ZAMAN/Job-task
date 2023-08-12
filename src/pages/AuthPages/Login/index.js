import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Button from "../../../components/Button";
import Input from "../../../components/Input/Input";
import CustomLink from "../../../components/Link";
import BannerCarousel from "../../../components/BannerCarousel";
import { BannerCarouselContent } from "../../../assets/BannerData/BannerImage";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState({
    user_id: "",
    password: "",
    otpCode: "",
  });
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <div className="p-6 md:p-0 md:max-w-[70vw] mx-auto md:min-h-[80vh]">
      <div className="mt-4 gap-y-2 flex flex-col-reverse md:flex-row items-start justify-center md:gap-x-4">
        <div className={`basis-3/5 w-full flex flex-wrap gap-3 justify-center`}>
          <div className="w-full bg-slate-100 md:p-4 border rounded mt-6 items-center md:min-h-[40vh]">
            <div className="p-4">
              <h1 className="text-5xl font-bold text-center">login</h1>
              <form onSubmit={handleSubmit} className="w-full md:w-1/2 m-auto">
                <div className="md:flex-col items-center justify-center gap-4">
                  <Input
                    label="Phone"
                    type="text"
                    name="phone"
                    placeholder="Enter your Phone Number"
                    onChange={handleChange}
                    value={value.phone}
                    className="block mt-1 p-2 border-1 border-slate-300 rounded text-md w-60 md:w-72"
                    isRequired="true"
                  />
                </div>
                <div className="relative">
                  <Input
                    label="Password"
                    type={`${showPassword ? "text" : "password"}`}
                    name="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                    value={value.password}
                    className="block mt-1 p-2 border-1 border-slate-300 rounded text-md w-60 md:w-72"
                    inputGroupClass="right"
                    isRequired="true"
                  />
                  <span
                    style={{ marginTop: "0px" }}
                    className="absolute top-7 left-56 md:left-[270px] z-50 text-2xl"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </span>
                </div>
                <Button
                  className="mt-4 md:mt-4 w-30 md:w-36 border-2 rounded px-6 py-2 font-semibold text-lg border-red-500 text-red-500 hover:bg-red-500 hover:text-[#fff] cursor-pointer"
                  type="submit"
                >
                  Login
                </Button>
                <div className="w-full flex justify-center mt-10 text-start">
                  <p>
                    <CustomLink
                      href="/"
                      className="text-black text-sm font-semibold px-5 hover:border-b-2 hover:border-[#2b6777] hover:text-[#2b6777]"
                    >
                      Home
                    </CustomLink>{" "}
                  </p>
                  <p className="login_nav_break_point"> | </p>
                  <p>
                    <CustomLink
                      href="/register"
                      className="text-black text-sm font-semibold px-5 hover:border-b-2 hover:border-[#2b6777] hover:text-[#2b6777]"
                    >
                      Register
                    </CustomLink>{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className={`basis-2/5 overflow-hidden w-full md:bg-slate-100 md:p-4 border rounded mt-6 md:min-h-[40vh]`}
        >
          <BannerCarousel
            imageClassName="w-100 h-full object-cover object-center block"
            content={BannerCarouselContent}
          ></BannerCarousel>
        </div>
      </div>
    </div>
  );
};
export default Login;
