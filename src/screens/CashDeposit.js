// import React, { useState } from "react";
// import InputField from "../CashDeposit/components/fields/InputField";
// import Label from "../CashDeposit/components/label/Label";
// import SelectField from "../CashDeposit/components/fields/SelectField";
// import ButtonComponent from "../CashDeposit/components/button/ButtonComponent";
// import TextAreaField from "../CashDeposit/components/fields/TextArea";
// import HeaderComponent from "../CashDeposit/components/header/HeaderComponent";
// import { FullScreen, useFullScreenHandle } from "react-full-screen";
// const host = window.location.host;

// function CashDeposit() {
//   // creating states to be used in the application
//   const [permittedBal, setPermittedBal] = useState();
//   const [availableBal, setAvailableBal] = useState();
//   const [customData, setCustomData] = useState(["gg"]);
//   const [ledgerBal, setLedgerBal] = useState();
//   const [accountBranch, setAccountBranch] = useState();
//   const [transactionType, setTransactionType] = useState("CADD - CASH DEPOSIT");
//   const handleEnter = () => {
//     alert("Populate");
//   };

//   const handle = useFullScreenHandle();

//   return (
//     <FullScreen handle={handle}>
//       <div style={{ backgroundColor: "white" }}>
//         <div className="cash__deposit">
//           {/*Whole card*/}
//           <div style={{ backgroundColor: "#d1d1cf", padding: "5px" }}>
//             <div style={{ display: "flex" }}>
//               <ButtonComponent
//                 label="Find By ID"
//                 buttonHeight={"30px"}
//                 buttonWidth={"120px"}
//                 buttonColor={"white"}
//                 buttonBackgroundColor="rgb(21 163 183)"
//               />
//               <ButtonComponent
//                 label="Find By Name"
//                 buttonHeight={"30px"}
//                 buttonWidth={"120px"}
//                 buttonColor={"white"}
//                 buttonBackgroundColor="rgb(21 163 183)"
//               />
//               <div onClick={handle.enter}>
//                 <ButtonComponent
//                   label="Enter Full Screen"
//                   buttonHeight={"30px"}
//                   buttonWidth={"150px"}
//                   buttonColor={"white"}
//                   buttonBackgroundColor="rgb(21 163 183)"
//                 />
//               </div>
//             </div>

//             <hr style={{ margin: "0px" }} />
//             {/*Transaction Type and*/}
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <div style={{ flex: "0.4" }}>
//                 <InputField
//                   label="Transaction Type:"
//                   required
//                   labelWidth={"38.7%"}
//                   inputWidth={"59%"}
//                   value={"CADD - CASH DEPOSIT"}
//                   disabled
//                 />
//               </div>

//               <div style={{ flex: "0.2" }}>
//                 <ButtonComponent
//                   label="Print Receipt"
//                   buttonHeight={"30px"}
//                   buttonWidth={"120px"}
//                   buttonColor={"white"}
//                   buttonBackgroundColor="rgb(21 163 183)"
//                 />
//               </div>
//               <ButtonComponent
//                 label="View Voucher"
//                 buttonHeight={"30px"}
//                 buttonWidth={"120px"}
//                 buttonColor={"white"}
//                 buttonBackgroundColor="rgb(21 163 183)"
//               />
//             </div>

//             {/*Approved Transaction*/}
//             <div style={{ display: "flex" }}>
//               <div style={{ flex: 0.6 }}>
//                 <InputField
//                   label="Approved Transaction"
//                   labelWidth={"25.4%"}
//                   inputWidth={"70%"}
//                   disabled
//                 />
//               </div>

//               <ButtonComponent
//                 label="Refresh"
//                 buttonHeight={"30px"}
//                 buttonWidth={"120px"}
//                 buttonColor={"white"}
//                 buttonBackgroundColor="rgb(21 163 183)"
//               />
//             </div>

//             <div className="whole-section" style={{ display: "flex", flex: 1 }}>
//               {/*The left Card*/}
//               <div
//                 style={{
//                   flex: "0.7",
//                   boxShadow: "1px 8px 25px -3px rgba(138,138,138,0.75)",
//                   borderRadius: "10px",
//                   padding: "4px",
//                   backgroundColor: "white",
//                 }}
//               >
//                 {/**Credit Account and Value Date */}
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                   <div style={{ flex: "0.5" }}>
//                     <InputField
//                       label="Credit Account:"
//                       type={"number"}
//                       required
//                       labelWidth={"40%"}
//                       inputWidth={"50%"}
//                     />
//                   </div>

//                   <div style={{ flex: "0.5" }}>
//                     <InputField
//                       type={"date"}
//                       label="Value Date"
//                       labelWidth={"30%"}
//                     />
//                   </div>
//                 </div>

//                 {/**Currency and Account Name */}
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                   <div style={{ flex: "0.5" }}>
//                     <InputField
//                       label="Currency:"
//                       disabled
//                       labelWidth={"40%"}
//                       inputWidth={"50%"}
//                     />
//                   </div>

//                   <div style={{ flex: "0.5" }}>
//                     <InputField
//                       label="A/C Name:"
//                       disabled
//                       labelWidth={"30%"}
//                       inputWidth={"70%"}
//                     />
//                   </div>
//                 </div>

//                 {/**Product and Signature Verification */}
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                   <div style={{ flex: "0.5" }}>
//                     <InputField
//                       label="Product:"
//                       disabled
//                       labelWidth={"40%"}
//                       inputWidth={"50%"}
//                     />
//                   </div>

//                   <div style={{ flex: "0.5" }}>
//                     <ButtonComponent
//                       label="Sig Ver"
//                       buttonHeight={"30px"}
//                       buttonWidth={"120px"}
//                       buttonColor={"white"}
//                       buttonBackgroundColor="rgb(21 163 183)"
//                       inputWidth={"60%"}
//                     />
//                   </div>
//                 </div>
//                 <hr />

//                 {/* Amount*/}
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                   <div style={{ flex: "0.5" }}>
//                     <InputField
//                       label="Amount:"
//                       disabled
//                       labelWidth={"40%"}
//                       inputWidth={"50%"}
//                     />
//                   </div>

//                   <div style={{ flex: "0.5" }}>
//                     <InputField disabled inputWidth={"100%"} />
//                   </div>
//                 </div>

//                 {/*Source of funds*/}
//                 <div>
//                   <SelectField
//                     label={"Source of Funds"}
//                     labelWidth={"19.3%"}
//                     inputWidth={"60%"}
//                   />
//                 </div>

//                 {/*Voucher Ref and Third Party Transactions*/}
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                   <div style={{ flex: "0.5" }}>
//                     <InputField
//                       label="Voucher Reference:"
//                       required
//                       labelWidth={"40%"}
//                       inputWidth={"50%"}
//                     />
//                   </div>

//                   <div style={{ flex: "0.5" }}>
//                     <SelectField
//                       label="3rd Party Transaction:"
//                       labelWidth={"30%"}
//                       inputWidth={"70%"}
//                     />
//                   </div>
//                 </div>
//                 <hr />

//                 {/*Narration*/}
//                 <div>
//                   <TextAreaField
//                     label="Narration 1:"
//                     required
//                     labelWidth={"19.5%"}
//                     inputWidth={"80%"}
//                   />
//                 </div>

//                 {/*Deposited by*/}
//                 <div>
//                   <InputField
//                     label="Deposited by:"
//                     required
//                     labelWidth={"19.5%"}
//                     inputWidth={"80%"}
//                   />
//                 </div>

//                 {/*Contact Tel*/}
//                 <div>
//                   <InputField
//                     label="Contact Tel:"
//                     required
//                     labelWidth={"19.5%"}
//                     inputWidth={"80%"}
//                   />
//                 </div>
//                 <br />
//               </div>

//               {/**Right Sectionn Read Only */}
//               {/**READ ONLY FIELDS */}
//               <div
//                 className="read-only-section"
//                 style={{
//                   marginLeft: "20px",
//                   flex: 0.3,
//                   boxShadow: "1px 8px 25px -3px rgba(138,138,138,0.75)",
//                   borderRadius: "10px",
//                   padding: "4px",
//                   backgroundColor: "white",
//                 }}
//               >
//                 <div
//                   style={{
//                     height: "100%",
//                     // display: "grid",
//                     // placeItems: "center",
//                     paddingTop: "40px",
//                   }}
//                 >
//                   <div>
//                     <div
//                       style={{
//                         textAlign: "center",
//                       }}
//                     >
//                       <Label
//                         label="Account Balance"
//                         // color={themeState.headerColor}
//                         fontWeight={700}
//                         fontSize={24}
//                       />
//                     </div>
//                     <br />

//                     <InputField
//                       label={"Permitted Balance"}
//                       type="number"
//                       labelWidth={"70%"}
//                       inputWidth={"70%"}
//                       disabled={true}
//                       value={permittedBal}
//                     />
//                     <br />
//                     <InputField
//                       label={"Ledger Balance"}
//                       type="number"
//                       labelWidth={"70%"}
//                       inputWidth={"70%"}
//                       disabled={true}
//                       value={ledgerBal}
//                     />
//                     <br />

//                     <InputField
//                       label={"Available Balance"}
//                       type="number"
//                       labelWidth={"70%"}
//                       inputWidth={"70%"}
//                       disabled={true}
//                       value={availableBal}
//                     />
//                     <br />

//                     <InputField
//                       label={"Account Branch"}
//                       type="number"
//                       labelWidth={"70%"}
//                       inputWidth={"70%"}
//                       disabled={true}
//                       value={accountBranch}
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/*End of Right Section*/}
//             </div>
//           </div>
//           {/* <DataTable /> */}
//         </div>
//       </div>
//     </FullScreen>
//   );
// }

// export default CashDeposit;
