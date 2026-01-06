"use client";
import { useState } from "react";
import TabBar from "./tab-bar";
import ProfileForm from "./profile-form";

const SettingSection = () => {
  const [activeTab, setActiveTab] = useState("Edit Profile");

  return (
    <div className="w-full">
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "Edit Profile" ? (
        <ProfileForm />
      ) : (
        <div className="py-20 text-center text-slate-400">
          Konten untuk {activeTab} belum tersedia.
        </div>
      )}
    </div>
  );
};

export default SettingSection;
