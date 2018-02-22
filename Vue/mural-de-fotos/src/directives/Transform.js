import Vue from 'vue';

Vue.directive('meu-transform', {
    //el - referência ao elemento do dom pela qual foi chamada. 
    bind(el, binding, vnode) {
        let graus = 0;
        let jaClicado = false;
        el.addEventListener('dblclick', function(){
            let incremento = 0; 

            if (binding.value){
                incremento = binding.value;
            }
            let efeito;

            if(!binding.arg || binding.arg == 'rodar'){
                if(binding.modifiers.reverso){
                    graus -= incremento || 90;
                } else{
                    graus += incremento || 90;
                }

                efeito = `rotate(${graus}deg)`;
            } else if(binding.arg == "escala"){
                if(jaClicado){
                    incremento = 0;
                }
                jaClicado = true;
                efeito = `scale(${incremento})`; 
            }

            if (binding.modifiers.animado) el.style.transition = 'transform 0.5s'
            el.style.transform = efeito;
        })
    }

})