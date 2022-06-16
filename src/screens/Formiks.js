import React from "react";
import { Formik } from "formik";

const Formiks = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "", name: "", phonenumber: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.phonenumber) {
          errors.phonenumber = "Required";
        }
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values.email));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="w-96 mx-auto">
          <div className="w-full inline-flex flex-wrap mb-3">
            <div className="w-full inline-flex ">
              <input
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="h-8 border-gray-500 rounded-sm px-2 border-2 w-full float-left"
                placeholder="name"
              />
            </div>
            <div className="w-full inline-flex text-red-600 ">
              {errors.name && touched.name && errors.name}
            </div>
          </div>
          <div className="w-full inline-flex flex-wrap mb-3">
            <div className="w-full inline-flex ">
              <input
                type="phonenumber"
                name="phonenumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phonenumber}
                className="h-8 border-gray-500 rounded-sm px-2 border-2 w-full float-left"
                placeholder="phonenumber"
              />
            </div>
            <div className="w-full inline-flex text-red-600 ">
              {errors.phonenumber && touched.phonenumber && errors.phonenumber}
            </div>
          </div>
          <div className="w-full inline-flex flex-wrap mb-3">
            <div className="w-full inline-flex ">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="h-8 border-gray-500 rounded-sm px-2 border-2 w-full float-left"
                placeholder="email"
              />
            </div>
            <div className="w-full inline-flex text-red-600 ">
              {errors.email && touched.email && errors.email}
            </div>
          </div>
          <div className="w-full inline-flex flex-wrap mb-3">
            <div className="w-full inline-flex ">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="h-8 border-gray-500 rounded-sm px-2 border-2 w-full float-left"
                placeholder="password"
              />
            </div>
            <div className="w-full inline-flex text-red-600 ">
              {errors.password && touched.password && errors.password}
            </div>
          </div>
          <button type="submit" disabled={isSubmitting} className="mt-7 bg-slate-900 rounded-sm h-8 px-2 text-white w-full">
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Formiks;
