# Bonaparte-ND

- [About](#about)
- [Basic Use](#basic-use)
- [To Look At](#to-look-at)
- [Included Bonaparte Components](#included-bonaparte-components)
- [Development](#development)

## About

Bonaparte-ND is a [Bonaparte](https://github.dowjones.net/bonaparte/bonaparte) build with a custom [Semantic UI](http://semantic-ui.com) theme developed for editorial tools at Dow Jones.

## To Look At

__Examples:__

[Kitchen-Sink](http://dowjones.github.io/bonaparte/examples/kitchen-sink.html)
<br>
[Toolbar](http://dowjones.github.io/bonaparte/examples/toolbar.html)


__Designs:__

[Bonaparte Styles](http://dowjones.github.io/bonaparte/designs/Bonaparte%20v0.2.pdf)
<br>
[Narrator](http://dowjones.github.io/bonaparte/designs/Narrator%20UI%20v0.1.pdf)
<br>
[Narrator (Toolbars)](http://dowjones.github.io/bonaparte/designs/Narrator%20UI%20v0.1%20-%20toolbars.pdf)
<br>
[Xavier](http://dowjones.github.io/bonaparte/designs/Xavier%20UI%20v0.2.pdf)


## Basic Use

- Download / Clone Repository.
- Include files: 

  ```
  ./dist/bonaparte-nd.css
  ./dist/bonaparte-nd.js
  ```
  
  And if necessary:
  ```
  ./dist/SUI-js/semantic.min.js
  ```
  
This makes bonaparte and the bonaparte Semantic UI theme available in your project.


## Included Bonaparte Components

  - [< bonaparte-button >](https://github.dowjones.net/bonaparte/bonaparte-button)
  - [< bonaparte-scroll >](https://github.dowjones.net/bonaparte/bonaparte-scroll)
  - [< bonaparte-sidebar >](https://github.dowjones.net/bonaparte/bonaparte-sidebar)
  - [< bonaparte-panel >](https://github.dowjones.net/bonaparte/bonaparte-panel)
  - [< bonaparte-toolbar >](https://github.dowjones.net/bonaparte/bonaparte-toolbar)
  - [< bonaparte-dragable >](https://github.dowjones.net/bonaparte/bonaparte-dragable)
  - [< bonaparte-dropdown >](https://github.dowjones.net/bonaparte/bonaparte-dropdown)

## Development

For development use the standard Bonaparte build process:

```
npm run build
```
or
```
npm run watch
```
To rebuild/watch `bonaparte.build.js`
