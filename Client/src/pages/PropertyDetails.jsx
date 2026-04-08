import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import PropertyImages from "../components/PropertyImages";
import { assets } from "../assets/data";

const PropertyDetails = () => {
  const { properties } = useAppContext();
  const [property, setproperty] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const property = properties.find((property) => property._id === id);
    property && setproperty(property);
  }, [properties]);
  return (
    property && (
      <div className="bg-gradient-to-r from-[#fffbee] to-white py-28">
        <div className="max-padd-container">
          {/* image  */}
          <PropertyImages property={property}></PropertyImages>
          {/* container  */}
          <div className="flex flex-col xl:flex-row gap-8 mt-6">
            {/* left side  */}
            <div className="p-4 flex-2 rounded-xl border border-slate-900/10">
              <p className="flexStart gap-x-2">
                <img src={assets.pin} width={19} alt="" />
                <span>{property.address}</span>
              </p>

              <div className="flex justify-between flex-col sm:flex-row sm:items-end mt-3">
                <h3 className="h3">{property.title}</h3>
                <div className="bold-18">
                  ${property.price.sale} | ${property.price.sale}.00/night
                </div>
              </div>

              <div className="flex justify-between items-start my-1">
                <h4 className="h4 text-secondary">{property.propertyType}</h4>

                <div className="flex items-baseline gap-2 text-secondary relative top-1.5">
                  <h4 className="bold-18 relative bottom-0.5 text-black">
                    5.0
                  </h4>

                  <img src={assets.star} alt="starIcon" width={18} />
                  <img src={assets.star} alt="starIcon" width={18} />
                  <img src={assets.star} alt="starIcon" width={18} />
                  <img src={assets.star} alt="starIcon" width={18} />
                  <img src={assets.star} alt="starIcon" width={18} />
                </div>
              </div>

              <div className="flex gap-x-4 mt-3">
                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                  <img src={assets.bed} alt="" width={19} />
                  {property.facilities.bedrooms}
                </p>
                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                  <img src={assets.facilities.bath} alt="" width={19} />
                  {property.facilities.bathrooms}
                </p>
                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                  <img src={assets.car} alt="" width={19} />
                  {property.facilities.garages}
                </p>
                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                  <img src={assets.ruler} alt="" width={19} />
                  400
                </p>
              </div>

              <div className="mt-6">
                <h4 className="h4 mt-4 mb-1">Property Details</h4>
                <p className="mb-4">{property.description}</p>
              </div>

              <h4 className="h4 mt-6 mb-2">Amenities</h4>
              <div className="flex gap-3">
                {property.amenities.map((amenity, index) => {
                  <div
                    key={index}
                    className="p-3 py-1 rounded-lg bg-secondary/10 ring-1 ring-slate-900/10 text-sm"
                  >
                    {amenity}
                  </div>;
                })}
              </div>

              {/* form check availability  */}
              <form
                action=""
                className="text-gray-500  rounded-lg px-6 py-4 flex flex-col lg:flex-row gap-4  max-w-md lg:max-w-full ring-1 ring-slate-900/5 relative mt-10"
              >
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <img src={assets.pin} alt="pinIcon" width={20} />
                    <label htmlFor="destinationInput">Destination</label>
                  </div>
                  <input
                    list="destinations"
                    id="destinationInput"
                    type="text"
                    className="rounded border border-gray-200 px-3 py-1.5 mt-1.5  text-sm outline-none"
                    placeholder="Type here..."
                    required
                  />
                  <datalist id="destinations">
                    {cities.map((city, index) => (
                      <option value={city} key={index}></option>
                    ))}
                  </datalist>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <img src={assets.calendar} alt="calendar" width={20} />
                    <label htmlFor="checkInDate">Check in</label>
                  </div>
                  <input
                    type="date"
                    id="checkInDate"
                    className=" bg-secondary/10  border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <img src={assets.calendar} alt="calendar" width={20} />
                    <label htmlFor="checkOutDate">Check out</label>
                  </div>
                  <input
                    type="date"
                    id="checkOutDate"
                    className=" bg-secondary/10  border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <img src={assets.user} alt="userIcon" width={20} />
                    <label htmlFor="guests">Guests</label>
                  </div>
                  <input
                    type="number"
                    id="guests"
                    min={1}
                    max={5}
                    className="rounded bg-secondary/10  border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                    placeholder="0"
                  />
                </div>
                <button
                  type="submit"
                  className="flexCenter gap-1 rounded-md btn-dark min-w-44"
                >
                  <img
                    src={assets.search}
                    alt="searchicon"
                    width={20}
                    className="invert"
                  />
                  <span>Search</span>
                </button>
              </form>
            </div>

            {/* right side  */}

            <div className="flex-1 max-w-sm">
                <div>
                    <h4 className="h4 mb-3">Contact Agent</h4>
                    <form className="flex flex-col gap-4">
                        <input type="text" placeholder="Your name" className="p-2 py-1 border border-gray-300 rounded-md text-sm required" />
                        <input type="email" placeholder="Your email" className="p-2 py-1 border border-gray-300 rounded-md text-sm required" />
                        <textarea rows={4}  placeholder="Your Message" className="p-2 py-1 border border-gray-300 rounded-md text-sm required" />
                        <button type="submit" className="btn-secondary rounded-lg py-1.5">Send Message</button>
                    </form>
                    <h4 className="h4 mb-3 mt-8">
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <h5>{property.agency.name}</h5>
                                        <p>Agency</p>
                                    </div>
                                    <p>Agency office</p>
                                </div>
                                <img src={assets.userImg} alt="" />
                            </div>
                        </div>
                    </h4>
                </div>
            </div>

          </div>
        </div>
      </div>
    )
  );
};

export default PropertyDetails;
