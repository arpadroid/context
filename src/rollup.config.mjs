import { getBuild } from '@arpadroid/module';
const { build = {} } = getBuild('context') || {};
export default build;
