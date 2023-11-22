// import axios from "axios";

// function deleteGuest(e) {
//   `
//     DELETE FROM guests 
//       WHERE "id" = $1;
//   `
//       console.log('delete')
// }
function CompileGuestList({guestList}) {
    return(
    <>
         <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Kid's Meal</th>
          </tr>
        </thead>
        <tbody>
{guestList.map(guest => (
    <tr key={guest.id}>
        <td>{guest.name}</td>
        <td>{String(guest.kidsMeal)}</td>
        {/* <td><button onClick="deleteGuest(e)">dead to me</button></td> */}
    </tr>
    ))}

        </tbody>
      </table>
    </>
)}
export default CompileGuestList;