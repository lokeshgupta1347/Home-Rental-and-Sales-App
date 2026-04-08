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
          <div>
            {/* left side  */}
            <div>
              <p>
                <img src={assets.pin} width={19} alt="" />
                <span>{property.address}</span>
              </p>

              <div>
                <h3 className="h3">{property.title}</h3>
                <div className="bold-18">
                    ${property.price.sale} | ${property.price.sale}.00/night
                </div>
              </div>

              <div className="flex justify-between items-start my-1">
              <h4 className="h4 text-secondary">{property.propertyType}</h4>

              <div className="flex items-baseline gap-2 text-secondary relative top-1.5">
                <h4 className="bold-18 relative bottom-0.5">5.0</h4>
              


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
                  <h4>Property Details</h4>
                  <p>{property.description}</p>
              </div>

              

            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default PropertyDetails;
