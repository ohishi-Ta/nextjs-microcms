import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Pagenation from "@/app/_components/Pagenation";
import SearchField from "../_components/SearchField";

export const revalidate = 1;

export default async function page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagenation totalCount={totalCount} />
    </>
  );
}
