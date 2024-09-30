import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

export const revalidate = 1;

type Props = {
  children: React.ReactNode;
};

export default function NewsLayout({children}: Props) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}
