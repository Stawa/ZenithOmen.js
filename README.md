<h2 align="center">
    Zenith-Omen.js
</h2>

<h4 align="center">
    A user-friendly program that offers many random anime images with additional features.
</h4>

<p align="center">
    <a href="https://sonarcloud.io/project/overview?id=Stawa_ZenithOmen.js"><img src="https://sonarcloud.io/api/project_badges/measure?project=Stawa_ZenithOmen.js&metric=reliability_rating" alt="SonarCloud" /></a>
    <a href="https://www.npmjs.com/package/zenith-omen.js"><img src="https://img.shields.io/npm/dm/zenith-omen.js?logo=npm&label=Downloads&labelColor=black"></a>
    <a href="https://zenith-omen.vercel.app/api/v1"><img src="https://img.shields.io/website?down_color=critical&down_message=offline&style=flat&up_color=4CBB17&up_message=online&url=https://zenith-omen.vercel.app/api/v1&logo=express&label=Website&labelColor=black"></a>
    <a href="https://stawa.github.io/ZenithOmen.js/"><img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fstawa.github.io%2FZenithOmen.js%2F&up_message=available&up_color=1F51FF&down_color=critical&style=flat&logo=github&label=Documentation&labelColor=black">
    </a>
    <a href="https://www.typescriptlang.org/"><img src=https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white>
    </a>
</p>

<h3> <span class="emoji">📜</span> Table of Contents </h3>

1. <a href="#--project-installlation-"> <b>Project Installlation</b> </a>
2. <a href="#--project-examples-"> <b>Project Examples</b> </a>
3. <a href="#--links-related-"> <b>Links Related</b> </a>

<h4> <span class="emoji">📦</span> Project Installlation </h4>

<p> For our project, there are two installation options: the Stable version and the Development version. </p>

```bash
$ npm install zenith-omen.js@latest
$ npm install git+https://github.com/Stawa/ZenithOmen.js.git
```

<h4> <span class="emoji">📄</span> Project Examples </h4>

```ts
import { ZenithOmen } from "zenith-omen.js";

const client = new ZenithOmen();

async function example() {
  const bite = await client.bite();
  console.log(bite);
}

example();
```

<h4> <span class="emoji">🔗</span> Links Related </h4>

- **[Github Repository](https://github.com/Stawa/ZenithOmen.js)**
- **[Application Programming Interface](https://zenith-omen.vercel.app/api/v1/)**
- **[Documentation](https://stawa.github.io/ZenithOmen.js/)**
