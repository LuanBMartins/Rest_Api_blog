const axios = require('axios')


describe('Camada de testes', function() {

    it('get Route', async function(){
        const res = await axios({
            url: 'http://localhost:5000/posts',
            method: 'get'
        })
        const posts = res.data
        expect(posts).toHaveLength(3)
    })
})