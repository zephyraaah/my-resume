import Layout from "@/components/Layout";
const Certificates = () => {
  return (
    <Layout>
      <div className="container flex justify-center">
        <div className="text-center">
          <div className="page-title">
            <h1 className="text-3xl font-bold mb-9">Certificates</h1>
          </div>
          <div className="certificatePrep mb-8">
            <img
              className="w-[600px] mb-2 rounded-md shadow-2xl"
              src="/certificateprep.jpg"
              alt=""
            />
            <h2 className="text-xl font-bold">
              Prep Certificate of Completion
            </h2>
          </div>
          <div className="certificatePrep mb-8">
            <img
              className="w-[600px] mb-2 rounded-md shadow-2xl"
              src="/certificategrade10.jpg"
              alt=""
            />
            <h2 className="text-xl font-bold">Certificate of Recognition</h2>
          </div>
          <div className="certificatePrep mb-8">
            <img
              className="w-[600px] mb-2 rounded-md shadow-2xl"
              src="/diploma.jpg"
              alt=""
            />
            <h2 className="text-xl font-bold">Diploma</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Certificates;
