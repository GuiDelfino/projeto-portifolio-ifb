
document.addEventListener('DOMContentLoaded',()=>{
const form=document.getElementById('contatoForm');
if(form){
form.addEventListener('submit',(e)=>{
e.preventDefault();
const nome=document.getElementById('nome').value.trim();
const email=document.getElementById('email').value.trim();
if(nome===''||email===''){
alert('Preencha todos os campos obrigatórios');
return;
}
alert('Mensagem enviada com sucesso!');
form.reset();
});
}
});
