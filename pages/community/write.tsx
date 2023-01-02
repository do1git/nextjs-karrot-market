import { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import Textarea from "@components/textarea";

const Write: NextPage = () => {
  return (
    <Layout canGoBack title="Write Post">
      <form className="">
        <Textarea placeholder="Ask a question!" />
        <Button text="submit" />
      </form>
    </Layout>
  );
};

export default Write;
