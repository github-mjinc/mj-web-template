module.exports = {
  extends: ['stylelint-config-standard'],
  ignoreFiles: [
    // 外部ライブラリは「style/lib」を想定
    '**/lib/*.css',
    '**/noe_modules/**',
  ],
}
