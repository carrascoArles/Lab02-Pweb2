
function Contador_votos(votos){
	    let contador=Array(n).fill(0)
	    for(idx in votos){
		            contador[votos[idx]]++
		        }

	    let maxVotos=0;
	    let ganadorID=0;
	    for (id in contador){
		if(contador[id]>maxVotos){
	            maxVotos=contador[id]
		    ganadorID=id;
                }
		        }
}
