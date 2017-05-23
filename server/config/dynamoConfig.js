
module.exports = {

  options: {
    // Optional DynamoDB table name, defaults to 'sessions'
    table: 'infoject-sessions',

    // Optional path to AWS credentials and configuration file
    // AWSConfigPath: './path/to/credentials.json',

    // Optional JSON object of AWS credentials and configuration
    AWSConfigJSON: {
        accessKeyId: <YOUR_ACCESS_KEY_ID>,
        secretAccessKey: <YOUR_SECRET_ACCESS_KEY>,
        region: 'us-east-1'
    },

    // Optional client for alternate endpoint, such as DynamoDB Local
    client: new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:8000')}),

    // Optional clean up interval, defaults to 600000 (10 minutes)
    reapInterval: 86400000,    // 1 day

    // Optional ProvisionedThroughput params, defaults to 5
    readCapacityUnits: 25,
    writeCapacityUnits: 25
  }

}
