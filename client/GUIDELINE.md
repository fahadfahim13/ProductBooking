## Movie Hub

### Organize imports
Organize your imports as below:
- Remove unused imports
- The order of the imports should be
  - React module imports
  - Third party imports
  - Other module imports
- Use absolute path for importing modules. Relative imports are only allowed for files in same folder
```bash
import React from 'react';

import {Layout} from 'antd';

import Home from 'components/Home';

imports styles from './<component-name>.module.scss'
```

### Naming conventions
- Folder:
  - Folders containing last file should be in PascalCase. Otherwise camelCase.
- File:
  - Only JSX components and related style files should use PascalCase other wise camelCase

### Folder structure and purposes
```
/src
|- api
|- assets
|- components
|- pages
|- shared
|- styles
|- uicontainers
|- index.tsx
```
#### api
Should contain external api calls

#### assets
Should contain static files like images/icons

#### components
Should contain basic/custom/composite components

#### pages
Should contain different top level pages

### shared
Should contain any constants/helper functions that can be shared across the application.

### styles
Should contain global styles

### uicontainers
Should contain different business components

**Note: Each folder should contain only related files**
```
/src
|- components
|     |- Button
|     |     |-Button.module.scss
|     |     |-ActionButton.tsx
|     |     |-index.tsx
```