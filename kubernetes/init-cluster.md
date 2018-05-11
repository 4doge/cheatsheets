# Init cluster

```bash
kops create cluster --name=<your_domain_name> --state=s3://kops-state-<project_name_or_whatever_unique> --zones=<zone_name> --node-count=<node_count> --node-size=<node_size> --master-size=<master_size> --dns-zone=<your_domain_name>

kops update cluster <your_domain_name> --yes --state=s3://kops-state-<project_name_or_whatever_unique>
```

- [Zones reference](https://gist.github.com/neilstuartcraig/0ccefcf0887f29b7f240)
- [Sizes reference](https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/)

Wait until all nodes will be ready by periodic check output of the `kubectl get nodes`
