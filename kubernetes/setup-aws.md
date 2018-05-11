# Setup AWS

## IAM

- Open [IAM AWS Console](https://console.aws.amazon.com/iam/home?region=eu-central-1#/users)
- Press the `Add user` button
- Enter username `kops`
- Choose the `Access type` - `Programmatic access`
- Press `Next:Premissions` button
- Press `Next:Review` button
- Press `Create user` button
- Copy the `Access key ID` and `Secret access key`
- Press `Close` button
- Choose the `kops` user
- Press `Add permissions` button
- Choose `Attach existing policies directly`
- Choose only the `Administrator access`
- Press `Next:Review` button
- Press `Add permissions` button

## S3

- Open [S3 AWS Console](https://s3.console.aws.amazon.com/s3/home?region=eu-central-1)
- Press `Create bucket` button
- Enter bucket name `kops-state-<project_name_or_whatever_unique>` (e.g. `kops-state-r4nd0m`)

## Route53

- Open [Route53 AWS Console](https://console.aws.amazon.com/route53/home?region=eu-central-1#hosted-zones)
- Press `Create Hosted Zone`
- Enter the domain name `<your_domain_name>` (e.g. `example.com`)
- Press `Create` button
