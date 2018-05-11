# Upgrade & downgrade cluster

If you want to manage nodes in cluster (add / remove / change the instance type), you need to get `InstanceGroups`
```bash
kops get ig --state=s3://kops-state-db2dev
```
You will get two objects of `InstanceGroups`:
- `master-<region>`
- `nodes`

Then you can easily edit that `InstanceGroups` to upgrade or downgrade your cluster by running:
```bash
kops edit ig <instance_group_name> --state=s3://kops-state-<project_name_or_whatever_unique>
```
Then search for:
- `machineType: t2.micro`
- `maxSize: 2`
- `minSize: 2`

Feel free to change that values and run update cluster command:
```bash
kops update cluster --yes --state=s3://kops-state-<project_name_or_whatever_unique>
```
