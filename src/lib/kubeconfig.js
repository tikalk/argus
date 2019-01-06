// k8s
const K8sConfig = require('kubernetes-client').config
const config = K8sConfig.fromKubeconfig()
exports.module = config