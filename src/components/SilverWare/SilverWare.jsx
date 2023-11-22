
function SilverWare(guestList) {
    let silverwareType = guestList.name;
    
    // console.log(guestList.count)

    return(
        <>
        <div>
            {silverwareType}: {guestList.count}
         </div>   
        </>
    )

}

export default SilverWare;