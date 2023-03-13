import React from "react";
import InputField from "../CashDeposit/components/fields/InputField";
import ButtonComponent from "../CashDeposit/components/button/ButtonComponent";
import SelectField from "../CashDeposit/components/fields/SelectField";
import ListOfValue from "../CashDeposit/components/fields/ListOfValue";
import DataTable from "../CashDeposit/components/data-table/DataTable";
import { Tabs } from "@mantine/core";
import HeaderComponent from "../CashDeposit/components/header/HeaderComponent";

function LoanEnquiry() {
  return (
    <div>
      {/*Main left and right*/}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/*Left Section*/}
        <div className="" style={{ flex: 0.5 }}>
          {/*Heading*/}
          <HeaderComponent title="Loan Details" />
          {/*Main Body for the Left Section*/}
          <div
            style={{
              padding: "10px",
              height: "410px",
              borderRadius: "10px",
              boxShadow:
                "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
            }}
          >
            <InputField inputWidth={"100%"} disabled />

            <div style={{ display: "flex" }}>
              <div style={{ flex: 0.5 }}>
                <InputField
                  label={"Customer No:"}
                  labelWidth={"60%"}
                  inputWidth={"100%"}
                />
              </div>

              <div style={{ flex: 0.5 }}>
                <InputField
                  label={"Prod Desc:"}
                  labelWidth={"60%"}
                  inputWidth={"100%"}
                />
              </div>
            </div>

            <InputField
              label={"Address:"}
              labelWidth={"22%"}
              inputWidth={"100%"}
            />

            <div style={{ display: "flex" }}>
              <div style={{ flex: 0.5 }}>
                <InputField
                  label={"Email:"}
                  labelWidth={"60%"}
                  inputWidth={"100%"}
                />
              </div>

              <div
                style={{
                  flex: 0.5,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div></div>
                <ButtonComponent
                  label={"Send Email"}
                  buttonHeight={"30px"}
                  buttonWidth={"200px"}
                  buttonColor={"white"}
                  buttonBackgroundColor="rgb(21 163 183)"
                />
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ flex: 0.5 }}>
                <InputField
                  label={"Phone:"}
                  labelWidth={"60%"}
                  inputWidth={"100%"}
                />
              </div>

              <div
                style={{
                  flex: 0.5,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div></div>
                <ButtonComponent
                  label={"Send SMS"}
                  buttonHeight={"30px"}
                  buttonWidth={"200px"}
                  buttonColor={"white"}
                  buttonBackgroundColor="rgb(21 163 183)"
                />
              </div>
            </div>

            <hr style={{ color: "black" }} />

            <div style={{ display: "flex" }}>
              <div style={{ flex: 0.5 }}>
                <InputField
                  label={"Classification:"}
                  labelWidth={"60%"}
                  inputWidth={"100%"}
                />
              </div>

              <div style={{ flex: 0.5 }}>
                <InputField
                  label={"Sector:"}
                  labelWidth={"60%"}
                  inputWidth={"100%"}
                />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div></div>

              <div>
                <ButtonComponent
                  label={"View All Loans"}
                  buttonHeight={"30px"}
                  buttonWidth={"200px"}
                  buttonColor={"white"}
                  buttonBackgroundColor="rgb(21 163 183)"
                />
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 0.025 }}></div>

        {/**Right Section*/}
        <div
          className=""
          style={{
            padding: "5px",
            flex: 0.5,
          }}
        >
          <div>
            <HeaderComponent title="Label" />
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div></div>
              <div>
                <InputField
                  label={"Principal Balance"}
                  labelWidth={"100%"}
                  inputWidth={"100%"}
                  disabled
                  placeholder={".00"}
                />
              </div>
            </div>

            <HeaderComponent title="Arrears" />
            <div
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
                padding: "5px",
              }}
            >
              {/*Main Body for the Left Section*/}

              <div style={{ display: "flex" }}>
                <div style={{ flex: 0.5 }}>
                  <InputField
                    label={"Principal:"}
                    labelWidth={"60%"}
                    inputWidth={"100%"}
                    placeholder={".00"}
                    disabled
                  />
                </div>
                <div style={{ flex: 0.5 }}>
                  <InputField
                    label={"Interest:"}
                    labelWidth={"60%"}
                    inputWidth={"100%"}
                    disabled
                    placeholder={".00"}
                  />
                </div>
              </div>
            </div>

            <div>
              <HeaderComponent title={"Interest"} />
            </div>
            <div
              style={{
                padding: "5px",
                borderRadius: "10px",
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
              }}
            >
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    flex: 0.5,
                    fontWeight: "800",
                    textAlign: "right",
                    margin: "10px",
                  }}
                >
                  Income
                </div>
                <div
                  style={{
                    flex: 0.5,
                    textAlign: "right",
                    margin: "10px",
                    fontWeight: "800",
                  }}
                >
                  Suspense
                </div>
              </div>

              <div style={{ display: "flex" }}>
                <div style={{ flex: 0.5 }}>
                  <ListOfValue
                    label={"Accrued:"}
                    labelWidth={"60%"}
                    inputWidth={"100%"}
                    // lovData={["i", "a"]}
                  />
                </div>

                <div style={{ flex: 0.5 }}>
                  <ListOfValue
                    labelWidth={"60%"}
                    inputWidth={"100%"}
                    // lovData={["i", "a"]}
                  />
                </div>
              </div>

              <div style={{ display: "flex" }}>
                <div style={{ flex: 0.5 }}>
                  <ListOfValue
                    label={"Penal:"}
                    labelWidth={"60%"}
                    inputWidth={"100%"}
                    // lovData={["i", "a"]}
                  />
                </div>

                <div style={{ flex: 0.5 }}>
                  <ListOfValue
                    labelWidth={"60%"}
                    inputWidth={"100%"}
                    // lovData={["i", "a"]}
                  />
                </div>
              </div>

              <div style={{ display: "flex" }}>
                <div style={{ flex: 0.5 }}>
                  <ListOfValue
                    label={"Arrears:"}
                    labelWidth={"60%"}
                    inputWidth={"100%"}
                    // lovData={["i", "a"]}
                  />
                </div>

                <div style={{ flex: 0.5 }}>
                  <ListOfValue
                    labelWidth={"60%"}
                    inputWidth={"100%"}
                    // lovData={["i", "a"]}
                  />
                </div>
              </div>

              <InputField
                label={"Total Facility Balance:"}
                labelWidth={"60%"}
                inputWidth={"100%"}
                disabled
                placeholder={".00"}
              />
            </div>
          </div>
        </div>
      </div>
      {/*End of Main Left and Right*/}

      <hr />

      <div>
        <DataTable
          title={""}
          columns={[
            "Facility No",
            "Facility A/C",
            "Repayment A/C",
            "Disb. Date",
            "Expiry Date",
            "Currency",
            "Loan Officer",
            "Amount Granted",
            "Int. Rate",
            "Status",
          ]}
        />
      </div>
      <hr />

      <div style={{ textAlign: "center" }}>
        <div>
          <ButtonComponent
            label={"Print Loan Schedule"}
            buttonHeight={"30px"}
            buttonWidth={"200px"}
            buttonColor={"white"}
            buttonBackgroundColor="rgb(21 163 183)"
          />
          <ButtonComponent
            label={"Print Repayments"}
            buttonHeight={"30px"}
            buttonWidth={"200px"}
            buttonColor={"white"}
            buttonBackgroundColor="rgb(21 163 183)"
          />
          <ButtonComponent
            label={"Loan Rescheduling"}
            buttonHeight={"30px"}
            buttonWidth={"200px"}
            buttonColor={"white"}
            buttonBackgroundColor="rgb(21 163 183)"
          />
          <ButtonComponent
            label={"Charges statements"}
            buttonHeight={"30px"}
            buttonWidth={"200px"}
            buttonColor={"white"}
            buttonBackgroundColor="rgb(21 163 183)"
          />
          <ButtonComponent
            label={"Print Statements (Hist)"}
            buttonHeight={"30px"}
            buttonWidth={"200px"}
            buttonColor={"white"}
            buttonBackgroundColor="rgb(21 163 183)"
          />
          <ButtonComponent
            label={"Return"}
            buttonHeight={"30px"}
            buttonWidth={"200px"}
            buttonColor={"white"}
            buttonBackgroundColor="rgb(21 163 183)"
          />
        </div>
      </div>

      <hr />

      <div>
        <Tabs defaultValue="gallery" variant="outline">
          <Tabs.List>
            <Tabs.Tab value="gallery">Schedule / Repayment</Tabs.Tab>
            <Tabs.Tab value="messages">Loan Terms</Tabs.Tab>
            <Tabs.Tab value="settings">Financials</Tabs.Tab>
            <Tabs.Tab value="settings">Guarantor</Tabs.Tab>
            <Tabs.Tab value="settings">Collateral</Tabs.Tab>
            <Tabs.Tab value="settings">Documents</Tabs.Tab>
            <Tabs.Tab value="settings" disabled>
              Score
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery" pt="xs">
            <div>
              <DataTable
                columns={[
                  "Seq No",
                  "Date Due",
                  "Principal",
                  "Interest",
                  "Total Installment",
                  "Principal Paid",
                  "Interest Paid",
                  "Pri. Repay Date",
                  "Int. Repay Date",
                ]}
              />
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
              <div>
                <ButtonComponent
                  label={"Loan Payment"}
                  buttonHeight={"30px"}
                  buttonWidth={"200px"}
                  buttonColor={"white"}
                  buttonBackgroundColor="rgb(21 163 183)"
                />
                <ButtonComponent
                  label={"Loan Cancellation"}
                  buttonHeight={"30px"}
                  buttonWidth={"200px"}
                  buttonColor={"white"}
                  buttonBackgroundColor="rgb(21 163 183)"
                />
                <ButtonComponent
                  label={"Loan Write-Off"}
                  buttonHeight={"30px"}
                  buttonWidth={"200px"}
                  buttonColor={"white"}
                  buttonBackgroundColor="rgb(21 163 183)"
                />
                <ButtonComponent
                  label={"Loan Reclassification"}
                  buttonHeight={"30px"}
                  buttonWidth={"200px"}
                  buttonColor={"white"}
                  buttonBackgroundColor="rgb(21 163 183)"
                />
                <ButtonComponent
                  label={"Loan Amendment"}
                  buttonHeight={"30px"}
                  buttonWidth={"200px"}
                  buttonColor={"white"}
                  buttonBackgroundColor="rgb(21 163 183)"
                />
              </div>
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}

export default LoanEnquiry;
