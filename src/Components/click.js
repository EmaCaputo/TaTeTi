

const Click = ({ click }) => {

    return (
        <div>
            {
                (click === 'X') ?
                    <p>Turno X</p>
                    :
                    <p>Turno O</p>
            }
        </div>

    )
}

export default Turno

