import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";

import PageContainer from "@/app/components/container/PageContainer";
import AppCard from "@/app/components/shared/AppCard";
import Image from "next/image";
import EmailsApp from "@/app/components/apps/email";
import { EmailContextProvider } from '@/app/context/EmailContext/index'
const Email = () => {
  return (
    <EmailContextProvider>
      <PageContainer title="Notifications" description="Notifications">
        <Breadcrumb title="Your Notifications" subtitle="Review Your Inbox">
          <Image
            src="/images/breadcrumb/chatbc.png"
            alt={"emailIcon"}
            width={195}
            height={195}
          />
        </Breadcrumb>

        <AppCard>
          <EmailsApp />
        </AppCard>
      </PageContainer>
    </EmailContextProvider>
  );
};

export default Email;
