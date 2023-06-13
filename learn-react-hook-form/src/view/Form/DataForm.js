import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

let renderCount = 0;

const schema = yup.object({
  username: yup.string().required("username is required"),
  email: yup
    .string()
    .email("email format is not valid")
    .required("email is required"),
  channel: yup.string().required("channel is required"),
});

const DataForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("form-submit", data);
  };
  renderCount++;

  return (
    <div className="row mt-4 d-flex justify-content-center">
      <div className="col-sm-4">
        <h5>Youtube Form ({renderCount / 2})</h5>
        <h6>watch value </h6>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              className="form-control form-control-sm"
              type="text"
              name="username"
              defaultValue=""
              {...register("username")}
            />
            <p className="text-danger">{errors.username?.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control form-control-sm"
              type="text"
              name="email"
              defaultValue=""
              {...register("email")}
            />
            <p className="text-danger">{errors.email?.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="channel">Channel</label>
            <input
              className="form-control form-control-sm"
              type="text"
              name="channel"
              defaultValue=""
              {...register("channel")}
            />
            <p className="text-danger">{errors.channel?.message}</p>
          </div>
          <button className="btn btn-sm btn-primary my-2">Submit</button>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default DataForm;
