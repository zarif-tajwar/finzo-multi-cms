import { Paragraph, SecondHeading, Section, ThirdHeading } from "../common";
import { LineChartIcon, MobileIcon, MoneySendIcon } from "../icons";

const Features = () => {
  return (
    <Section>
      <SecondHeading>Feel the best experince with our features</SecondHeading>
      <div className="grid grid-cols-2 gap-6">
        <FeatureCardInfo
          heading="Custom and design your card, make it look unique"
          description="Create a custom card that reflects your uinque style and personality.
        Choose from a range of colors, patterns, and designs to customize the
        look of your card."
          Icon={MobileIcon}
        />
        <FeatureCardInfo
          heading="Personalized your Financial insights and goals"
          description="Track your sending patterns,analyze income or expenses easily, and recieve personalized recommendations to optimize your financial habits."
          Icon={LineChartIcon}
        />
        <FeatureCardInfo
          heading="Free Transfer anywhere around the world"
          description="Create a custom card that reflects your uinque style and personality. Choose from a range of colors, patterns, and designs to customize the look of your card."
          Icon={MoneySendIcon}
        />
      </div>
    </Section>
  );
};
export default Features;

const FeatureCardInfo = ({
  heading,
  description,
  Icon,
}: {
  heading: string;
  description?: string;
  Icon: typeof MobileIcon;
}) => {
  return (
    <div className="rounded-4xl bg-offwhite p-11">
      <div className="mb-12 flex size-16 items-center justify-center rounded-full bg-primary">
        <Icon className="size-9" />
      </div>
      <ThirdHeading>{heading}</ThirdHeading>
      {description && <Paragraph className="pt-5">{description}</Paragraph>}
    </div>
  );
};
