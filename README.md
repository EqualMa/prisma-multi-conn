# prisma-multi-conn

issue:

When using multiple prisma clients,
it will output lots of logs when
creating new instance for the later imported client class.

To repro the issue:

```shell
npm install
npm run gen
# client2 is imported after client1, so client2 outputs logs
npx ts-node script.ts
# client1 is imported after client2, so client1 outputs logs
npx ts-node script2.ts
```

The logs are like:

```
  prisma-client Client Version 2.0.0 +0ms
  prisma-client Engine Version de2bc1cbdb5561ad73d2f08463fa2eec48993f56 +2ms
  prisma-client {
  prisma-client   engineConfig: {
  prisma-client     cwd: '/workspace/prisma-multi-conn/prisma',
  prisma-client     debug: false,
  prisma-client     datamodelPath: '/workspace/prisma-multi-conn/generated/client2/schema.prisma',
  prisma-client     prismaPath: undefined,
  prisma-client     generator: {
  prisma-client       name: 'client',
  prisma-client       provider: 'prisma-client-js',
  prisma-client       output: '/workspace/prisma-multi-conn/generated/client2',
  prisma-client       binaryTargets: [],
  prisma-client       config: {},
  prisma-client       isCustomOutput: true
  prisma-client     },
  prisma-client     showColors: false,
  prisma-client     logLevel: undefined,
  prisma-client     logQueries: undefined,
  prisma-client     flags: [],
  prisma-client     clientVersion: '2.0.0'
  prisma-client   }
  prisma-client } +0ms
```
