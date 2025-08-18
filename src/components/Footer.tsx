const Footer = () => {
  return (
    <>
      <div className="bg-black text-white px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <p className="text-white">
              At Smart Car Recovery, we provide a wide range of services, from
              basic roadside assistance to expert vehicle recovery. Whether you
              need a jump start, fuel delivery, or a quick tyre change, our team
              is always ready to help.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-4">
              Useful Links
            </h3>
            <p className="mb-2 cursor-pointer hover:text-blue-600">Home</p>
            <p className="mb-2 cursor-pointer hover:text-blue-600">About Us</p>
            <p className="mb-2 cursor-pointer hover:text-blue-600">Services</p>
            <p className="mb-2 cursor-pointer hover:text-blue-600">
              Why Choose Us
            </p>
            <p className="mb-2 cursor-pointer hover:text-blue-600">Contact</p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-900">
              Our Services
            </h3>
            <p className="mb-2 cursor-pointer hover:text-blue-600">
              Emergency Car Towing
            </p>
            <p className="mb-2 cursor-pointer hover:text-blue-600">
              Desert Pull-Out Recovery
            </p>
            <p className="mb-2 cursor-pointer hover:text-blue-600">
              Mobile Tyre Fitting
            </p>
            <p className="mb-2 cursor-pointer hover:text-blue-600">
              Breakdown Assistance Dubai
            </p>
            <p className="mb-2 cursor-pointer hover:text-blue-600">
              Jumpstarts/Battery boost
            </p>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-900">
              More Info
            </h3>
            <p className="mb-2 cursor-pointer hover:text-blue-600">
              CEO: <span className="text-blue-900">Naseeb Haider</span>
            </p>
            <p className="mb-2 cursor-pointer hover:text-blue-600">
              Phone Number:{" "}
              <a href="tel:0561623688">
                <span className="text-blue-900">0561623688</span>
              </a>
            </p>
            <p className="mb-2 cursor-pointer hover:text-blue-600">
              Location:{" "}
              <span className="text-blue-900">Aljurf Industrial 2 Ajman</span>
            </p>
            <p className="mb-2 cursor-pointer hover:text-blue-600">
              E-mail:{" "}
              <a
                href="mailto:aneesfasttrack@gmail.com"
                className="text-blue-900 hover:underline"
              >
                aneesfasttrack@gmail.com
              </a>
            </p>
            <p className="mb-2 cursor-pointer hover:text-blue-600">
              Areas We Cover:{" "}
              <span className="text-blue-900">
                Ajman, Sharjah, Dubai, Abu dhabi
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 p-7">
        {" "}
        <p className="text-white text-center">
          ©{new Date().getFullYear()}. Smart Car Recovery UAE. All Rights
          Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
