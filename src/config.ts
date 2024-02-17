import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from './types';

const subsConfig: RawSubscription = {
  id: 233,
  version: 0,
  name: '甘霖的GKD订阅',
  author: 'ganlinte',
  supportUri: 'https://github.com/ganlinte/gkd-subscription',
  updateUrl:
    'https://raw.githubusercontent.com/ganlinte/gkd-subscription/main/dist/ganlin_gkd.json5',
  checkUpdateUrl:
    'https://raw.githubusercontent.com/ganlinte/gkd-subscription/main/dist/gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
