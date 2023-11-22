import SilverWare from "../SilverWare/SilverWare";

function DinnerSupplies({guestList}) {
    // console.log(guestList)
    let count = guestList.length * 2
    // console.log(count)
    return(
        <>
            <SilverWare guestList={guestList} name="Spoons" count={count} />
            <SilverWare guestList={guestList} name="Forks" count={count} />
            <SilverWare guestList={guestList} name="Knives" count={count} />
        </>

)}

export default DinnerSupplies;