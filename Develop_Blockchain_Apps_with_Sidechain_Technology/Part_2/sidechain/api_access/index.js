const axios = require('axios')
const aschJS = require('asch-js')
const program = require('commander')

let dappId = '4a5e158db7248d5e8b0eb503d048320bbf21a935a74d63e5f98f578bd8fb2d2b'
let mySecret = 'sentence weasel match weather apple onion release keen lens deal fruit matrix'


let post = (title, text) => {
  console.log('post')
  const signedTransactionsUrl = `http://localhost:4096/api/dapps/${dappId}/transactions/signed`
  let option = {
    fee: '100000000',
    type: 1000,
    args: JSON.stringify([title, text])
  }

  // sign transaction
  let transaction =  aschJS.dapp.createInnerTransaction(option, mySecret)
  let data = {
    transaction: transaction
  }
  let headers = {
    headers: {
      'magic': '594fe0f3', 'version': ''
    }
  }

  // send signed transaction to Sidechain
  return axios.put(signedTransactionsUrl, data, headers)
    .then((result) => {
      console.log('result:')
      console.log(JSON.stringify(result.data, null, 2))
    })
    .catch((error) => {
      console.log('Be sure to have the right "<dapp Id>" set!')
      console.error(error.message)
    })
}

let get = (id) => {
  const url = `http://localhost:4096/api/dapps/${dappId}/articles`

  return axios.get(url)
    .then((result) => {
      console.log(JSON.stringify(result.data, null, 2))
    })
    .catch((error) => {
      console.log('Be sure to have the right "<dapp Id>" set!')
      console.error(error.message)
    })
}

program
  .command('postArticle [title] [content]')
  .action(function (title, content) {
    post(title, content)
      .then(() => {
      })
  })
  
program 
  .command('getArticle [id]')
  .action(function (id) {
    get(id)
      .then(() => {
      })
  })

program.on('--help', function () {
  console.log('')
  console.log('    Examples:')
  console.log('    postArticle "hello" "my first article"')
  console.log('    getArticle 2')
  console.log('')
})

if (!process.argv.slice(2).length) {
  program.outputHelp()
}

program.parse(process.argv)
