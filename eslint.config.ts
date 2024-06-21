// ref: https://stackoverflow.com/a/78162279/8335317
/// <reference types="@antfu/eslint-config" />

import janna from '@jannajs/lint/eslint'

export default janna({
  ignores: ['dist'],
})
