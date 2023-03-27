import Layout from "@/components/Layout";

const References = () => {
  return (
    <Layout>
      <div className="container flex justify-center">
        <div className="text-center">
          <div className="page-title">
            <h1 className="text-3xl font-bold mb-9">References</h1>
          </div>
          <div className="primary mb-5">
            <h2 className="text-xl font-bold underline">EFRAIM M. GABUAT</h2>
            <p className="text-lg font-semibold">Software Engineer</p>
          </div>
          <div className="juniorHigh mb-5">
            <h2 className="text-xl font-bold underline uppercase">
              Mark Joseph Santos
            </h2>
            <p className="text-lg font-semibold">Computer Engineer</p>
          </div>
          <div className="secondary mb-5">
            <h2 className="text-xl font-bold underline uppercase">
              Janelah Duenas
            </h2>
            <p className="text-lg font-semibold">Lawyer</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default References;
