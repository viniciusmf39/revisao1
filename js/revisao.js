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

    document.getElementById('lblMaculino').innerHTML = ` Existem ${masculino.length} homens na lista`
    document.getElementById('lblFeminino').innerHTML = ` Existem ${feminino.length} mulheres na lista`

}

function compararAltura(){

    let homemMaisAlto ;
    let mulhereMaisAlta ;

    for(let i = 0 ; i < homens.length;i++){
        if(homens[i].altura > homens[i +1].altura ) {
            homenMaisAlto = homens[i];

         }       
    }
    console.log(homenMaisAlto);
}