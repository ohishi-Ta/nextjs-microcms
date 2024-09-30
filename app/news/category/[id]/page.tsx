import { getNewsCategory, getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Category from "@/app/_components/Category";
import { notFound } from "next/navigation";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Pagenation from "@/app/_components/Pagenation";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const category = await getNewsCategory(params.id).catch(notFound);
  const { contents: news,totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });
  return (
    <>
      <p>
        <Category category={category} />
        の一覧
      </p>
      <NewsList news={news} />
      <Pagenation totalCount={totalCount} basePath={`/news/category/${category.id}`} />
    </>
  );
}
