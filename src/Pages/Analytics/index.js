import ActionButton from "@aio/components/ActionButton";
import DataCard from "@aio/components/DataCard";
import HeaderSection from "@aio/components/HeaderSection";
import Section from "@aio/components/Section";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Modal from "@aio/components/Modal";
import { useState } from "react";
import Input from "@aio/components/Input";
import Card from "@aio/components/Input";
import BarChartExample from "src/components/BarChartExample";
import BillingHistory from "src/components/BillingHistory";

const Analytics = (props) => {
  const { newUserModal, setNewUserModal } = useState(false);
  return (
    <>
      <HeaderSection
        heading={"Analytics"}
        subHeading={"Welcome to Analytics"}
        rightItem={() => (
          <ActionButton
            onClick={() => setNewUserModal(true)}
            Icon={AiOutlinePlusCircle}
            label="Add New User"
          />
        )}
      />
      <Section>
        <DataCard
          label="My Data"
          value="2324232"
          percentageValue="30"
          inverse={true}
        />
        <DataCard label="My Data 2" value="2324232" percentageValue="30" />
        <DataCard label="My Data 3" value="2324232" percentageValue="30" />
      </Section>

      <Section>
        <Card
            heading="My Card"
            subHeading="Sub Heading"
        />

      </Section>
    
      <BillingHistory />

      <Modal
        isOpen={newUserModal}
        onClose={() => setNewUserModal(false)}
        heading="My Modal"
        positiveText="Save"
        negativeText="Cancel"
        onSubmit={() => {
          alert('You can submit');
          setNewUserModal(false);
        }}
      >
        <Input
          inputContainerStyle={{ padding: "15px 30px" }}
          type="text"
          placeholder="Email"
          onChange={(e) => console.log(e)}
          name="email"
          label={"Email"}
        />
      </Modal>
    </>
  );
};

export default Analytics;
