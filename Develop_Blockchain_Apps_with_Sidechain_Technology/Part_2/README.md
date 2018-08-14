
## Develop Blockchain Apps with Sidechain Technology - Part 2

[Develop Blockchain Apps with Sidechain Technology - Part 2](https://medium.com/aschplatform/develop-blockchain-apps-with-sidechain-technology-part-2-b241d82f3058)


### Folder structure

You need the Asch blockchain in the `asch` directory right beside the `sidechain` directory.  
```
asch
   └───app.js
   └───aschd
   └───...
sidechain
   └───contract/
   └───interface/
   └───...
```

### Install tooling

Be sure to have [asch-redeploy](https://github.com/AschPlatform/asch-redeploy) installed:  
```bash
npm install --global asch-redeploy
```

### Start Sidechain

Execute asch-redeploy in the `sidechain` directory:  
```bash
sidechain$ asch-redeploy
```

### Access Sidechain

Open __new terminal__, install all dependencies:  

```bash
sidechain/api_access$ npm install
```

Add new article:  
```bash
sidechain/api_access$ node index.js postArticle "Asch Sidechain - Part 2" "Article content"
```

Load all articles:  
```bash
sidechain/api_access$ node index.js getArticle
```
