import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from './types';

const subsConfig: RawSubscription = {
  id: 233,
  version: 0,
  name: '甘霖的GKD订阅',
  author: 'ganlinte',
  supportUri: 'https://github.com/ganlinte/GKD-subscription',
  updateUrl:
    'https://registry.npmmirror.com/@ganlinte/gkd-subscription/latest/files',
  checkUpdateUrl:
    'https://registry.npmmirror.com/@ganlinte/gkd-subscription/latest/files/dist/gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
