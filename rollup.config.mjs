import { getBuild } from '@arpadroid/module/src/rollup/builds/rollup-builds.mjs';
const { build } = getBuild('context', 'library');
export default build;
