import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{props.alert.msg}</strong>
      </div>

    //   <div
    //     className={`toast align-items-center text-white bg-${props.alert.type} border-0`}
    //     role="alert"
    //     aria-live="assertive"
    //     aria-atomic="true"
    //   >
    //     <div className="d-flex">
    //       <div className="toast-body">{props.alert.msg}</div>
    //     </div>
    //   </div>
    )
  );
}
