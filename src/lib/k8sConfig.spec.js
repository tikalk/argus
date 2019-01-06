var tap = require('tap')
const config = require('./kubeconfig') 
const client = require('./kubeClient')
// console.log(config)

// const namespaces = client.getNamespace()
// namespaces.then(({ body }) => 
//     {
//         body.items.forEach(item => console.log(item));
        
//         tap.pass() 
//     })


const cronjobs = client.getCronjobs()
cronjobs.then(({ body }) => 
    {
        body.items.forEach(item => console.log(item));
        
        tap.pass() 
    })
