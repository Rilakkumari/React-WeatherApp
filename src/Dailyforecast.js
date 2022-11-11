import React from "react";

export default function Dailyforecast() {
  return (
    <div className="row dailyforecast">
      <div className="col-2">
        Tue <img src="pictures/039-sun.png" alt="" className="icons" />
        <strong>23°</strong> 16°
      </div>
      <div className="col-2">
        Wed <img src="pictures/038-cloudy-3.png" alt="" className="icons" />
        <strong>19°</strong> 14°
      </div>
      <div className="col-2">
        Thu <img src="pictures/011-cloudy.png" alt="" className="icons" />
        <strong>21°</strong> 17°
      </div>
      <div className="col-2">
        Fri <img src="pictures/034-cloudy-1.png" alt="" className="icons" />
        <strong>24°</strong> 19°
      </div>
      <div className="col-2">
        Sat <img src="pictures/039-sun.png" alt="" className="icons" />
        <strong>26°</strong> 21°
      </div>
      <div className="col-2">
        Sun <img src="pictures/043-warm.png" alt="" className="icons" />
        <strong>30°</strong> 21°
      </div>
    </div>
  );
}
