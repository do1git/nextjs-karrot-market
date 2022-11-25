import { NextPage } from "next";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";

const Edit: NextPage = () => {
  return (
    <Layout canGoBack title="Edit Profile">
      <form className="space-y-4">
        <div className="flex items-center justify-start space-x-3">
          <div className="w-14 h-14 rounded-full bg-slate-400" />
          <label
            htmlFor="pics"
            className="cursor-pointer p-2 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-gray-300 hover:border-white focus:border-orange-500 focus:ring-2 focus:ring-offset-2"
          >
            Change photo
            <input type="file" id="pics" className="hidden" accept="image/*" />
          </label>
        </div>

        <Input name="email" label="Email Address" kind="email" />
        <Input name="phone" label="Phone Number" kind="phone" />

        <Button text="Update profile" />
      </form>
    </Layout>
  );
};

export default Edit;
