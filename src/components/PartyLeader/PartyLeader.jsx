
function PartyLeader(guestList) {
    console.log(guestList.leader, 'should be first guest')
    return(
        <>
            <h2>Party Leader</h2>
            {guestList.leader && <h3>{guestList.leader.name}</h3>}
        </>
)}

export default PartyLeader