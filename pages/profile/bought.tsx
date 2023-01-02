import { NextPage } from "next";
import Item from "@components/item";
import Layout from "@components/layout";

const Bought: NextPage = () => {
  return (
    <Layout title="구매내역" canGoBack>
      <div className="flex flex-col  divide-y-2">
        {[1, 1, 1, 3, 4, 2, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            id={i}
            key={i}
            title="iphone"
            price={34}
            comments={2}
            hearts={5}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Bought;
