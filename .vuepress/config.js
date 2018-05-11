module.exports = {
    title: 'Cheatsheets',
    description: 'How to ...',
    themeConfig: {
        sidebar: [
            '/',
            {
                title: 'Kubernetes',
                collapsable: false,
                children: [
                    '/kubernetes/introduction',
                    '/kubernetes/setup-aws',
                    '/kubernetes/setup-domain-provider-ns',
                    '/kubernetes/setup-machine-for-cluster-management',
                    '/kubernetes/init-cluster',
                    '/kubernetes/dashboard-deploy',
                    '/kubernetes/install-ingress',
                    '/kubernetes/ingress-dashboard',
                    '/kubernetes/continuous-integration',
                    '/kubernetes/upgrade-cluster'
                ]
            }
        ]
    }
};
