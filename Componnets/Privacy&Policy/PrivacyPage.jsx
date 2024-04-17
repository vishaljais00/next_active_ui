import React from "react";
import PrivacyNav from "./PrivacyNav";
import MainSection from "./MainSection";
import PrivacyFooter from "./PrivacyFooter";

function PrivacyPage() {
  return (
    <div>
      {/* -------------------Navbar--------------------------- */}
      <PrivacyNav />

      {/* -------------------MainPart--------------------------- */}
      <MainSection />

      {/* -----------------------Footer----------------------------- */}

      <PrivacyFooter />
    </div>
  );
}

export default PrivacyPage;
