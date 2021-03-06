# Init Vagrant environment
```
mkdir ubuntu
cd ubuntu
vagrant init ubuntu/xenial64
vagrant up
vagrant ssh
```

# Configure IAM on AWS
- Open https://console.aws.amazon.com/iam/home?region=eu-central-1#/users
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

# Configure S3 on AWS
- Open https://s3.console.aws.amazon.com/s3/home?region=eu-central-1
- Press `Create bucket` button
- Enter bucket name `kops-state-<project_name_or_whatever_unique>` (e.g. `kops-state-r4nd0m`)

# Configure Route53 on AWS
- Open https://console.aws.amazon.com/route53/home?region=eu-central-1#hosted-zones:
- Press `Create Hosted Zone`
- Enter the domain name `kubernetes.<your_domain_name>` (e.g. `kubernetes.example.com`)
- Press `Create` button

# Configure <your_domain_name_provider> (e.g. https://www.namecheap.com)
- Set the `NS` records for the domain name `kubernetes.<your_domain_name>` (e.g. `kubernetes.example.com`) with values from Route53

# Installing kops
Get the stable release number https://api.github.com/repos/kubernetes/kops/releases/latest
```
wget https://github.com/kubernetes/kops/releases/download/1.8.1/kops-linux-amd64
chmod +x kops-linux-amd64
sudo mv kops-linux-amd64 /usr/local/bin/
sudo mv /usr/local/bin/kops-linux-amd64 /usr/local/bin/kops
```

# Configure awscli
```
sudo apt-get update
sudo apt-get install python-pip
sudo pip install awscli
aws configure
```

# Install kubectl
Get the stable release number https://storage.googleapis.com/kubernetes-release/release/stable.txt
```
wget https://storage.googleapis.com/kubernetes-release/release/v1.10.0/bin/linux/amd64/kubectl
chmod +x kubectl
sudo mv kubectl /usr/local/bin/
```

# Generate ssh keys
```
ssh-keygen -f .ssh/id_rsa
```
- Private key `.ssh/id_rsa`
- Public key `.ssh/id_rsa.pub`

# Creating cluster
Zones reference - https://gist.github.com/neilstuartcraig/0ccefcf0887f29b7f240
```
kops create cluster --name=kubernetes.<your_domain_name> --state=s3://kops-state-<project_name_or_whatever_unique> --zones=eu-central-1a --node-count=2 --node-size=t2.micro --master-size=t2.micro --dns-zone=kubernetes.<your_domain_name>
kops update cluster kubernetes.<your_domain_name> --yes --state=s3://kops-state-<project_name_or_whatever_unique>
```

Wait until all nodes will be ready - `kubectl get nodes`

# Deploy the dashboard
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/master/src/deploy/recommended/kubernetes-dashboard.yaml
```
- Run `kubectl get nodes` and copy the `Name` of node, where `Roles=master` (e.g. `ip-xx-xx-xx-xxx.eu-central-1.compute.internal`)
- Run `kubectl describe nodes ip-xx-xx-xx-xxx.eu-central-1.compute.internal` and search for an `ExternalIP` value (e.g. `xx.xx.xxx.xx`)
- Access the `ExternalIP` via `https` protocol. (e.g. `https://xx.xx.xxx.xx/ui`)
- Run `kubectl config view` to get the basic auth credentials
- Run `kubectl get secret` to view list of secrets
- Run `kubectl describe secret default-token-<some_random_id>` to get the Token for Sign in to the Dashboard UI

