const Client = require('kubernetes-client').Client
const K8sConfig = require('kubernetes-client').config
const client = new Client({ config: K8sConfig.fromKubeconfig(), version: '1.10' })

exports.getNamespace = async () => {
    const namespaces = await client.api.v1.namespaces.get()
    return namespaces
}

exports.getCronjobs = async () => {
    // const cronjobs = await client.api.v1.cronjobs.get()
    console.log(client.api.v1);
    
    return cronjobs
}
