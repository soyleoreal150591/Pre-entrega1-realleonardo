

const ItemListContainer = ({ mensaje }) => {
    return (


        <div className="container" >
            <div className="row" >
                <div className="col text-center"  >
                    
                       <h2 style= {{ fontFamily: 'Arial, sans-serif', fontStyle: 'normal', fontWeight: '100' }} >{mensaje}</h2> 
                    

                </div>

            </div>
        </div>
    )

}

export default ItemListContainer;