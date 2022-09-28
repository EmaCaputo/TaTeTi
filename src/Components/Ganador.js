const Ganador = ({ chequeo }) => {

    function mostrarGanador() {
        var x = document.getElementById("ganador");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    



    return (
        <div>
            {
                `GANADOR: ${chequeo}`
            }
        </div>

    )
}

export default Ganador

