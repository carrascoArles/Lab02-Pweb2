
function votoContados(votos){
	    let contodos=Array(n).fill(0)
	    for(idx in votos){
		            contodos[votos[idx]]++
		        }

	    let maxVotos=0;
	    let ganador=0;
	    for (id in contodos){
		if(contodos[id]>maxVotos){
	            maxVotos=contodos[id]
		    ganador=id;
                }
		        }
}
