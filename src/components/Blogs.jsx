/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import Pdf from "react-to-pdf";

const Blogs = () => {
  const ref = React.createRef();
  return (
    <div className="my-container flex flex-col gap-6">
      <div ref={ref} className="text-center">
        <p className="font-bold text-2xl text-color mb-2">
          Question #1: What is the differences between uncontrolled and
          controlled components?
        </p>
        <p>
          <span className="font-bold text-xl">Ans:</span> In React, controlled components refers to components that
          have their state and behavior controlled by the parent component.
          These components rely on props passed down from the parent component
          to update their state and behavior. Uncontrolled components refer to
          components that manage their own state internally.
        </p>
        <p className="font-bold text-2xl text-color mb-2 mt-6">Question #2: How to validate React props using PropTypes?</p>
        <p>
        <span className="font-bold text-xl">Ans:</span> You can validate react props using PropType in many
          different way. Such As
          <li>PropTypes.any</li>
          <li>PropTypes.bool</li>
          <li>PropTypes.number</li>
          <li>PropTypes.string</li>
          <li>PropTypes.array</li>
          <li>PropTypes.object</li>
          <li>PropTypes.symbol</li>
          These are the basic data type validators in PropType.
        </p>
        <p className="font-bold text-2xl text-color mb-2 mt-6">
          Question #3: What is the difference between nodejs and express js?
        </p>
        <p>
        <span className="font-bold text-xl">Ans:</span> Express is a minimal and flexible node. js web application
          framework, providing a robust set of features for building single and
          multi-page, and hybrid web applications. On the other hand, Node. js
          is detailed as a platform built on Chrome`s JavaScript runtime for
          easily building fast, scalable network applications.
        </p>
        <p className="font-bold text-2xl text-color mb-2 mt-6">
          Question #4: What is a custom hook, and why will you create a custom
          hook?
        </p>
        <p>
        <span className="font-bold text-xl">Ans:</span> Custom React JS hooks offer reusability as when a custom
          hook is created, it can be reused easily, which makes the code cleaner
          and reduces the time to write the code. It also enhances the rendering
          speed of the code as a custom hook does not need to be rendered again
          and again while rendering the whole code.
        </p>
      </div>
      <div className="flex justify-end mt-16">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button onClick={toPdf} className="btn-primary">
            Download Pdf
          </button>
        )}
      </Pdf>
      </div>
    </div>
  );
};

export default Blogs;
