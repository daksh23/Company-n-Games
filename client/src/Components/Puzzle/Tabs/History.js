import React, { useState } from "react";
import { getHistory } from "../../../Services/puzzleServices";

function History() {
  const [history, setHistory] = useState([]);

  const loadHistory = () => {
    getHistory().then((res) => {
      console.log(res);
      setHistory(res.data.challenges);
    });
  };

  const timeString = (time) => {
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${minutes}:${seconds}`;
  };

  const historyRow = (data) => {
    return (
      <tr key={data._id}>
        <td>{data.challenger.username}</td>
        <td>{timeString(data.allocatedTime)}</td>
        <td>{timeString(data.takenTime)}</td>
        <td>{data.status}</td>
      </tr>
    );
  };

  useState(() => {
    loadHistory();
  }, []);

  return (
    <div>
      History
      <table style={{ border: "2px solid green" }}>
        <thead>
          <tr>
            <th>username</th>
            <th>Allocated Time</th>
            <th>Taken Time</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {history.length > 0 && history.map((x, i) => historyRow(x))}
        </tbody>
      </table>
    </div>
  );
}

export default History;
