# online-shopping-system
A simple online shopping system built using fluent-svelte.
This project was made to practice common software engineering practices such as requirements engineering and architecure design.

#### [Website Demo](https://fluent-shop.netlify.app/)

## Table of Contents  

### Project Code
[/Code](/Code)

### Project Design
[/Design](/Design)
  - Class Diagram
    - [Conceptual Model](/Design/Class%20model.pdf)
    - [Conceptual Model 2](/Design/Conceptual%20Model2.jpg)
  - Sequence Diagrams
    - [Shopping Cart](/Design/SequenceDiagram.jpg)
    - [Class Based](/Design/Sequence%20Diagram%20Final1.jpg)
  - State Diagram
    - [Online Shopping Site](/Design/StateDiagram.jpg)
  - Design Report
    - [Design Report](/Design/Design%20Review%20Report.pdf)

### Project Requirements
[/Requirements](/Requirements)
  - Requirements
    - [Tabular list of Requirements & Description](/Requirements/Tabular%20List%20of%20Requirements.pdf)
  - Requirements Report
    - [Requirements Report](/Requirements/Requirement%20Report.pdf)

### Project Use Cases
[/Use Cases](/Use%20Cases)
  - Use Case Diagram
    - [Diagram](/Use%20Cases/Requirement%20Diagram%20and%20Use%20Case1.jpg)
  - Use Case Descriptions
    - [Descriptions](/Use%20Cases/Use%20Case%20Description.pdf)

### Project Test Cases
[/Test Cases](/Test%20Case)
  - Acceptance Tests
      - [Acceptance Test](/Test%20Case/Acceptance%20tests.pdf)
  - Unit Tests
      - [Unit Test](/Test%20Case/unit)
  - Integration Tests
      - [Integration Test](/Test%20Case/integration)

### Traceability Matrix
[/Traceability Matrix](/Traceability%20Matrix)
  - Traceability Matrix
    - [Traceability Matrix](/Traceability%20Matrix/Traceability%20Matrix.pdf)

### Team Assesment Report
[/Team Assessment Report](/Team%20Assessment%20Report)
  - Team Assessment Report
    - [Report](/Team%20Assessment%20Report/Team%20Assesment%20Report.pdf)

### Building & Testing

> **(Optional)** You can use [Gitpod](https://gitpod.io) to build the project in an online environment,
> [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Winter22SOFE2720/online-shopping-system)
> If you use `Gitpod` then you can skip [#setting-up-environment](#setting-up-environment), and go right into [#building](#building) and [#testing](#testing).

#### Setting up Environment
You need to install [nodejs](https://nodejs.org/en/). 
You then need to type in these commands to your terminal,
```bash
npm i pnpm -g && pnpm i
```

#### Building
The website uses [astro](https://astro.build), [tailwindcss](https://tailwindcss.com/), [sass](https://sass-lang.com/), [svelte](https://svelte.dev/), [fluent-svelte](https://fluent-svelte.vercel.app/), and [typescript](https://www.typescriptlang.org/). 

For building in development mode you need to run,
```bash
pnpm dev
```

For a fully built production site,
```bash
pnpm build
```

To preview the production site,
```bash
pnpm preview
```

Altogether,
```bash
pnpm build && pnpm preview
```

#### Testing
For testing, the project uses [vitest](https://vitest.dev/) as it is very fast and has native [typescript](https://www.typescriptlang.org/) support.

To test the project continously,
```bash
pnpm test
```
To test the project once,
```bash
pnpm test:run
```

Tests are stored in [/Test Cases](/Test%20Case).
