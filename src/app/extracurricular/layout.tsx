import { ReactNode } from 'react';

import { HeaderWithBackButton, HeaderWithTitleAndMentionAndNav } from '@/components/common';


export default function ExtraCurricularLayout({children}: {children: ReactNode}) {
  return(
    <div className='min-height: 100vh'>
      <HeaderWithBackButton />
      <HeaderWithTitleAndMentionAndNav title='비교과 프로그램' mention='전체 학사 일정과 개인 일정을 추가하여 한 눈에 정리할 수 있어요' pathList={[
        {
          path: '/extracurricular',
          pathName: '전체'
        },
        {
          path: '/extracurricular/career-employment',
          pathName: '진로취업'
        },
        {
          path: '/extracurricular/education-career',
          pathName: '교수학습'
        },
        {
          path: '/extracurricular/uni-innovation',
          pathName: '대학혁신'
        },
      ]}/>
      {children}
    </div>
  );
}