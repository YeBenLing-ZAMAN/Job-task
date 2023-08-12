import { useState } from "react";
import Input from "../../../../components/Input/Input";
import DatePicker from "react-datepicker";
import TextArea from "../../../../components/TextArea";

const CheckoutDetails = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState({
    full_name: "",
    email: "",
    phone: "",
    date: startDate,
    note: "",
    payment_method: "",
  });
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <div className="w-full bg-slate-100 p-4 md:px-10 border rounded mt-6 md:min-h-[40vh]">
      <div className="tron_dashboard_login_content">
        <form onSubmit={handleSubmit}>
          <div className="md:flex justify-start gap-4">
            <Input
              label="Full Name"
              type="text"
              name="full_name"
              placeholder="Enter your Full Name"
              onChange={handleChange}
              value={value.full_name}
              className="block mt-1 p-2 border-1 border-slate-300 rounded text-md w-60 md:w-72"
              isRequired="true"
            />
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
          <div className="md:flex justify-start items-end gap-4 mt-4">
            <Input
              label="Email"
              type="text"
              name="email"
              placeholder="Enter your Email Address"
              onChange={handleChange}
              value={value.email}
              className="block mt-1 p-2 border-1 border-slate-300 rounded text-md w-60 md:w-72"
              isRequired="true"
            />
            <span className="block">
              <label htmlFor="pick-up Date" className="block">
                Pick-Up Date
              </label>
              <DatePicker
                selected={startDate}
                className="block mt-1 p-2 border-1 border-slate-300 rounded text-md w-60 md:w-72"
                onChange={(date) => setStartDate(date)}
              />
            </span>
          </div>
          <div className="md:flex justify-start items-end gap-4 mt-4">
            <TextArea
              label="Note"
              type="text"
              name="note"
              placeholder="Your any note here..."
              rows={10}
              onChange={handleChange}
              value={value.note}
              className="block mt-1 p-2 border-1 border-slate-300 rounded text-md w-60 md:w-72"
              isRequired="true"
            />
            <div className="mt-4">
              <label className="block mb-1">Payment Method</label>
              <span className="block">
                <input
                  className="mr-1"
                  type="radio"
                  name="payment_method"
                  value="Cash online"
                  onChange={handleChange}
                />
                Cash online
              </span>
              <span className="block">
                <input
                  className="mr-1"
                  type="radio"
                  name="payment_method"
                  value="Online Payment"
                  onChange={handleChange}
                />
                Online Payment
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CheckoutDetails;
