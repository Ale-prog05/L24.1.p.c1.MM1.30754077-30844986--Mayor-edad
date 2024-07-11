export default class CL_clase {
    constructor () {
        this.contP = 0
        this.contPMayores = 0
    }
     procesarPersona (per) {
        this.contP++
        if (per.edad >= 18) {
            this.contPMayores++
        }
     }
     devolvercantP () {
        return this.contP
     }
     devolvercantPMayores () {
        return this.contPMayores
     }
    
     porcentaje () {
        return (this.contPMayores / this.contP) * 100
     }

}