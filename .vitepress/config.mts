import { existsSync, readdirSync } from 'node:fs'
import { basename, extname, join } from 'node:path'
import { defineConfig } from 'vitepress'

const classDir = join(process.cwd(), 'class')

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

export default defineConfig({
  title: 'QA Study',
  description: '인프런 QA 강의 기반 실무 QA 학습 노트',
  lang: 'ko-KR',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['README.md', 'AGENTS.md'],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '홈', link: '/' },
      { text: '강의 노트', link: '/class/1. 실무 QA의 하루 흐름 파악하기' },
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
      '/appendix/': [
        {
          text: '부록',
          items: [{ text: 'QA 영어 기초 표현 정리', link: '/appendix/qa-english-basics' }],
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
