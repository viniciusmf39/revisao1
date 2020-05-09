document.getElementById('btnAddPessoa').onclick = adicionarPessoa;
document.getElementById('btnResultado').onclick = quantidadeSexo;
document.getElementById('btnMaisAlto').onclick = compararAltura ;

const listaPessoa=[];
const homens = []
const mulheres = []

function adicionarPessoa(){
   
   const pessoa={
    
    nome: document.getElementById('txtnome').value,
    sexo: document.getElementById('txtSexo').value,
    altura:parseFloat( document.getElementById('txtAltura')).value,
   }
   
   listaPessoa.push(pessoa);
}

function quantidadeSexo(){
    
    let masculino = 0 ;
    let feminino = 0 ;

    for(let pessoa of listaPessoa){
        if (pessoa.sexo === 'M'){
            homens.push(pessoa);
        }else[
            mulheres.push(pessoa)
        ]
    }

    document.getElementById('lblMaculino').innerHTML = ` Existem ${homens.length} homens na lista`
    document.getElementById('lblFeminino').innerHTML = ` Existem ${mulheres.length} mulheres na lista`

}

function compararAltura(){

    let homemMaisAlto ;
    let mulherMaisAlta ;

    for( let i = 1 ; i < homens.length ; i++ ){
        if(homens[i].altura > homens[i - 1].altura ) {
            homemMaisAlto = homens[i];

         }       
    }
    for( let i = 1 ; i < mulheres.length ; i++ ){
        if(mulheres[i].altura > mulheres[i - 1].altura ) {
            mulherMaisAlto = mmulheres[i];
        }
    }
    document.getElementById('lblMaculino').innerHTML = `${homenMaisAlto.nome} é o homem mais alto`
    document.getElementById('lblFeminino').innerHTML = `${mulherMaisAlto.nome} é a mulher mais alta`
}