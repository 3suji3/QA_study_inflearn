import { existsSync, readdirSync } from 'node:fs'
import { basename, extname, join } from 'node:path'
import { defineConfig } from 'vitepress'

const classDir = join(process.cwd(), 'class')
const bonusDir = join(process.cwd(), 'bonus')

function titleFromFile(fileName: string) {
  return basename(fileName, extname(fileName)).replace(/^\d+\.\s*/, '')
}

function classSidebarItems() {
  if (!existsSync(classDir)) return []

  return readdirSync(classDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .sort((a, b) => a.name.localeCompare(b.name, 'ko-KR', { numeric: true }))
    .map((entry) => {
      const slug = entry.name.replace(/\.md$/, '')

      return {
        text: titleFromFile(entry.name),
        link: `/class/${slug}`,
      }
    })
}

function bonusSidebarItems() {
  if (!existsSync(bonusDir)) return []

  const order = [
    'qa-practical-knowledge.md',
    'test-types-and-strategy.md',
    'defect-and-release.md',
    'test-environment-and-data.md',
  ]

  return readdirSync(bonusDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .sort((a, b) => {
      const aOrder = order.indexOf(a.name)
      const bOrder = order.indexOf(b.name)
      const safeAOrder = aOrder === -1 ? Number.MAX_SAFE_INTEGER : aOrder
      const safeBOrder = bOrder === -1 ? Number.MAX_SAFE_INTEGER : bOrder

      return safeAOrder - safeBOrder || a.name.localeCompare(b.name)
    })
    .map((entry) => {
      const slug = entry.name.replace(/\.md$/, '')
      const titles: Record<string, string> = {
        'qa-practical-knowledge': '실무 QA 보너스 지식 지도',
        'test-types-and-strategy': '테스트 종류와 전략',
        'defect-and-release': '결함 관리와 릴리즈 판단',
        'test-environment-and-data': '테스트 환경과 데이터 관리',
      }

      return {
        text: titles[slug] ?? titleFromFile(entry.name),
        link: `/bonus/${slug}`,
      }
    })
}

export default defineConfig({
  title: 'QA Study',
  description: '실무 QA를 구조적으로 익히는 학습 노트',
  lang: 'ko-KR',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['README.md', 'AGENTS.md'],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '홈', link: '/' },
      { text: '강의 노트', link: '/class/1. 실무 QA의 하루 흐름 파악하기' },
      { text: '보너스 지식', link: '/bonus/qa-practical-knowledge' },
      { text: 'QA 영어', link: '/appendix/qa-english-basics' },
      { text: '작성 규칙', link: '/guide' },
      { text: '배포 사이트', link: 'https://qa-study-inflearn.vercel.app/' },
    ],
    sidebar: {
      '/class/': [
        {
          text: '강의 노트',
          items: classSidebarItems(),
        },
      ],
      '/guide': [
        {
          text: '가이드',
          items: [{ text: '작성 규칙', link: '/guide' }],
        },
      ],
      '/bonus/': [
        {
          text: '보너스 지식',
          items: bonusSidebarItems(),
        },
      ],
      '/appendix/': [
        {
          text: 'QA 영어',
          items: [
            { text: 'QA 영어 기초 로드맵', link: '/appendix/qa-english-basics' },
            { text: 'QA 기본 용어', link: '/appendix/qa-english-terms' },
            { text: '테스트 케이스 영어', link: '/appendix/qa-english-test-cases' },
            { text: '버그 리포트 영어', link: '/appendix/qa-english-bug-reports' },
            { text: '협업 영어 표현', link: '/appendix/qa-english-collaboration' },
          ],
        },
      ],
    },
    search: {
      provider: 'local',
    },
    outline: {
      label: '목차',
      level: [2, 3],
    },
    docFooter: {
      prev: '이전 글',
      next: '다음 글',
    },
    lastUpdated: {
      text: '마지막 수정',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/3suji3/QA_study_inflearn' },
    ],
  },
})
