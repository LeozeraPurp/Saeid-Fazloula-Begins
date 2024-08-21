alert("SAEID FAZLOULA BEGINS\n\nClique em OK para iniciar o jogo.");
let inventario = [];
let experiencia = 10;
let fisico = 20;
let tecnica = 30;

alert("2015");
alert("Você acaba de voltar para Bandar-E Anzali no Irã depois de uma longa viagem à Itália, mas o governo está atrás de você porque você postou um selfie em frente à Catedral de Milão.");

capitulo1();

function capitulo1() {
    let escolha1 = Number(prompt("O exército iraniano está batendo na sua porta. O que você faz?\n1 - Enfrentar os soldados.\n2 - Fugir"));

    if (escolha1 === 1) {
        alert("Você não conseguiu enfrentá-los, foi raptado e PERDEU 10 PONTOS de FÍSICO. Porém, um membro de uma divisão secreta protetora de jovens atletas do COI o salva e o leva para o Aeroporto Internacional de Tabriz.");
        fisico -= 10;
    } else if (escolha1 === 2) {
        alert("Você fugiu correndo até uma estação de ônibus. Sua corrida lhe rendeu 10 PONTOS DE FÍSICO. Agora você está a caminho do Aeroporto Internacional de Tabriz.");
        fisico += 10;
    } else {
        alert("Escolha inválida. Tente novamente.");
        capitulo1();
        return; 
    }
    capitulo2();
}

function capitulo2() {
    alert('Agora você está a caminho de Munique na Alemanha, onde há uma escola/mansão para Super Atletas Refugiados como você.');
    alert('Você chega na Escola de Super Atletas. Lá, um Senhor chamado Professor O (Oliver Olivier), dono da escola, o recebe.');
    alert('Professor Oliver - "Olá filho. Ouvi falar de você, você tem um grande talento, poderá ser um dos maiores de sua modalidade."');
    alert('Professor Oliver - "Nosso objetivo é lhe treinar para você ser o que você está destinado a ser e nosso alvo são os Jogos Olímpicos.\nAqui você terá três tipos de pontuação:\nFÍSICO\nEXPERIÊNCIA\nTÉCNICA\nAgora você tem:\n' + fisico + ' pontos de físico.\n' + experiencia + ' pontos de experiência.\n' + tecnica + ' pontos de técnica.');
    alert('Professor Oliver - "Para chegar nas Olimpíadas teremos que treinar e atingir um número X de pontos."');
    
    let escolha2 = Number(prompt('Professor Oliver - "O que você deseja fazer agora?"\n1 - Conhecer outros atletas da mansão.\n2 - Ir treinar na academia.\n3 - Ir treinar no rio perto da mansão.'));

    if (escolha2 === 1) {
        alert("Você conheceu vários atletas refugiados. Em suas conversas, você ganhou 15 PONTOS DE EXPERIÊNCIA.");
        experiencia += 15;
    } else if (escolha2 === 2) {
        alert('Seu treino na academia lhe rendeu 10 PONTOS DE FÍSICO.');
        fisico += 10;
    } else if (escolha2 === 3) {
        alert('Seu treino no rio lhe rendeu 15 PONTOS DE TÉCNICA.');
        tecnica += 15;
    } else {
        alert("Escolha inválida. Tente novamente.");
        capitulo2();
        return; 
    }

    alert('Agora você tem:\n' + fisico + ' pontos de físico.\n' + experiencia + ' pontos de experiência.\n' + tecnica + ' pontos de técnica.');
    fevereirocapt();
}
alert('2016')
alert('Professor Oliver -Lhe escrevemos em um campeonato em Estrasburgo em Junho.')
function fevereirocapt() {
    alert("Fevereiro de 2016");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 12 PONTOS DE FÍSICO');
        fisico += 12;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 12 PONTOS DE TÉCNICA');
        tecnica += 12;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 4 PONTOS DE EXPERIÊNCIA');
        experiencia += 4;
    } else {
        alert("Escolha inválida. Tente novamente.");
        fevereirocapt();
        return;
    }
    marcocap3();
}

function marcocap3() {
    alert("Março de 2016");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 12 PONTOS DE FÍSICO');
        fisico += 12;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 12 PONTOS DE TÉCNICA');
        tecnica += 12;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 4 PONTOS DE EXPERIÊNCIA');
        experiencia += 4;
    } else {
        alert("Escolha inválida. Tente novamente.");
        marcocap3();
        return;
    }
    abrilcap3();
}

function abrilcap3() {
    alert("Abril de 2016");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 12 PONTOS DE FÍSICO');
        fisico += 12;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 12 PONTOS DE TÉCNICA');
        tecnica += 12;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 4 PONTOS DE EXPERIÊNCIA');
        experiencia += 4;
    } else {
        alert("Escolha inválida. Tente novamente.");
        abrilcap3();
        return;
    }
    maiocap3();
}

function maiocap3() {
    alert('Maio de 2016');
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 12 PONTOS DE FÍSICO');
        fisico += 12;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 12 PONTOS DE TÉCNICA');
        tecnica += 12;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 4 PONTOS DE EXPERIÊNCIA');
        experiencia += 4;
    } else {
        alert("Escolha inválida. Tente novamente.");
        maiocap3();
        return; 
    }
    junhocap3();
}

function junhocap3() {
    alert("Junho de 2016");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 12 PONTOS DE FÍSICO');
        fisico += 12;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 12 PONTOS DE TÉCNICA');
        tecnica += 12;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 4 PONTOS DE EXPERIÊNCIA');
        experiencia += 4;
    } else {
        alert("Escolha inválida. Tente novamente.");
        junhocap3();
        return;
    }
}
function tremstrasbourg() {
    alert('Agora você tem:\n' + fisico + ' pontos de físico.\n' + experiencia + ' pontos de experiência.\n' + tecnica + ' pontos de técnica.');
    alert('Agora você está em um trem a caminho da França.');

    let tremescolha1 = Number(prompt('Você tem duas opções.\n1 - Sentar-se com o Professor Oliver\n2 - Sentar-se com uma atleta de vôlei também refugiada.'));
    
    if (tremescolha1 === 1) {
        alert('Você se senta com o Professor Oliver e ele lhe conta a história de como criou a Mansão O.');
        alert('Ele conta que criou a Mansão O porque também era um atleta refugiado. Sua infância foi complicada, com 4 anos, Oliver teve que deixar seu país por causa de uma guerra civil. Uma família rica da Alemanha o acolheu. Quando começou a ir à escola, sofreu muito preconceito dos colegas de aula.');
        alert('Quando mais velho, começou a treinar boxe, mas nenhuma academia o aceitava por ser estrangeiro. Depois de não conseguir realizar seu sonho, Oliver criou a Mansão O para que todos os refugiados tenham um lugar para treinar.');
        alert('Sua conversa lhe rendeu 15 PONTOS DE EXPERIÊNCIA.');
        experiencia += 15;
    } else if (tremescolha1 === 2) {
        alert('Em sua conversa com a atleta, ela lhe deu algumas dicas de como treinar seu físico. Isso lhe rendeu 5 PONTOS DE FÍSICO.');
        fisico += 5;
    } else {
        alert("Escolha inválida. Tente novamente.");
        tremstrasbourg();
    }
}
strasbourgtournament()
function strasbourgtournament() {
    let gate1resultado;
    let gate2resultado;

    alert('Agora você está a caminho do campeonato.');
    alert('Ele já vai começar.');
    alert('3');
    alert('2');
    alert('1');
    alert('JÁ');

    gate1();

    function gate1() {
        let gate1 = Number(prompt('A corrida está acirrada, você e um adversário mais velho estão disputando 2° lugar e irão passar por um gate. O que você deseja fazer?\n1 - Impor velocidade contra o adversário (FÍSICO).\n2 - Tentar levar o adversário para bater no gate (TÉCNICA e EXPERIÊNCIA).\n3 - Cadenciar seu barco com o do adversário (EXPERIÊNCIA)'));
        
        if (gate1 === 1) {
            if (fisico >= 35) {
                alert('✅');
                gate1resultado = "acerto";
            } else {
                alert('❌');
                gate1resultado = "erro";
            }
        } else if (gate1 === 2) {
            if (tecnica >= 50 && experiencia >= 15) {
                alert('✅');
                gate1resultado = "acerto";
            } else {
                alert('❌');
                gate1resultado = "erro";
            }
        } else if (gate1 === 3) {
            if (experiencia >= 60) {
                alert('✅');
                gate1resultado = "acerto";
            } else {
                alert('❌');
                gate1resultado = "erro";
            }
        } else {
            alert("Escolha inválida. Tente novamente.");
            gate1();
        }
    }

    if (gate1resultado === "acerto") {
        gate2acerto();
    } else if (gate1resultado === "erro") {
        gate2erro();
    }

    function gate2acerto() {
        let gate2 = Number(prompt("Agora você está disputando o 1° lugar com atleta mais jovem. O que você irá fazer?\n1 - Impor seu barco contra o do adversário (FÍSICO e TÉCNICO).\n2 - Jogar água contra o rosto de seu adversário (EXPERIÊNCIA)"));

        if (gate2 === 1) {
            if (fisico >= 50 && tecnica >= 35) {
                alert("✅");
                gate2resultado = "acerto";
            } else {
                alert("❌");
                gate2resultado = "erro";
            }
        } else if (gate2 === 2) {
            if (experiencia >= 20) {
                alert("✅");
                gate2resultado = "acerto";
            } else {
                alert("❌");
                gate2resultado = "erro";
            }
        } else {
            alert("Escolha inválida. Tente novamente.");
            gate2acerto();
        }
    }

    function gate2erro() {
        let gate2 = Number(prompt('Agora você tem que disputar o 3° lugar com um atleta bem mais velho que você. O que você deseja fazer?\n1 - Ultrapassar de forma limpa (FÍSICO e TÉCNICO).\n2 - Tentar encostar no barco do adversário (EXPERIÊNCIA)'));
        
        if (gate2 === 1) {
            if (fisico >= 50 && tecnica >= 35) {
                alert("✅");
                gate2resultado = "acerto";
            } else {
                alert("❌");
                gate2resultado = "erro";
            }
        } else if (gate2 === 2) {
            if (experiencia >= 85) {
                alert("✅");
                gate2resultado = "acerto";
            } else {
                alert("❌");
                gate2resultado = "erro";
            }
        } else {
            alert("Escolha inválida. Tente novamente.");
            gate2erro();
        }
    }

    if (gate2resultado === "acerto") {
        if (gate1resultado === "acerto") {
            alert("Parabéns, você ganhou ouro no Strasbourg Slalom Tournament.");
            inventario.push("Ouro - Strasbourg Slalom Tournament");
            alert("Você gan")
        } else {
            alert("Parabéns, você ganhou bronze no Strasbourg Slalom Tournament.");
            inventario.push("Bronze - Strasbourg Slalom Tournament");
        }
    } else {
        if (gate1resultado === "erro") {
            alert("Você ficou em 4°.");
        } else {
            alert("Parabéns, você ganhou prata no Strasbourg Slalom Tournament.");
            inventario.push("Prata - Strasbourg Slalom Tournament");
        }
    }

    alert("Agora você tem um inventário.");
    alert("Se você ganhou uma medalha em sua última corrida, ela aparecerá em seu inventário.");
    alert("Inventário:\n" + inventario.join(", "));
}

tremstrasbourg();



alert('Agora você está voltando para Munique.')
alert('Professor Oliver te dá a notícia que você correrá em um campeonato no Rio de Janeiro em fevereiro de 2018.')
alert('Você fará um pausa em sua carreira até Novembro de 2017.')
alert('Suas féria lhe renderam bons ensinamentos. Você conseguiu 55 PONTOS DE EXPERÊNCIA')
(experiencia + 55)
alert('Agora você tem:\n' + fisico + ' pontos de físico.\n' + experiencia + ' pontos de experiência.\n' + tecnica + ' pontos de técnica.');
alert('Você voltou de suas férias e começará á treinar para o Rio Slalom Tournament.')
alert("2016");
alert("Professor Oliver - Lhe escrevemos em um campeonato em Estrasburgo em Junho.");
function iniciarTreinamento2017() {

    
   
    novembro2017();
}

function novembro2017() {
    alert("Novembro de 2017");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 12 PONTOS DE FÍSICO');
        fisico += 12;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 12 PONTOS DE TÉCNICA');
        tecnica += 12;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 4 PONTOS DE EXPERIÊNCIA');
        experiencia += 4;
    } else {
        alert("Escolha inválida. Tente novamente.");
        novembro2017();
        return;
    }
    dezembro2017();
}

function dezembro2017() {
    alert("Dezembro de 2017");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 12 PONTOS DE FÍSICO');
        fisico += 12;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 12 PONTOS DE TÉCNICA');
        tecnica += 12;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 4 PONTOS DE EXPERIÊNCIA');
        experiencia += 4;
    } else {
        alert("Escolha inválida. Tente novamente.");
        dezembro2017();
        return;
    }
    janeiro2018();
}

function janeiro2018() {
    alert("Janeiro de 2018");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 12 PONTOS DE FÍSICO');
        fisico += 12;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 12 PONTOS DE TÉCNICA');
        tecnica += 12;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 4 PONTOS DE EXPERIÊNCIA');
        experiencia += 4;
    } else {
        alert("Escolha inválida. Tente novamente.");
        janeiro2018();
        return;
    }
    fevereiro2018();
}

function fevereiro2018() {
    alert("Fevereiro de 2018");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 12 PONTOS DE FÍSICO');
        fisico += 12;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 12 PONTOS DE TÉCNICA');
        tecnica += 12;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 4 PONTOS DE EXPERIÊNCIA');
        experiencia += 4;
    } else {
        alert("Escolha inválida. Tente novamente.");
        fevereiro2018();
        return;
    }
    marco2018();
}

function marco2018() {
    alert("Março de 2018");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 12 PONTOS DE FÍSICO');
        fisico += 12;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 12 PONTOS DE TÉCNICA');
        tecnica += 12;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 4 PONTOS DE EXPERIÊNCIA');
        experiencia += 4;
    } else {
        alert("Escolha inválida. Tente novamente.");
        marco2018();
        return;
    }


}


iniciarTreinamento2017();
alert('Agora você tem:\n' + fisico + ' pontos de físico.\n' + experiencia + ' pontos de experiência.\n' + tecnica + ' pontos de técnica.');
alert("RIO DE JANEIRO")

function rioTournament() {
    let gate1resultado;
    let gate2resultado;

    alert('Agora você está a caminho do campeonato no Rio de Janeiro.');
    alert('Ele já vai começar.');
    alert('3');
    alert('2');
    alert('1');
    alert('JÁ');

    gate1();

    function gate1() {
        let gate1 = Number(prompt('A corrida no Rio está intensa, você e um adversário local estão disputando o 2° lugar. O que você deseja fazer?\n1 - Aumentar sua velocidade (FÍSICO).\n2 - Tentar bloquear o adversário próximo ao gate (TÉCNICA e EXPERIÊNCIA).\n3 - Cadenciar seu barco para se manter estável (EXPERIÊNCIA)'));
        
        if (gate1 === 1) {
            if (fisico >= 67) {
                alert('✅');
                gate1resultado = "acerto";
            } else {
                alert('❌');
                gate1resultado = "erro";
            }
        } else if (gate1 === 2) {
            if (tecnica >= 76 && experiencia >= 40) {
                alert('✅');
                gate1resultado = "acerto";
            } else {
                alert('❌');
                gate1resultado = "erro";
            }
        } else if (gate1 === 3) {
            if (experiencia >= 80) {
                alert('✅');
                gate1resultado = "acerto";
            } else {
                alert('❌');
                gate1resultado = "erro";
            }
        } else {
            alert("Escolha inválida. Tente novamente.");
            gate1();
        }
    }

    if (gate1resultado === "acerto") {
        gate2acerto();
    } else if (gate1resultado === "erro") {
        gate2erro();
    }

    function gate2acerto() {
        let gate2 = Number(prompt("Você está disputando o 1° lugar com outro atleta. O que você irá fazer?\n1 - Impor seu barco contra o adversário (FÍSICO e TÉCNICO).\n2 - Borrifar água para atrapalhar a visão do adversário (EXPERIÊNCIA)"));

        if (gate2 === 1) {
            if (fisico >= 55 && tecnica >= 40) {
                alert("✅");
                gate2resultado = "acerto";
            } else {
                alert("❌");
                gate2resultado = "erro";
            }
        } else if (gate2 === 2) {
            if (experiencia >= 45) {
                alert("✅");
                gate2resultado = "acerto";
            } else {
                alert("❌");
                gate2resultado = "erro";
            }
        } else {
            alert("Escolha inválida. Tente novamente.");
            gate2acerto();
        }
    }

    function gate2erro() {
        let gate2 = Number(prompt('Agora você tem que disputar o 3° lugar com um atleta mais experiente. O que você deseja fazer?\n1 - Ultrapassar de forma limpa (FÍSICO e TÉCNICO).\n2 - Tentar encostar no barco do adversário (EXPERIÊNCIA)'));
        
        if (gate2 === 1) {
            if (fisico >= 55 && tecnica >= 40) {
                alert("✅");
                gate2resultado = "acerto";
            } else {
                alert("❌");
                gate2resultado = "erro";
            }
        } else if (gate2 === 2) {
            if (experiencia >= 90) {
                alert("✅");
                gate2resultado = "acerto";
            } else {
                alert("❌");
                gate2resultado = "erro";
            }
        } else {
            alert("Escolha inválida. Tente novamente.");
            gate2erro();
        }
    }

    if (gate2resultado === "acerto") {
        if (gate1resultado === "acerto") {
            alert("Parabéns, você ganhou ouro no Rio de Janeiro Slalom Tournament.");
            inventario.push("Ouro - Rio de Janeiro Slalom Tournament");
        } else {
            alert("Parabéns, você ganhou bronze no Rio de Janeiro Slalom Tournament.");
            inventario.push("Bronze - Rio de Janeiro Slalom Tournament");
        }
    } else {
        if (gate1resultado === "erro") {
            alert("Você ficou em 4°.");
        } else {
            alert("Parabéns, você ganhou prata no Rio de Janeiro Slalom Tournament.");
            inventario.push("Prata - Rio de Janeiro Slalom Tournament");
        }
    }

    alert("Se você ganhou uma medalha em sua última corrida, ela aparecerá em seu inventário.");
    alert("Inventário:\n" + inventario.join(", "));
}

alert('Agora você tem que treinar para o campeonato de Instambul.')
alert('O Instambul Slalom Tournament acontecerá em janeiro de 2019, e uma boa colocação será perfeita para você conseguir uma vaga nas Olímpiadas de Tóquio.')
function iniciarTreinamento() {
    alert("2018");
    alert("Professor Oliver - Prepare-se, mais desafios virão.");
    
    
    agosto2018();
}

function agosto2018() {
    alert("Agosto de 2018");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 22 PONTOS DE FÍSICO');
        fisico += 22;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 22 PONTOS DE TÉCNICA');
        tecnica += 22;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 12 PONTOS DE EXPERIÊNCIA');
        experiencia += 12;
    } else {
        alert("Escolha inválida. Tente novamente.");
        agosto2018();
        return;
    }
    setembro2018();
}

function setembro2018() {
    alert("Setembro de 2018");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 24 PONTOS DE FÍSICO');
        fisico += 24;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 24 PONTOS DE TÉCNICA');
        tecnica += 24;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 14 PONTOS DE EXPERIÊNCIA');
        experiencia += 14;
    } else {
        alert("Escolha inválida. Tente novamente.");
        setembro2018();
        return;
    }
    outubro2018();
}

function outubro2018() {
    alert("Outubro de 2018");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 26 PONTOS DE FÍSICO');
        fisico += 26;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 26 PONTOS DE TÉCNICA');
        tecnica += 26;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 16 PONTOS DE EXPERIÊNCIA');
        experiencia += 16;
    } else {
        alert("Escolha inválida. Tente novamente.");
        outubro2018();
        return;
    }
    novembro2018();
}

function novembro2018() {
    alert("Novembro de 2018");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 28 PONTOS DE FÍSICO');
        fisico += 28;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 28 PONTOS DE TÉCNICA');
        tecnica += 28;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 18 PONTOS DE EXPERIÊNCIA');
        experiencia += 18;
    } else {
        alert("Escolha inválida. Tente novamente.");
        novembro2018();
        return;
    }
    dezembro2018();
}

function dezembro2018() {
    alert("Dezembro de 2018");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 30 PONTOS DE FÍSICO');
        fisico += 30;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 30 PONTOS DE TÉCNICA');
        tecnica += 30;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 20 PONTOS DE EXPERIÊNCIA');
        experiencia += 20;
    } else {
        alert("Escolha inválida. Tente novamente.");
        dezembro2018();
        return;
    }
    janeiro2019();
}

function janeiro2019() {
    alert("Janeiro de 2019");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 32 PONTOS DE FÍSICO');
        fisico += 32;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 32 PONTOS DE TÉCNICA');
        tecnica += 32;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 22 PONTOS DE EXPERIÊNCIA');
        experiencia += 22;
    } else {
        alert("Escolha inválida. Tente novamente.");
        janeiro2019();
        return;
    }
}
alert('Agora você tem:\n' + fisico + ' pontos de físico.\n' + experiencia + ' pontos de experiência.\n' + tecnica + ' pontos de técnica.');
alert("Intambul Slalom Tournament")
function istanbulTournament() {
    let gate1resultado;
    let gate2resultado;

    alert('Agora você está a caminho do campeonato em Istambul.');
    alert('Ele já vai começar.');
    alert('3');
    alert('2');
    alert('1');
    alert('JÁ');

    gate1();

    function gate1() {
        let gate1 = Number(prompt('A corrida em Istambul é desafiadora, e você e um adversário experiente estão disputando o 2° lugar. O que você deseja fazer?\n1 - Aumentar a força para ganhar velocidade (FÍSICO).\n2 - Tentar fazer o adversário errar o gate (TÉCNICA e EXPERIÊNCIA).\n3 - Ajustar seu ritmo ao do adversário (EXPERIÊNCIA)'));
        
        if (gate1 === 1) {
            if (fisico >= 75) {
                alert('✅');
                gate1resultado = "acerto";
            } else {
                alert('❌');
                gate1resultado = "erro";
            }
        } else if (gate1 === 2) {
            if (tecnica >= 90 && experiencia >= 45) {
                alert('✅');
                gate1resultado = "acerto";
            } else {
                alert('❌');
                gate1resultado = "erro";
            }
        } else if (gate1 === 3) {
            if (experiencia >= 100) {
                alert('✅');
                gate1resultado = "acerto";
            } else {
                alert('❌');
                gate1resultado = "erro";
            }
        } else {
            alert("Escolha inválida. Tente novamente.");
            gate1();
        }
    }

    if (gate1resultado === "acerto") {
        gate2acerto();
    } else if (gate1resultado === "erro") {
        gate2erro();
    }

    function gate2acerto() {
        let gate2 = Number(prompt("Agora você está disputando o 1° lugar com um atleta local. O que você irá fazer?\n1 - Impor seu barco contra o do adversário (FÍSICO e TÉCNICO).\n2 - Usar uma manobra para desestabilizar o adversário (EXPERIÊNCIA)"));

        if (gate2 === 1) {
            if (fisico >= 90 && tecnica >= 75) {
                alert("✅");
                gate2resultado = "acerto";
            } else {
                alert("❌");
                gate2resultado = "erro";
            }
        } else if (gate2 === 2) {
            if (experiencia >= 120) {
                alert("✅");
                gate2resultado = "acerto";
            } else {
                alert("❌");
                gate2resultado = "erro";
            }
        } else {
            alert("Escolha inválida. Tente novamente.");
            gate2acerto();
        }
    }

    function gate2erro() {
        let gate2 = Number(prompt('Agora você tem que disputar o 3° lugar com um atleta veterano. O que você deseja fazer?\n1 - Ultrapassar de forma limpa (FÍSICO e TÉCNICO).\n2 - Tentar desestabilizar o barco do adversário (EXPERIÊNCIA)'));
        
        if (gate2 === 1) {
            if (fisico >= 50 && tecnica >= 75) {
                alert("✅");
                gate2resultado = "acerto";
            } else {
                alert("❌");
                gate2resultado = "erro";
            }
        } else if (gate2 === 2) {
            if (experiencia >= 155) {
                alert("✅");
                gate2resultado = "acerto";
            } else {
                alert("❌");
                gate2resultado = "erro";
            }
        } else {
            alert("Escolha inválida. Tente novamente.");
            gate2erro();
        }
    }

    if (gate2resultado === "acerto") {
        if (gate1resultado === "acerto") {
            alert("Parabéns, você ganhou ouro no Istanbul Slalom Tournament.");
            inventario.push("Ouro - Istanbul Slalom Tournament");
        } else {
            alert("Parabéns, você ganhou bronze no Istanbul Slalom Tournament.");
            inventario.push("Bronze - Istanbul Slalom Tournament");
        }
    } else {
        if (gate1resultado === "erro") {
            alert
        }
    }
}

alert("Inventário")
alert('Agora você tem:\n' + fisico + ' pontos de físico.\n' + experiencia + ' pontos de experiência.\n' + tecnica + ' pontos de técnica.');
alert('Você está voltando para Munique e recebe uma boa notícia. Você foi convocado pelo Cômite Olímpico de Atletas Refugiados para correr em Tokyo 2020')
alert('Agora você precisa treinar para as Olímpiadas.')
alert("Dezembro 2019")
function iniciarTreinamento2019_2020() {
    alert("2019");
    alert("Prepare-se para os treinos finais antes dos próximos desafios.");
    
    // Inicia a sequência de treinamento em dezembro de 2019
    dezembro2019();
}

function dezembro2019() {
    alert("Dezembro de 2019");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 34 PONTOS DE FÍSICO');
        fisico += 34;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 34 PONTOS DE TÉCNICA');
        tecnica += 34;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 24 PONTOS DE EXPERIÊNCIA');
        experiencia += 24;
    } else {
        alert("Escolha inválida. Tente novamente.");
        dezembro2019();
        return;
    }
    janeiro2020();
}

function janeiro2020() {
    alert("Janeiro de 2020");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 36 PONTOS DE FÍSICO');
        fisico += 36;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 36 PONTOS DE TÉCNICA');
        tecnica += 36;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 26 PONTOS DE EXPERIÊNCIA');
        experiencia += 26;
    } else {
        alert("Escolha inválida. Tente novamente.");
        janeiro2020();
        return;
    }
    fevereiro2020();
}

function fevereiro2020() {
    alert("Fevereiro de 2020");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 38 PONTOS DE FÍSICO');
        fisico += 38;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 38 PONTOS DE TÉCNICA');
        tecnica += 38;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 28 PONTOS DE EXPERIÊNCIA');
        experiencia += 28;
    } else {
        alert("Escolha inválida. Tente novamente.");
        fevereiro2020();
        return;
    }
    marco2020();
}

function marco2020() {
    alert("Março de 2020");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 40 PONTOS DE FÍSICO');
        fisico += 40;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 40 PONTOS DE TÉCNICA');
        tecnica += 40;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 30 PONTOS DE EXPERIÊNCIA');
        experiencia += 30;
    } else {
        alert("Escolha inválida. Tente novamente.");
        marco2020();
        return;
    }
    abril2020();
}

function abril2020() {
    alert("Abril de 2020");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 42 PONTOS DE FÍSICO');
        fisico += 42;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 42 PONTOS DE TÉCNICA');
        tecnica += 42;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 32 PONTOS DE EXPERIÊNCIA');
        experiencia += 32;
    } else {
        alert("Escolha inválida. Tente novamente.");
        abril2020();
        return;
    }
    maio2020();
}

function maio2020() {
    alert("Maio de 2020");
    let escolha4 = Number(prompt('O que você vai treinar este mês?\n1 - Treinar aspectos físicos.\n2 - Treinar aspectos técnicos\n3 - Trabalhar o mental'));

    if (escolha4 === 1) {
        alert('Seu treino lhe rendeu 44 PONTOS DE FÍSICO');
        fisico += 44;
    } else if (escolha4 === 2) {
        alert('Seu treino lhe rendeu 44 PONTOS DE TÉCNICA');
        tecnica += 44;
    } else if (escolha4 === 3) {
        alert('Sua sessão de estudos lhe rendeu 34 PONTOS DE EXPERIÊNCIA');
        experiencia += 34;
    } else {
        alert("Escolha inválida. Tente novamente.");
        maio2020();
        return;
    }
    alert("Parabéns, você concluiu o ciclo de treinos até maio de 2020!");

    function campeonatoTokyo2020() {
        alert('Bem-vindo às Olimpíadas de Tóquio 2020!');
        alert('Prepare-se para uma competição emocionante com várias etapas desafiadoras.');
    
        etapa1();
    }
    
    function etapa1() {
        alert('Etapa 1: Qualificação');
        let escolha1 = Number(prompt('Você está prestes a começar a qualificação. O que você irá fazer?\n1 - Aumentar a velocidade do seu barco (FÍSICO).\n2 - Usar táticas avançadas para confundir os adversários (TÉCNICO).\n3 - Manter uma estratégia constante para não perder o ritmo (EXPERIÊNCIA).'));
    
        if (escolha1 === 1) {
            if (fisico >= 100) {
                alert('✅ Qualificação garantida!');
                etapa2();
            } else {
                alert('❌ Falhou na qualificação. Treine mais e tente novamente.');
            }
        } else if (escolha1 === 2) {
            if (tecnica >= 89) {
                alert('✅ Qualificação garantida!');
                etapa2();
            } else {
                alert('❌ Falhou na qualificação. Treine mais e tente novamente.');
            }
        } else if (escolha1 === 3) {
            if (experiencia >= 110) {
                alert('✅ Qualificação garantida!');
                etapa2();
            } else {
                alert('❌ Falhou na qualificação. Treine mais e tente novamente.');
            }
        } else {
            alert('Escolha inválida. Tente novamente.');
            etapa1();
        }
    }
    
    function etapa2() {
        alert('Etapa 2: Semifinal');
        let escolha2 = Number(prompt('Você está agora na semifinal. O que você vai fazer?\n1 - Forçar uma ultrapassagem agressiva (FÍSICO e TÉCNICO).\n2 - Aplicar uma técnica de bloqueio para impedir o adversário (TÉCNICO e EXPERIÊNCIA).\n3 - Manter uma estratégia defensiva para garantir uma boa colocação (EXPERIÊNCIA).'));
    
        if (escolha2 === 1) {
            if (fisico >= 210 && tecnica >= 180) {
                alert('✅ Avançou para a final!');
                etapa3();
            } else {
                alert('❌ Eliminado na semifinal. Treine mais e tente novamente.');
            }
        } else if (escolha2 === 2) {
            if (tecnica >= 180 && experiencia >= 280) {
                alert('✅ Avançou para a final!');
                etapa3();
            } else {
                alert('❌ Eliminado na semifinal. Treine mais e tente novamente.');
            }
        } else if (escolha2 === 3) {
            if (experiencia >= 250) {
                alert('✅ Avançou para a final!');
                etapa3();
            } else {
                alert('❌ Eliminado na semifinal. Treine mais e tente novamente.');
            }
        } else {
            alert('Escolha inválida. Tente novamente.');
            etapa2();
        }
    }
    
    function etapa3() {
        alert('Etapa 3: Final');
        let escolha3 = Number(prompt('Você chegou à final. O que você fará para garantir a vitória?\n1 - Realizar uma manobra ousada para tomar a liderança (FÍSICO e TÉCNICO).\n2 - Utilizar uma tática de intimidação para desestabilizar o adversário (TÉCNICO e EXPERIÊNCIA).\n3 - Concentração total para manter a vantagem (EXPERIÊNCIA e TÉCNICO).'));
    let resultado
        if (escolha3 === 1) {
            if (fisico >= 60 && tecnica >= 60) {
                alert('✅ Medalha de Ouro!');
                alert('Parabéns, você ganhou a medalha de Ouro nas Olimpíadas de Tóquio 2020!');
                 resultado = "acerto"
            } else {
                alert('❌ Perdeu a final. Melhor sorte na próxima vez.');
            }
        } else if (escolha3 === 2) {
            if (tecnica >= 65 && experiencia >= 45) {
                alert('✅ Medalha de Ouro!');
                alert('Parabéns, você ganhou a medalha de Ouro nas Olimpíadas de Tóquio 2020!');
                 resultado = "acerto"
            } else {
                alert('❌ Perdeu a final. Melhor sorte na próxima vez.');
            }
        } else if (escolha3 === 3) {
            if (experiencia >= 50 && tecnica >= 50) {
                alert('✅ Medalha de Ouro!');
                alert('Parabéns, você ganhou a medalha de Ouro nas Olimpíadas de Tóquio 2020!');
                resultado = "acerto"
            } else {
                alert('❌ Perdeu a final. Melhor sorte na próxima vez.');
            }
        } else {
            alert('Escolha inválida. Tente novamente.');
            etapa3();
        }
       
            
        }
    }
    

    campeonatoTokyo2020()

    alert('Esse foi a sua jornada Saeid.')
    alert('Suas Medalhas:' + inventario.join(", "))
    alert('Seus Atributos\n' + fisico + ' pontos de físico.\n' + experiencia + ' pontos de experiência.\n' + tecnica + ' pontos de técnica.')
    alert('FIM')
