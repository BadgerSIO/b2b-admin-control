"use client";
import { Field, Form, Formik } from "formik";

const AddProduct = () => {
  const handleSubmit = (data) => {
    fetch(`https://product-management-server-omega.vercel.app/b2bproduct`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <section className="p-5">
      <h1 className="text-xl font-semibold">Add product</h1>
      <Formik
        initialValues={{ name: "", shortDescription: "", price: "", image: "" }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        <Form className="">
          <Field
            className="w-full my-2 p-2"
            placeholder="Product Name"
            name="name"
            type="text"
          ></Field>
          <Field
            className="w-full my-2 p-2"
            placeholder="Product short description"
            name="shortDescription"
            type="text"
          ></Field>
          <Field
            className="w-full my-2 p-2"
            placeholder="Product Price"
            name="price"
            type="text"
          ></Field>
          <Field
            className="w-full my-2 p-2"
            placeholder="Product Image Url"
            name="image"
            type="url"
          ></Field>
          <button
            type="submit"
            className="btn btn-outline btn-sm border-borderGray bg-white"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default AddProduct;
