
const Headlines = ({ itemList }) => {



    return (
        <>
            <div className="card bg-dark">
                <div className="card-header bg-dark text-white">
                    <h1>Today's Headlines</h1>
                </div>
                <>{itemList}</>
            </div>


        </>
    )

}

export default Headlines;