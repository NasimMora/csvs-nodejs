import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const packageJSON = {
  getContent() {
    const packageJsonPath = path.resolve(__dirname, '../', '../', 'package.json');
    const packageJsonContent = JSON.parse(
      fs.readFileSync(packageJsonPath, 'utf-8'),
    );
    return packageJsonContent;
  },

  /**
   * Get package version.
   */
  get version() {
    const packageJsonContent = this.getContent();
    const { version } = packageJsonContent;
    return version || '0.0.0';
  },

  /**
   * Get package name.
   */
  get name() {
    const packageJsonContent = this.getContent();
    const { name } = packageJsonContent;
    return name || '';
  },
};
