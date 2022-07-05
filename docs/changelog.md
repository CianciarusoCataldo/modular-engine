# Modular-engine changelog

## Versions

- [4.0.0](#400)
- [3.1.0](#310)
- [3.0.0](#300)
- [2.3.1](#231)
- [2.3.0](#230)
- [2.2.2](#222)
- [2.2.1](#221)
- [2.2.0](#220)
- [2.1.0](#210)
- [2.0.0](#200)
- [1.5.0](#150)
- [1.4.0](#140)
- [1.3.0](#130)
- [1.2.0](#120)
- [1.1.0](#110)
- [1.0.0](#100)
- [0.5.0](#050)
- [0.4.0](#040)
- [0.3.0](#030)
- [0.2.0](#020)
- [0.1.0](#010)

<br>

---

## Changes

<br>

### 4.0.0

- Modular-ui integration plugin
- Every feature as a plugin
- New optional `theme` field to customize Modular-ui parameters
- New optional `ui` field to customize ui plugin parameters
- New optional `urlChecker` field to customize urlChecker plugin parameters
- Huge cleanup

<br>

### 3.1.0

- Support for query parameters, to control the app with the url query parameters
- Custom query parameters and triggered actions, with `queryParameters` field, parsed after store init
- Better tests
- Refactoring
- Some code splitting
- Cleanup
- Plugins support

<br>

### 3.0.0

- Fully re-designed system
- `customize` redux config field, to fully customize every internal reducer and global state
- Huge cleanup
- Several bug fixes
- Less config parameters
- Better routing system
- Improved performance
- Dedicated `localization` reducer to manage i18next parameters, like current language
- New config field, `features`, to easily enable/disable every feature (supports ui, modal and localization)

<br>

### 2.3.1

- Some i18n init fixes

<br>

### 2.3.0

- New `titles` option, to enable/disable the page titles management system
- Some fixes
- Refactoring
- i18n improvements

<br>

### 2.2.2

- Better docs
- Refactoring

<br>

### 2.2.1

- CI pipelines setup
- Better tests
- Clean up

<br>

### 2.2.0

- Custom initial darkMode status, through engine.config.js

<br>

### 2.1.0

- Custom callback support (`middleware` parameter inside `redux` field), called every dispatched action, through middleware

<br>

### 2.0.0

- Config file structure standardized, like the engine.config.js file, with epics, reducers and preload
- Types definition fix
- Clean up

<br>

### 1.5.0

- Config type definition redefined

<br>

### 1.4.0

- Dark mode epic
- `setDarkMode` action instead of `switchDarkMode`

<br>

### 1.3.0

- Refactoring
- `driveWithDarkMode` helper

<br>

### 1.2.0

- Clean up
- Refactoring

<br>

### 1.1.0

- New actions
- Internal reducers
- New epics

<br>

### 1.0.0

- Redux improvements
- Re-designed `config` file
- `modal` and `ui` features can be disabled entirely
- Better testing system
- Improved performance
- Bugfixes
- Central routing system
- Dependencies updated

<br>

### 0.5.0

- Improved localization system
- cleanup
- CI setup

<br>

### 0.4.0

- Bugfixes
- Dependencies updated
- Cleanup
- Refactoring

<br>

### 0.3.0

- Cleanup
- Improved speed
- New docs
- Better unit tests

<br>

### 0.2.0

- More config options
- i18n enhancements
- Refactoring

<br>

### 0.1.0

- Lib setup
- Basic reducers
- Initial config file
- Testing system
