export default function(req, res){
    const miNombre:string = "Micaela"
    console.log("soy la api", miNombre)

    res.send(miNombre)
}