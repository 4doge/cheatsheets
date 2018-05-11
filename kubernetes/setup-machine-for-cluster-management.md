# Setup machine for cluster management

AWS EC2 instance or any kind of virtual machine (e.g. `Vagrant`)

## Vagrant
```bash
mkdir ubuntu
cd ubuntu
vagrant init ubuntu/xenial64
vagrant up
vagrant ssh
```

## awscli
```bash
apt-get update
apt-get install python-pip
pip install awscli
aws configure
```

## kubectl
```bash
curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl

chmod +x kubectl

mv kubectl /usr/local/bin/
```

## kops
```bash
curl -Lo kops https://github.com/kubernetes/kops/releases/download/$(curl -s https://api.github.com/repos/kubernetes/kops/releases/latest | grep tag_name | cut -d '"' -f 4)/kops-linux-amd64

chmod +x kops

mv kops /usr/local/bin/
```

## ssh keys
```bash
ssh-keygen -f .ssh/id_rsa
```



