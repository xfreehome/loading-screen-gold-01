# Loading Screen Gold

[![make.fun · u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/xfreehome/loading-screen-gold-01/rank.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/xfreehome/loading-screen-gold-01/reward.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

Entry for the [make.fun bounty "Loading Screen Gold: A Tip in 200 Characters"](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270) — a program that writes one line to `/output/entry.txt`.

## The tip

> Tip: the bar isn't stuck — your AI agent is re-reading your prompt for the fifth time, decoding what 'just make it work' means. It still doesn't know.

150 characters, one line. A loading-screen tip for stressed developers and AI coding agents: the spinner isn't broken, the agent is just stuck decoding the vaguest prompt in the codebase — and the punchline lands on both of them at once.

## Run

```sh
node main.ts
cat /output/entry.txt
```

`main.ts` (Node 22) validates the tip is 1–200 non-blank characters, then writes it to `/output/entry.txt`.
