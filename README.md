# nextjs-starter

## Usage

```bash
$ npm i

$ npm run dev

$ npm run build

$ npm run start

$ npm run sls # serverless offline
```

### Deploy in Serverless

`sls-variables.yml`
```yml
service: nextjs-starter
region: ap-northeast-2
# domain: example.com
# certificate: arn:aws:acm:us-east-1:00000000:certificate/00000000-00000000-00000000-00000000-00000000
```

```bash
$ npm run deploy
```