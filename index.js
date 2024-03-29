const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=F70202&random=false&width=435&lines=Welcome+to+Dexter's+Github)](https://git.io/typing-svg)

### Hi there 👋
⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
---
⏰ Updated on ${new Date().toUTCString()}
---


![](https://raw.githubusercontent.com/DexterZzz1010/DexterZzz1010/main/assets/github-contribution-grid-snake.svg)



[![Ashutosh's github activity graph](https://github-readme-activity-graph.vercel.app/graph?username=DexterZzz1010&theme=react)](https://github.com/ashutosh00710/github-readme-activity-graph)



<div align=""> <img src=https://github-readme-stats.vercel.app/api/top-langs/?username=DexterZzz1010&theme=radical&show_icons=true><img src="https://github.com/heartyang520/HeartYang.github.io/blob/main/share/hacker_a.gif?raw=true.gif" width="40%">

<picture>
  <source
    srcset="https://github-readme-stats.vercel.app/api?username=DexterZzz1010&show_icons=true&theme=dark"
    media="(prefers-color-scheme: dark)"
  />
  <source
    srcset="https://github-readme-stats.vercel.app/api?username=DexterZzz1010&show_icons=true"
    media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
  />
  <img src="https://github-readme-stats.vercel.app/api?username=DexterZzz1010&show_icons=true" />
</picture>


![Progress Bar CI](https://github.com/DexterZzz1010/DexterZzz1010/workflows/Progress%20Bar%20CI/badge.svg)\
`

console.log(readme)
