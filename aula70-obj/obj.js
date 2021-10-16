function Cliente(id, nome, endereco) {
    this.id = id;
    this.nome = nome;
    this.endereco =endereco;

    Object.defineProperty(this, 'endereco' ,{
        enumerable: true,
        writable: false
    });
}

const c1 = new Cliente(1, 'Matheus', 'brasilia');
const c2 = { ... c1};
c1.endereco = 'Rio de Janeiro'
console.log(c1);
c2.nome = 'Pedro';
console.log(c2);
console.log(Object.getOwnPropertyDescriptor(c1, 'endereco'));