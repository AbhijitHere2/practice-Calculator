import React from "react";
import Buttons from "../../common/Buttons/Buttons";

const CalWrap = (props) => {
  const AllBtn = props.BtnArr.map((btObj) => {
    return <Buttons btnName={btObj.value} btfun={btObj.btnFun} />;
  });
  // const AllOpBtn = props.opArr.map((btObj) => {
  //   return <Buttons btnName={btObj.value} btfun={btObj.btnFun} />;
  // });


  return (
    <>
    
     <div className="flex flex-wrap  justify-center items-center text-lg    ">
            
    <div className=" flex flex-wrap  w-[310px] justify-evenly ">  {AllBtn} </div>
      {/* <div className=" flex flex-wrap   w-[350px]   ">{AllOpBtn}</div> */}
     </div>
    </>
  );
};

export default CalWrap;
