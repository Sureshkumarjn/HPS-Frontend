import React, { useState, useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const dname = now.getDay();
      const mo = now.getMonth();
      const dnum = now.getDate();
      const yr = now.getFullYear();
      let hou = now.getHours();
      const min = now.getMinutes();
      const sec = now.getSeconds();
      let pe = "AM";

      if (hou >= 12) {
        pe = "PM";
      }
      if (hou === 0) {
        hou = 12;
      }
      if (hou > 12) {
        hou -= 12;
      }

      Number.prototype.pad = function (digits) {
        let n = this.toString();
        while (n.length < digits) {
          n = "0" + n;
        }
        return n;
      };

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      const ids = [
        "dayname",
        "month",
        "daynum",
        "year",
        "hour",
        "minutes",
        "seconds",
        "period",
      ];

      const values = [
        week[dname],
        months[mo],
        dnum.pad(2),
        yr,
        hou.pad(2),
        min.pad(2),
        sec.pad(2),
        pe,
      ];

      for (let i = 0; i < ids.length; i++) {
        const element = document.getElementById(ids[i]);
        if (element) {
          element.firstChild.nodeValue = values[i];
        }
      }
    };

    const initClock = () => {
      updateClock();
      window.setInterval(updateClock, 1000); // Update every second
    };

    initClock();

    // Cleanup interval when the component is unmounted
    return () => clearInterval();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <div className="datetime">
        <div className="date">
          <span id="dayname">Day</span>, <span id="month">Month</span>
          <span id="daynum">00</span>, <span id="year">Year</span>
        </div>
        <div className="time">
          <span id="hour">00</span>:<span id="minutes">00</span>:
          <span id="seconds">00</span>
          <span id="period">AM</span>
        </div>
      </div>
    </>
  );
};
export default Navbar;
