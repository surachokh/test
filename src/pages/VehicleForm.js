import React, { useEffect } from "react";
import { Form, Input, InputNumber } from "formik-antd";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";

export default function VehicleForm() {
  const vehicle = useSelector((state) => state.vehicle.specificVehicle);

  const dispatch = useDispatch();

  const param = useParams();

  useEffect(() => {
    dispatch({ type: "REQUEST_SPECIFIC_VEHICLE", param });
  }, []);

  return (
    <div style={{ width: `640px`, margin: "auto" }}>
      {vehicle && (
        <Formik
          initialValues={{
            name: vehicle.name,
            capacity: parseInt(vehicle.capacity),
            weight: parseInt(vehicle.weight),
          }}
          render={() => (
            <Form>
              <div style={{ width: "240px" }}>
                Name
                <Input name="name" />
              </div>
              <br />
              <div style={{ width: "240px" }}>{`Code: ${vehicle.code}`}</div>
              <br />
              <div style={{ width: "240px" }}>
                Capacity
                <br />
                <InputNumber name="capacity" />
              </div>
              <br />
              <div style={{ width: "240px" }}>
                Weight
                <br />
                <InputNumber name="weight" />
              </div>
            </Form>
          )}
        />
      )}
      <br />
      <br />
      <a href="/">Back</a>
    </div>
  );
}
