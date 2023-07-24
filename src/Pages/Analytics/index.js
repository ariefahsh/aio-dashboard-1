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
        heading={"Selamat Datang Kembali!"}
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
          label="Estimasi Berat Hari Ini"
          value="3.02 kg"
          inverse={true}
        />
        <DataCard label="Kenaikan dari kemarin" percentageValue="2" />
        <DataCard label="Kenaikan dari hari pertama" percentageValue="40" />
      </Section>

      <Section>
        <Card
            heading="My Card"
            subHeading="Sub Heading"
        />

      </Section>

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
