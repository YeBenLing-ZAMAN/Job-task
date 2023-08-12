import { useState } from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input/Input";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

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
    <div className="bg-slate-100 md:p-4 border rounded mt-6 md:min-h-[40vh]">
      <div className="tron_dashboard_login_content">
        <form onSubmit={handleSubmit}>
          <div className="form_group" style={{ display: "inherit" }}>
            <Input
              label="User ID"
              type="text"
              name="user_id"
              placeholder="Enter your user ID"
              onChange={handleChange}
              value={value.user_id}
              className="userid_input input_field"
              inputGroupClass="right"
            />
          </div>
          <div className="form_group" style={{ display: "inherit" }}>
            <Input
              label="Password"
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={value.password}
              className="password_input input_field"
              inputGroupClass="right"
            />
            <span
              style={{ marginTop: "0px" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>
          <Button
            type="submit"
            className="submit_btn"
            // disabled={OTPup}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Login;
