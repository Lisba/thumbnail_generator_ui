#!/usr/bin/env node

import { execSync } from 'child_process';

const PROTECTED_FILES = ['README.md'];

try {
  const against = execSync(
    'git rev-parse --verify HEAD >/dev/null 2>&1 && echo HEAD || echo 4b825dc642cb6eb9a060e54bf8d69288fbee4904'
  )
    .toString()
    .trim();

  const changedFilesPaths = execSync(`git diff --cached --name-only ${against}`)
    .toString()
    .trim()
    .split('\n');

  const protectedChanges = changedFilesPaths.filter((file) => PROTECTED_FILES.includes(file));

  if (protectedChanges.length > 0) {
    console.error(
      `🚫 This commit tries to modify these protected files: ${protectedChanges.join(', ')}`
    );
    process.exit(1);
  } else {
    console.log('✨ Prevent file modification script ran successfully!!');
    process.exit(0);
  }
} catch (error) {
  console.error('Error while running pre-commit script:', error.message);
  process.exit(1);
}
