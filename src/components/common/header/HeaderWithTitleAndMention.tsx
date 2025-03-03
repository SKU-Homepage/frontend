interface HeaderWithTitleAndMentionProps {
  title: string;
  mention: string;
}

/**
 * title(제목), metion(한 줄 소개)
 * noticePage 사용
 */

const HeaderWithTitleAndMention = ({title, mention}: HeaderWithTitleAndMentionProps) => {
  return(
    <header className='w-full'>
      <div className="mb-6">
        <h1 className="text-xl text-[#143967] font-semibold">{title}</h1>
        <p className="text-xs text-[#75869B] font-normal mt-2.5">{mention}</p>
      </div>
    </header>
  );
}

export default HeaderWithTitleAndMention;