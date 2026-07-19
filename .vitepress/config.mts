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
  description: '인프런 QA 강의 정리 노트',
  lang: 'ko-KR',
  cleanUrls: true,
  srcExclude: ['README.md', 'AGENTS.md'],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '홈', link: '/' },
      { text: '강의 노트', link: '/class/1. 실무 QA의 하루 흐름 파악하기' },
      { text: '작성 규칙', link: '/guide' },
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
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/3suji3/QA_study_inflearn' },
    ],
  },
})
