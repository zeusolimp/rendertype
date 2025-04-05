
import { TopBanner } from "@/src/components/landing/TopBanner";
import { HeaderLanding } from "@/src/components/landing/HeaderLanding";
import { PrincipalContent } from "@/src/components/landing/PrincipalContent";
import { SecundaryContect } from "@/src/components/landing/SecundaryContect";
import { BarPlus } from "@/src/components/landing/BarPlus";


const LandingPage = () => {
  return (
    <>
      <div className="bg-[#17494c]">
        <TopBanner />
        <BarPlus />
        <HeaderLanding />
        <PrincipalContent />
      </div>
      <div>
      <SecundaryContect />
      </div>
    </>
  );
}

export default LandingPage;