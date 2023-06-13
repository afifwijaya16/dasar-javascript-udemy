import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

const YoutubeForm = () => {
  //   from default
  const form = useForm({
    defaultValues: {
      username: "afif",
      email: "afif@gmail.com",
      channel: "afif wijaya",
      social: {
        facebook: "afif",
        twitter: "afwjy",
      },
      phoneNumber: ["", ""],
      phNumbers: [{ number: "" }],
      age: 0,
      dob: new Date(),
    },
  });

  //   from default use api
  //   const form = useForm({
  //     defaultValues: async () => {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/users/1"
  //       );
  //       const data = await response.json();
  //       return {
  //         username: "afif",
  //         email: data.email,
  //         channel: "afif wijaya",
  //       };
  //     },
  //   });
  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
    reset,
  } = form;

  const {
    errors,
    touchedFields,
    dirtyFields,
    isDirty,
    isValid,
    isSubmitting,
    isSubmitted,
    submitCount,
    isSubmitSuccessful,
  } = formState;

  console.log({ isSubmitting, isSubmitted, isSubmitSuccessful, submitCount });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data) => {
    console.log("form-submit", data);
  };

  const onError = (errors) => {
    console.log(errors);
  };

  console.log({ touchedFields, dirtyFields, isDirty });
  //   if use array
  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  useEffect(() => {
    const subscription = watch((value) => {
      console.log(value);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const handleGetValue = () => {
    console.log("get values", getValues());
  };

  const handleSetValue = () => {
    setValue("username", "fj", {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  renderCount++;

  return (
    <div className="row mt-4 d-flex justify-content-center">
      <div className="col-sm-4">
        <h5>Youtube Form ({renderCount / 2})</h5>
        <h6>watch value </h6>
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="username"
              name="username"
              {...register("username", {
                required: { value: true, message: "username is required" },
              })}
            />
            <p className="text-danger">{errors.username?.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="email"
              name="email"
              {...register("email", {
                pattern: {
                  value:
                    /^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "invalid email format",
                },
                validate: {
                  notAdmin: (fieldValue) => {
                    return (
                      fieldValue !== "admin@exmple/com" ||
                      "enter a different email address"
                    );
                  },
                  notBlackListed: (fieldValue) => {
                    return (
                      !fieldValue.endsWith("baddomain.com") ||
                      "this domain is not supported"
                    );
                  },
                },
              })}
            />
            <p className="text-danger">{errors.email?.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="channel">Channel</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="channel"
              name="channel"
              {...register("channel")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="facebook">Facebook</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="facebook"
              name="facebook"
              {...register("social.facebook")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="twitter"
              name="twitter"
              {...register("social.twitter", {
                disabled: watch("channel") === "",
                required: "enter twitter profile",
              })}
            />
          </div>
          <h6>Object Phone </h6>
          <div className="form-group">
            <label htmlFor="phone">Primary Phone</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="phone"
              {...register("phoneNumber.0")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone-secondary">Phone</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="phone-secondary"
              {...register("phoneNumber.1")}
            />
          </div>
          <h5>Array Phone</h5>
          <div className="form-group">
            <label>list of phone number</label>
            <div>
              {fields.map((field, index) => {
                return (
                  <div className="form-group" key={field.id}>
                    <div className="form-control">
                      <input
                        type="text"
                        {...register(`phNumbers.${index}.number`)}
                      />
                      {index > 0 && (
                        <button type="button" onClick={() => remove(index)}>
                          Remove Phone number {index}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
              <button type="button" onClick={() => append({ number: "" })}>
                Add Phone number
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              className="form-control form-control-sm"
              type="number"
              id="age"
              name="age"
              {...register("age", {
                valueAsNumber: true,
                required: { value: true, message: "age is required" },
              })}
            />
            <p className="text-danger">{errors.age?.message}</p>
          </div>

          <div className="form-group">
            <label htmlFor="dob">date of birthday</label>
            <input
              className="form-control form-control-sm"
              type="date"
              id="dob"
              name="dob"
              {...register("dob", {
                valueAsDate: true,
                required: { value: true, message: "dob is required" },
              })}
            />
            <p className="text-danger">{errors.dob?.message}</p>
          </div>

          <button
            className="btn btn-sm btn-primary my-2"
            disabled={!isDirty || !isValid}
          >
            Submit
          </button>
          <button className="btn btn-sm btn-primary my-2">Submit</button>
          <button onClick={() => reset()}> Reset</button>
          <button onClick={handleGetValue}> Get Values</button>
          <button onClick={handleSetValue}> Set Values</button>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default YoutubeForm;
