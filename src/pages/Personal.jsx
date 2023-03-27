import Layout from "@/components/Layout";
import Image from "next/image";

const Personal = () => {
  return (
    <Layout>
      <div className="container flex justify-center">
        <div className="text-center">
          <div className="page-title">
            <h1 className="text-3xl font-bold mb-9">My Personal Info</h1>
          </div>
          <div className="image mb-8 ">
            <Image
              className="rounded-full shadow-2xl"
              src="/erika.jpg"
              width="250"
              height="250"
            />
          </div>
          <div className="name mb-5">
            <h2 className="text-xl font-bold underline">FULL NAME</h2>
            <p className="text-lg font-semibold">Erika M. David</p>
          </div>
          <div className="gender mb-5">
            <h2 className="text-xl font-bold underline">GENDER</h2>
            <p className="text-lg font-semibold">Female</p>
          </div>
          <div className="age mb-5">
            <h2 className="text-xl font-bold underline">AGE</h2>
            <p className="text-lg font-semibold">18 years old</p>
          </div>
          <div className="birthday mb-5">
            <h2 className="text-xl font-bold underline">BIRTHDAY</h2>
            <p className="text-lg font-semibold">May 12, 2004</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Personal;
