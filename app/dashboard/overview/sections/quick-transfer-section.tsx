import { SendIcon } from "@/app/components/icons/send-icon";
import { OverviewSectionLayout } from "../components/overview-section-layout";
import RecipientList from "../components/recipient-list";
import TransferAction from "../components/transfer-action";

export function QuickTransferSection() {
  return (
    <OverviewSectionLayout title="Quick Transfer" className="col-span-3">
      <div className="xl:h-69 lg:h-[220px] h-[195px] rounded-[25px] bg-white flex flex-col justify-between xl:px-[25px] xl:py-[35px] lg:px-[15px] lg:py-[30px] px-[18px] py-[20px]">
        <RecipientList />
        <TransferAction />
      </div>
    </OverviewSectionLayout>
  );
}
