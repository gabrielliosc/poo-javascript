const user = {
    name: 'juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true, 
    exibirInfos: function() {
        console.log(this.name, this.email) //this -> 
    }
}

user.exibirInfos()