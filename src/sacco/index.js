import React, { useState } from "react";
import CardComponent from "./components/CardComponent";
import {
  FiBriefcase,
  FiCast,
  FiClipboard,
  FiColumns,
  FiCommand,
  FiCreditCard,
  FiDisc,
  FiGlobe,
  FiImage,
  FiInbox,
  FiList,
  FiLoader,
  FiPackage,
} from "react-icons/fi";

function Temp() {
  const host = window.location.host;
  console.log(host);

  const [clientId, setClientId] = useState();

  return (
    <div className="temp">
      <div>
        {/**Top Cards */}
        <div className="temp-card-row">
          <div className="temp-card-row">
            <CardComponent
              title="X100 KENYA"
              // icon={<FiBriefcase size={22} color="#7F7FD5" />}
              icon={<FiGlobe size={22} color="#7F7FD5" />}
            />
            <CardComponent
              title="X100 SIERRA LEONE"
              icon={<FiGlobe size={22} color="#7F7FD5" />}
            />
          </div>

          <div className="temp-card-row">
            <CardComponent
              title="X100 ROKEL"
              icon={<FiGlobe size={22} color="#7F7FD5" />}
            />
            <CardComponent
              title="X100 SLCB"
              icon={<FiGlobe size={22} color="#7F7FD5" />}
            />
          </div>
        </div>

        {/**Bottom Cards */}
        <div className="temp-card-row">
          <div className="temp-card-row">
            <CardComponent
              title="X100 SL"
              icon={<FiGlobe size={22} color="#7F7FD5" />}
            />
            <CardComponent
              title="X100 SL"
              icon={<FiGlobe size={22} color="#7F7FD5" />}
            />
          </div>

          <div className="temp-card-row">
            <CardComponent
              title="X100 SL"
              icon={<FiGlobe size={22} color="#7F7FD5" />}
            />
            <CardComponent
              title="X100 SL"
              icon={<FiGlobe size={22} color="#7F7FD5" />}
            />
          </div>
        </div>

        <div className="temp-card-row">
          <div className="temp-card-row">
            <CardComponent
              title="X100 SL"
              icon={<FiGlobe size={22} color="#7F7FD5" />}
            />
            <CardComponent
              title="X100 SL"
              icon={<FiGlobe size={22} color="#7F7FD5" />}
            />
          </div>

          <div className="temp-card-row">
            <CardComponent
              title="X100 SL"
              icon={<FiGlobe size={22} color="#7F7FD5" />}
            />
            <CardComponent
              title="X100 SL"
              icon={<FiGlobe size={22} color="#7F7FD5" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temp;
