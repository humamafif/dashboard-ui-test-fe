import { SendIcon } from "@/app/components/icons/send-icon";
import { OverviewSectionLayout } from "../components/overview-section-layout";
import RecipientList from "../components/recipient-list";
import TransferAction from "../components/transfer-action";

export function QuickTransferSection() {
  return (
    <OverviewSectionLayout title="Quick Transfer" className="col-span-2">
      <div className="h-69 rounded-[25px] bg-white flex flex-col justify-between px-[25px] py-[35px]">
        <RecipientList />
        <TransferAction />
      </div>
    </OverviewSectionLayout>
  );
}
