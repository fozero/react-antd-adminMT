module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --fix --plugin=simple-import-sort --rule=simple-import-sort/imports:error',
    'git add'
  ],
  '**/*.{json,md,mdx,css,html,yml,yaml,scss}': ['prettier --write', 'git add']
}
