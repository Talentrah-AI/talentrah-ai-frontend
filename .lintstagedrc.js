module.exports = {
  '*.{js,jsx,ts,tsx}': (files) => {
    // Filter out config files
    const filteredFiles = files.filter(
      (file) =>
        !file.includes('.config.') &&
        !file.endsWith('rc.js') &&
        !file.endsWith('rc.ts')
    );

    if (filteredFiles.length === 0) return [];
    
    return [
      `eslint --fix ${filteredFiles.join(' ')}`,
      `prettier --write ${filteredFiles.join(' ')}`,
    ];
  },
  '*.json': (files) => {
    // Exclude package.json from being formatted
    const filteredFiles = files.filter(
      (file) => !file.includes('package.json')
    );
    return filteredFiles.length > 0
      ? [`prettier --write ${filteredFiles.join(' ')}`]
      : [];
  },
};
