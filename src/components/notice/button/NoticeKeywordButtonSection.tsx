import NoticeKeywordButton from "./NoticeKeywordButton";

const NoticeKeywordButtonSection = () => {
  return (
    <section className="px-6">
      <NoticeKeywordButton keyword="장학" />
      <NoticeKeywordButton keyword="계절학기" />
      <NoticeKeywordButton keyword="졸업요건" />
    </section>
  );
};

export default NoticeKeywordButtonSection;
