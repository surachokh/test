import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Table } from "antd";

export default function TablePage() {
  const vehicles = useSelector((state) => state.vehicle.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "REQUEST_VEHICLE" });
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, _, idx) => <a href={`/${vehicles[idx].uid}`}>{text}</a>,
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
      key: "capacity",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
    },
  ];

  return (
    <div style={{ width: "640px", margin: "auto" }}>
      <Table dataSource={vehicles} columns={columns} />
    </div>
  );
}
