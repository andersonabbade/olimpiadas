


function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa  = document.getElementById("campo-pesquisa").value

    if(campoPesquisa ==""){
      section.innerHTML ="nada foi encontrado. voce nao buscou por um atleta ou esporte"
      return
     campoPesquisa = campoPesquisa.toLowerCase()
    }
    
    console.log("campoPesquisa")

    



  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descriçao = "";
    let tags = "";
  
    /*
     * Itera sobre cada dado da lista de  dados 
     */
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descriçao = dado.descriçao.toLocaleLowerCase()
      tags = dado.tags.toLocaleLowerCase()
      // se nu includes campoPesquisa então faça 
      if (titulo.includes(campoPesquisa) || descriçao.includes(campoPesquisa)|| tags.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descriçao-meta">${dado.descriçao}</p>
          <a href="${dado.link}" target="_blank"> clique para mais informações</a>
        </div>
      `;
        
      }
      
      
     
    }

    if(!resultados){
      resultados ="nada foi encontrado"

    }
  
    // Atribui o HTML gerado à propriedade innerHTML da seção
    section.innerHTML = resultados;
  }




 
    

        





           









