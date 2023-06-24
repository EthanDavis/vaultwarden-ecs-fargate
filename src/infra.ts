import * as cdk from 'aws-cdk-lib'

import VaultwardenStack from '@/stacks/vaultwarden/vaultwarden'

// :: ---

const app = new cdk.App()
cdk.Tags.of(app).add('Application', 'vaultwarden')
cdk.Tags.of(app).add('VantaOwner', 'edavis@tigrisconsulting.cloud')
new VaultwardenStack(app, 'vaultwarden-stack')
