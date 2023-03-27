import Layout from "@/components/Layout";

const Education = () => {
  return (
    <Layout>
      <div className="container flex justify-center">
        <div className="text-center">
          <div className="page-title">
            <h1 className="text-3xl font-bold mb-9">Educational Background</h1>
          </div>
          <div className="primary mb-5">
            <h2 className="text-xl font-bold underline">PRIMARY</h2>
            <p className="text-lg font-semibold">
              San Francisco Elementary School
            </p>
          </div>
          <div className="juniorHigh mb-5">
            <h2 className="text-xl font-bold underline uppercase">
              Junior High School
            </h2>
            <p className="text-lg font-semibold">New Era University</p>
          </div>
          <div className="secondary mb-5">
            <h2 className="text-xl font-bold underline uppercase">Secondary</h2>
            <p className="text-lg font-semibold">New Era University</p>
          </div>
          <div className="college mb-5">
            <h2 className="text-xl font-bold underline uppercase">College</h2>
            <p className="text-lg font-semibold">Mabalacat City College</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
