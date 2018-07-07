
## Develop Blockchain Apps with Sidechain Technology - Part 2


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

### Start

Execute asch-redeploy in the `sidechain` directory:  
```bash
sidechain$ asch-redeploy
```

Open new terminal, add new posts:  
```bash
sidechain/api_access$ node index.js postArticle "Asch Sidechain - Part 2" "Article content"
```
