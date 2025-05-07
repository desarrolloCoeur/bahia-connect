import { Building2, Home, DollarSign, PenToolIcon as Tool } from "lucide-react";

const Services = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="container mx-auto px-6">        
        <div className="grid grid-cols-12 gap-4 mb-20">
          <div className="col-span-12 md:col-span-3 flex items-start">
            <span className="text-6xl font-light text-sky-600 mr-4">03</span>
            <div className="h-[1px] w-full bg-black mt-6"></div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-3xl font-light tracking-tight text-black mb-4">OUR SERVICES</h2>
            <p className="text-sm uppercase tracking-widest text-gray-600 font-light">
              We offer a wide range of services tailored to your needs
            </p>
          </div>
        </div>

        {/* Services grid with Swiss design */}
        <div className="grid grid-cols-12 gap-y-16 gap-x-8">
          {/* Service 1 */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5 md:col-start-2 lg:col-start-2">
            <div className="flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center border border-black mr-4">
                  <Home className="h-5 w-5" />
                </div>
                <h3 className="text-base font-normal uppercase tracking-wide">Mega Project Management</h3>
              </div>
              <p className="text-gray-700 font-light pl-14">
                From BOH planning, amenities, to execution and monitoring—ensuring each stage meets established deadlines and budgets.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <div className="flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center border border-black mr-4">
                  <DollarSign className="h-5 w-5" />
                </div>
                <h3 className="text-base font-normal uppercase tracking-wide">Condominium Management</h3>
              </div>
              <p className="text-gray-700 font-light pl-14">
                We handle maintenance, security, and smooth operation of all common areas, ensuring residents’ quality of life.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5 md:col-start-2 lg:col-start-2">
            <div className="flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center border border-black mr-4">
                  <Tool className="h-5 w-5" />
                </div>
                <h3 className="text-base font-normal uppercase tracking-wide">Civil Associations</h3>
              </div>
              <p className="text-gray-700 font-light pl-14">
                Efficient and organized management of associations, ensuring smooth operations and legal compliance.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <div className="flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center border border-black mr-4">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-normal uppercase tracking-wide">Residential Units</h3>
              </div>
              <p className="text-gray-700 font-light pl-14">
                Full management of residential properties, from leasing to daily maintenance.
              </p>
            </div>
          </div>
        </div>

        {/* Swiss design geometric element */}
        <div className="grid grid-cols-12 mt-20">
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <div className="h-[1px] w-full bg-black"></div>
          </div>
          <div className="hidden md:block md:col-span-1 md:col-start-12">
            <div className="w-6 h-6 bg-sky-600 ml-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
