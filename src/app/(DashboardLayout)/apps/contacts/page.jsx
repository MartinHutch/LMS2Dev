import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import AppCard from "@/app/components/shared/AppCard";
import ContactApp from "@/app/components/apps/contacts/index";
import { ContactContextProvider } from '@/app/context/Conatactcontext/index'
const Contacts = () => {
  return (
    <ContactContextProvider>
      <PageContainer title="Contact" description="Contact List">
        <Breadcrumb title="Contacts" subtitle="Reach out and Connect" />
        <AppCard>
          <ContactApp />
        </AppCard>
      </PageContainer>
    </ContactContextProvider>
  );
};

export default Contacts;
