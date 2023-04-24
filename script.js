const alfabeto = ['','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ',', '.', ' ']

const num_lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]


function letra_em_numero(string){

    let lista_string = string.split('');

    for (let i = 0; i < lista_string.length; i++){
        for (let x = 0; x < alfabeto.length; x++){
            if (lista_string[i] == alfabeto[x]){
                lista_string[i] = num_lista[x];
            }                
        } 
    }
    return lista_string;
}

function matriz_formar(matriz){
    let matriz_int=[];

    for (let i = 0; i < 2; i++){
        matriz_int.push(matriz[i]);
    }
    if (matriz.length != 0){
        matriz.splice(0,2);
    }
    return matriz_int,matriz 
}   

function transformar_matriz(lista_string){
    let matriz_int=[];
    let matriz_ext=[];

    let tam_frase = lista_string.length;

    while (tam_frase%4 != 0){
        lista_string.push(0);
        tam_frase = lista_string.length;
    }
    let num_matriz=tam_frase/2;

    let splited = [];

    for (let i = 0; i < num_matriz; i++) {
        splited.push(lista_string.filter((_, j) => j % num_matriz === i)); /* Estudar */
      }

    while (splited.length != 0){
        matriz_int,splited=matriz_formar(splited)
        matriz_ext.push(matriz_int)
    }

    return matriz_ext
}

function codificar(matriz_A, matriz_B) {
    let result = [[0, 0], [0, 0]];
  
    for (let i = 0; i < matriz_A.length; i++) {
        for (let j = 0; j < matriz_B[0].length; j++) {
            for (let k = 0; k < matriz_B.length; k++) {
                result[i][j] += Math.round(A[i][k] * matriz_B[k][j]) /* Estudar Math */

            }
        }
    }
    return result;
}

function formar_frase(matriz){
    let lista=[]
    let lista_frase=[]

    for (let x = 0; i < matriz.length; i++) {
        for (let y = 0; j < 2; j++) {
            lista.push(matriz[x][y])
        }
    }
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < lista.length; j++){
            lista_frase.push(lista[j][i])
        }
    }
    return lista_frase
}

function numero_em_letra(lista){
    for (let i = 0; i < alfabeto.length; i++){
        for (let x = 0; x < lista.length; x++){
            if (lista[x] == num_lista[i]){
                lista[x] = alfabeto[i];
            }
        }
    }
    return lista
}

function imprimir_matriz(matriz){
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            console.log(matriz[i][j])
        }
        console.log('\n')
    }
}