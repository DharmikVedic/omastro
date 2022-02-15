import React from "react";
import UserProfileForm from "../../components/form/userProfileForm";

export default function CallIntakForm() {
  return (
    <div className="max-w-6xl mx-auto  flex flex-col py-32 gap-12 items-center w-full">
      <h2>Call Intake Form</h2>
      <UserProfileForm />
    </div>
  );
}
