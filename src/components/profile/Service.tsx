import P from "@/components/profile";

const Service = () => {
  return (
    <P.ServiceSection>
      <P.WidgetSection />
      <P.ServiceHeader />
      <P.ServiceWrapper>
        <P.Service />
        <P.Service />
        <P.Service />
        <P.Service />
        <P.Service />
      </P.ServiceWrapper>
    </P.ServiceSection>
  );
};

export default Service;
