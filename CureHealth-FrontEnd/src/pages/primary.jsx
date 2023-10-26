const Primary = () => {
  return (
    <>
      <div className="bg-orange-300 h-1/3">
        <div>
          <h2 className="text-4xl mt-8">Primary Care</h2>
          <p className="text-xl pt-4">
            convenient wellness screenings, routine care, and chronic condition
            management.
          </p>
        </div>
        <div className="flex mt-10">
          <div>
            <button className="bg-red-300 m-4 p-3 text-white">
              Find my doctor
            </button>
          </div>
          <div>
            <button className="bg-red-300 m-4 p-3 text-white">
              Create account
            </button>
          </div>
        </div>
      </div>
      <div className="bg-orange-200"></div>
    </>
  );
};

export default Primary;
