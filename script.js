tarefas = []

while (true) {
    const pergunta = Number(prompt("Bem-vindo ao Gerenciador de tarefas domésticas! Digite: \n1 - Adicionar \n2 - Remover \n3 -Ver tarefas \n4 - Sair"))

    if (pergunta === 1) {
        const add = prompt("Escreva sua nova atividade:")
        tarefas.push(add)
    } else if(pergunta === 2){
        const remover = prompt(`Qual você deseja remover das opções abaixo? \n${tarefas}`)
        if (remover >= 0 && remover < tarefas.length) {
            tarefas.splice(remover, 1);
            alert("Tarefa removida com sucesso!");
        } else {
            alert("Índice inválido. Tarefa não removida.");
        }
    } else if(pergunta === 3){
        alert(`Aqui estão suas tarefas: \n${tarefas}.`)
    } else if(pergunta === 4){
        alert("Até mais!")
        break
    } else{
        alert("Opção inválida! Por favor, digite uma das opções listadas anteriormente!")
    }
}