# Init Vagrant environment
```
mkdir ubuntu
cd ubuntu
vagrant init ubuntu/xenial64
vagrant up
vagrant ssh
```

# Installing kops
```
wget https://github.com/kubernetes/kops/releases/download/1.8.1/kops-linux-amd64
chmod +x kops-linux-amd64
sudo mv kops-linux-amd64 /usr/local/bin/
sudo apt-get update
sudo apt-get install python-pip
sudo pip install awscli
aws configure
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
