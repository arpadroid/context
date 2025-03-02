import { getBuild } from '@arpadroid/module';
const { build = {} } = getBuild('context', 'library') || {};
export default build;
